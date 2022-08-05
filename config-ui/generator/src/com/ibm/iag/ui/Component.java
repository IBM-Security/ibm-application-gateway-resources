/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Component {
    
    // Without a default constructor, Jackson will throw an exception
    public Component() {}

    /**
     * This method is the entry point to the code generation for the open API component
     * represented by this object.
     * It will call the correct generation method based upon the type of component.
     * 
     * @param name The top level name for this component (eg: resource_servers, servers, etc)
     * @throws Exception
     */
    public void generateUI(String name) throws Exception
    {
        switch(_type)
        {
            case "array":
                // Handle an array of items
                // This would be a grid on a landing page
                generateGridMenuPage(name);
                break;
            case "object":
                // Handle the properties 
                // This will be a tab container where each tab lines up with each of the object properties
                generateObjectMenuContent(name);
                break;
            case "number":
            case "string":
            case "boolean":
                // Create a form 
                generateSimpleMenuPage(name);
                break;
        }
    }
    
    /**
     * Method creates a simple form page with no arrays or hashes of field elements.
     * 
     * @param name
     * @throws Exception
     */
    private void generateSimpleMenuPage(String name) throws Exception
    {
        // Make sure the input name is valid
        if(name != null)
        {
            String title = getTitle(name, this._altName);
            
            // Set the name for the new react js page
            String pageName = name + "Page";
            
            addGlobalEntries(pageName, name);
            
            // Create the page
            String content = "";
            StringBuffer changeCode = new StringBuffer();
            StringBuffer stateFields = new StringBuffer();
            StringBuffer setStateFields = new StringBuffer();
            String defaultValue = "\"\"";
            String evtString = Constants.EVT_TARGET_VALUE;            

            // Create the code to transform the JSON to IAG YAML
            String newJsonToYaml = "    getComments(\"" + name + "\");\n" +
                                   "    retVal += \"" + name + ": \" + escapeYaml(json." + name + ", \"\") + \"\\\\\\\\n\";\n";

            // Code to handle a change to the simple field
            String onChange = "onChange={(evt) => {update" + name + "(evt); handleChange();}}";

            // Check if it needs to be a drop down select
            if(getEnum() != null && getEnum().size() > 0)
            {
                // Set the default value if one exists
                defaultValue = (_default != null && !_default.isEmpty())?_default:"\"\"";
                
                // Create the list of dropdown items
                StringBuffer items = new StringBuffer();
                for(String item: getEnum())
                {
                    items.append(Constants.SELECT_ITEM.replaceAll(Constants.SELECT_TEXT, item).replaceAll(Constants.SELECT_VALUE, item));
                    items.append("\n");
                }
                
                // Generate the content for the dropdown
                content = Constants.SELECT_INPUT.replaceAll(Constants.ADD_NAME, name).replaceAll(Constants.HANDLE_CHANGE, onChange)
                        .replaceAll(Constants.ADD_LABEL, getLabel(title, false)).replaceAll(Constants.SELECT_ITEMS, items.toString());
                
                // For IAG make sure that a default version is added
                if("version".equals(name))
                {
                    StringBuffer versionJsonToYaml = new StringBuffer();
                    
                    versionJsonToYaml.append("    if(json." + name + " == undefined || json." + name + " == null) {\n");
                    versionJsonToYaml.append("        json." + name + " = \"20.12\";\n");
                    versionJsonToYaml.append("    }\n\n");
                    versionJsonToYaml.append(newJsonToYaml);
                    
                    newJsonToYaml = versionJsonToYaml.toString();
                }
                
                changeCode.append("json[\"" + name + "\"] = document.getElementById(\"" + name + "_id\").value;");
                _validations.add(new ValidationEntry(name, "string", getEnum(), 0, false, 0, false));
            }
            else
            {
                // Not a dropdown so check which simple type to create
                switch(_type)
                {
                    case "number":
                        
                        String minText = (_minimum != null)?" min={" + _minimum + "} ":"";
                        String maxText = (_maximum != null)?" max={" + _maximum + "} ":"";
                        
                        // Set the default value if one exists
                        defaultValue = (_default != null && !_default.isEmpty() && !"unlimited".equals(_default))?_default:"0";
                        
                        // Generate the widget code
                        content = Constants.NUMBER_INPUT.replaceAll(Constants.ADD_NAME, name).replaceAll(Constants.HANDLE_CHANGE, onChange)
                        .replaceAll(Constants.ADD_LABEL, getLabel(title, false))
                        .replaceAll(Constants.ADD_MIN, minText)
                        .replaceAll(Constants.ADD_MAX, maxText);
                        
                        int min = -1;
                        int max = -1;
                        boolean minSet = false;
                        boolean maxSet = false;
                        if(_minimum != null && !_minimum.trim().isEmpty() && !"unlimited".equalsIgnoreCase(_minimum))
                        {
                            min = Integer.parseInt(_minimum);
                            minSet = true;
                        }
                        if(_maximum != null && !_maximum.trim().isEmpty() && !"unlimited".equalsIgnoreCase(_maximum))
                        {
                            max = Integer.parseInt(_maximum);
                            maxSet = true;
                        }
                        
                        // Handle widget value change
                        changeCode.append("json[\"" + name + "\"] = document.getElementById(\"" + name + "_id\").value;");
                        
                        // Generate validation code for this field
                        _validations.add(new ValidationEntry(name, "number", new ArrayList<String>(), min, minSet, max, maxSet));
                        
                        break;
                        
                    case "string":
                        
                        // Set the default value if one exists
                        defaultValue = (_default != null && !_default.isEmpty())?_default:"\"\"";
                        
                        
                        
                        // Generate the widget code
                        content = Constants.TEXT_INPUT.replaceAll(Constants.ADD_NAME, name).replaceAll(Constants.HANDLE_CHANGE, onChange)
                        .replaceAll(Constants.ADD_LABEL, getLabel(title, false))
                        .replaceAll(Constants.ADD_INVALID, "")
                        .replaceAll(Constants.ADD_INVALID_TEXT, "");
                        
                        // Handle widget value change
                        changeCode.append("    if(document.getElementById(\"" + name + "_id\").value.endsWith(\":\") !== true) {\n");
                        changeCode.append("      json[\"" + name + "\"] = document.getElementById(\"" + name + "_id\").value;\n");
                        changeCode.append("    }\n");
                        
                        // Generate validation for this field
                        _validations.add(new ValidationEntry(name, "string", new ArrayList<String>(), 0, false, 0, false));

                        break;
                    case "boolean":
                        
                        // Set the default value if one exists
                        defaultValue = (_default != null && !_default.isEmpty())?_default:"false";
                        evtString = Constants.EVT;
                        
                        // Generate the widget code
                        content = Constants.CHECKBOX_INPUT.replaceAll(Constants.ADD_NAME, name).replaceAll(Constants.HANDLE_CHANGE, onChange)
                                .replaceAll(Constants.ADD_LABEL, title);

                        // Handle widget value change
                        changeCode.append("json[\"" + name + "\"] = document.getElementById(\"" + name + "_id\").checked.toString();");
                        
                        // Generate the validation code for this field
                        _validations.add(new ValidationEntry(name, "boolean", new ArrayList<String>(), 0, false, 0, false));

                        break;
                }
            }
            
            // Add tooltip
            content = replaceTooltipText(content, _description, name);
            
            // Create the react state fields
            stateFields.append("    const [" + name + ", set" + name + "] = useState('" + defaultValue + "'),\n");
            stateFields.append("    update" + name + " = useCallback((evt) => set" + name + "(" + evtString + "), []);\n");
            setStateFields.append("      set" + name + "((json && json." + name + ")?json." + name + ":\"\");\n");

            // Generate the full page content replacing the macros with previously generated code
            String pageContent = Constants.SIMPLE_PAGE.replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(pageName))
                    .replaceAll(Constants.PAGECONTENT_MACRO, content)
                    .replaceAll(Constants.PAGE_DESC, _description)
                    .replaceAll(Constants.HEADING_NAME, title)
                    .replaceAll(Constants.PAGECHANGE_MACRO, changeCode.toString())
                    .replaceAll(Constants.ADD_EDIT_STATE_FIELDS, stateFields.toString())
                    .replaceAll(Constants.ADD_SET_STATE_FIELDS, setStateFields.toString())
                    .replaceAll(Constants.ADD_DIV_NAME, name + "_div")
                    .replaceAll(Constants.ADD_PROPS, "")
                    .replaceAll(Constants.ADD_ID_PREFIX, "_edit")
                    .replaceAll(Constants.EXTRA_PARAMS, "")
                    .replaceAll(Constants.EXTRA_BTN_PARAMS, "")
                    .replaceAll(Constants.ADD_TOOLBAR_NAME, "")
                    .replaceAll(Constants.ADD_INVALID, "")
                    .replaceAll(Constants.ADD_INVALID_TEXT, "");
            
            // Create the full file name and add it to the map of pages
            String fileName = Constants.CONTENT_DIR + pageName + "/" + pageName + ".js";
            _pages.put(fileName, pageContent);
            
            // Save the jsontoyaml code
            String currJsonToYaml = Constants.JSONTOYAML_CODE_SKELETON.replaceAll(Constants.ADD_NAME, name)
                    .replaceAll(Constants.JSONTOYAML_CODE, newJsonToYaml);
            
            _jsonToYaml.add(currJsonToYaml);
        }
    }
    
    /**
     * Method creates a complex form page with a tabbed list of fields.
     * 
     * @param name
     * @throws Exception
     */
    private void generateObjectMenuContent(String name) throws Exception
    {
        // Make sure the name is valid
        if(name != null)
        {
            // The top level div classname is this name
            _divClass = name + "_div";
            
            // Create the pageName
            String pageName = name + "Page";
            
            addGlobalEntries(pageName, name);

            // Recursively generate the content for this new tab page
            ComplexComponent newCompObj = new ComplexComponent(this, name, "json." + name, "rowData." + name, true, true, "  ", 
                    false, name, "", "        handleChange();\n", true, 0, false, 
                    null, "", "", name);
            newCompObj.generateComplexPageContent();
            
            //generateComplexPageContent(name, "json." + name, "rowData." + name, true, true, "  ", false, name, "", "        handleChange();\n", true, 0, false, null, "", "", name);

            // Finally generate the top level page for this component
            generateObjectMenuPage(pageName, name);
        }
    }
    
    /**
     * Method generates the top level page for an open API complex object.
     * ie a page with a list of properties.
     * 
     * @param pageName The new pageName
     * @param name The name of the top level container for this component.
     * @throws Exception
     */
    private void generateObjectMenuPage(String pageName, String name) throws Exception
    {
        // Make sure the pageName and name are valid
        if(pageName != null && !pageName.trim().isEmpty() && name != null && !name.trim().isEmpty())
        {
            // Generate the tabs
            StringBuffer tabContent = new StringBuffer();
            String defaultTab = generateTabContent(tabContent, _pathWithSelf, true, 1, false, true);

            // Create the handleChange code . ie populate the json object with all the field values
            StringBuffer changeCode = new StringBuffer();
            changeCode.append("    var newElem = {};\n");
            changeCode.append(_handleChangeCode);
            
            // Add child grid fields
            for(String longName: _extraGridFields.keySet())
            {
                String field = _extraGridFields.get(longName);
                changeCode.append("    newElem[\"" + field + "\"] = " + longName + "rowData." + longName + ";\n");
            }
            
            // Add the new element to the json
            changeCode.append("    json[\"" + name + "\"] = newElem;\n");
            
            // Need to create the state fields for each simple widget field
            StringBuffer addFieldPopCode = new StringBuffer();
            StringBuffer editFieldPopCode = new StringBuffer();
            StringBuffer setFieldCode = new StringBuffer();
            StringBuffer stateArgs = new StringBuffer();
            StringBuffer editStateArgs = new StringBuffer();
            StringBuffer dataLoadCodeGenerated = new StringBuffer();
            StringBuffer clearFieldCode = new StringBuffer();
            
            // Create set state strings
            setStateStringsRecursive(setFieldCode, addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, true);
            
            // Create the data load code
            String dataLoadCode = Constants.DATALOAD_CODE_TEMPLATE.replaceAll(Constants.ADD_POP_CODE, dataLoadCodeGenerated.toString());
    
            // Create the tab name
            String tabName = name;
    
            StringBuffer getDataCode = new StringBuffer();
            StringBuffer resetGrids = new StringBuffer();
            
            String indent = "        ";
            
            // Create the getData and resetgrids code
            setGetStringsRecursive(getDataCode, resetGrids, "json." + tabName, 1, 1, "", indent, true);
            
            // Create the page load code
            String pageLoadCode = Constants.LOAD_PAGE_CODE_TEMPLATE.replaceAll(Constants.ADD_NAME, tabName)
                    .replaceAll(Constants.ADD_RESET_GRIDS, resetGrids.toString())
                    .replaceAll(Constants.ADD_LOAD_CODE, getDataCode.toString());
            
            // Create the page content with macros replaced with generated code
            String pageContent = Constants.OBJECT_PAGE.replaceAll(Constants.ADD_TAB_LIST, tabContent.toString())
                    .replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(pageName))
                    .replaceAll(Constants.PAGECHANGE_MACRO, changeCode.toString())
                    .replaceAll(Constants.ADD_IMPORTS, listToString(_additionalImports))
                    .replaceAll(Constants.ADDITIONAL_CODE, listToString(_additionalCode))
                    .replaceAll(Constants.ADD_UPDATE_GRID_CODE, _updateGridDataCode.toString())
                    .replaceAll(Constants.ADD_DIV_NAME, name + "_div")
                    .replaceAll(Constants.ADD_HIDE_TABS, Constants.HIDE_TABS)
                    .replaceAll(Constants.ADD_SHOW_TABS, Constants.SHOW_TABS.replaceAll(Constants.ADD_TAB_ID, tabName))
                    .replaceAll(Constants.PAGE_DESC, _description)
                    .replaceAll(Constants.HEADING_NAME, getTitle(name, this._altName))
                    .replaceAll(Constants.ADD_FIELD_POPULATE_CODE, addFieldPopCode.toString())
                    .replaceAll(Constants.ADD_SET_STATE_FIELDS, setFieldCode.toString())
                    .replaceAll(Constants.ADD_TAB_ID, tabName)
                    .replaceAll(Constants.ADD_PROPS, "")
                    .replaceAll(Constants.ADD_GRID_UPDATE_HTML, _gridUpdateHtml.toString())
                    .replaceAll(Constants.ADD_ID_PREFIX, "_edit")
                    .replaceAll(Constants.EXTRA_PARAMS, "")
                    .replaceAll(Constants.EXTRA_BTN_PARAMS, "")
                    .replaceAll(Constants.ADD_DATALOAD_CODE, dataLoadCode)
                    .replaceAll(Constants.ADD_JSON_LOAD, Constants.JSON_LOAD)
                    .replaceAll(Constants.ADD_LOAD_PAGE_CODE, pageLoadCode)
                    .replaceAll(Constants.ADD_TOOLBAR_NAME, "")
                    .replaceAll(Constants.ADD_INVALID, "")
                    .replaceAll(Constants.ADD_INVALID_TEXT, "")
                    .replaceAll(Constants.ADD_DEFAULT_TAB, defaultTab)
                    .replaceAll(Constants.ADD_PAGE_NAME, pageName);
            
            // Add the new page and contents to the pages map
            String fileName = Constants.CONTENT_DIR + pageName + "/" + pageName + ".js";
            _pages.put(fileName, pageContent);
        }
    }


    /**
     * Method generates a menu page that contains an array of elements shown in a grid.
     * At present only works if the array is an array of objects.
     * 
     * @param name
     * @throws Exception
     */
    private void generateGridMenuPage(String name) throws Exception
    {
        // Make sure name is valid
        if(name != null)
        {
            String pageName = name + "Page";
            
            addGlobalEntries(pageName, name);
            
            // Create the new page
            switch(_items.getType())
            {
                case "object":
                    
                    // Its a list of different components
                    generateGridPage(pageName, name);

                    break;
                    
                default:
                    throw new RuntimeException("Unsupported Open API yaml : " + _items.getType());
            }
        }
    }
    
    /**
     * Method generates a landing page with a grid. The fields are generated from each top level simple type.
     * An "Add" page is generated to allow new entries to be added.
     * 
     * @param pageName
     * @param name
     * @throws Exception
     */
    private void generateGridPage(String pageName, String name) throws Exception
    {
        // Make sure the pageName and name are valid
        if(pageName != null && !pageName.trim().isEmpty() && name != null && !name.trim().isEmpty())
        {
            // Recursively loop through all of the array items and generate the UI code
            ComplexComponent newCompObj = new ComplexComponent(_items, name, "json." + name + "[i]", "rowData." + name + "[i]", true, true, "    ", 
                    true, "", "", "", false, 1, false, null, "", "", name);
            newCompObj.generateComplexPageContent();
            
            if(_items._idFields.isEmpty())
            {
                System.err.println("The top level array " + name + " does not have a UUID field.");
                System.exit(1);
            }
            
            //_items.generateComplexPageContent(name, "json." + name + "[i]", "rowData." + name + "[i]", true, true, "    ", true, "", "", "", false, 1, false, null, "", "", name);
            
            // Save all validations
            _validations.addAll(_items.getValidations());
            
            // Save all json to YAML
            _jsonToYaml.addAll(_items.getJsonToYaml());
            
            // Set page title
            String title = getTitle(name, this._altName);
            
            // These are the arguments to the handleAdd function
            StringBuffer addArgs = new StringBuffer();
            addArgs.append(_items._functionArgs.toString());
            for(String field: _items._extraGridFields.keySet())
            {
                addArgs.append(field + ",");
            }
            
            // Need to create the state fields for each simple widget field
            StringBuffer addFieldPopCode = new StringBuffer();
            StringBuffer editFieldPopCode = new StringBuffer();
            StringBuffer setFieldCode = new StringBuffer();
            StringBuffer stateArgs = new StringBuffer();
            StringBuffer editStateArgs = new StringBuffer();
            StringBuffer dataLoadCodeGenerated = new StringBuffer();
            StringBuffer clearFieldCode = new StringBuffer();
            
            // Create set state strings
            setStateStrings(_items._simpleFields, _items._idFields, setFieldCode, addFieldPopCode, 
                    editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, false, true);
            
            StringBuffer deleteCondition = new StringBuffer();
            StringBuffer idFieldsCondition = new StringBuffer();
            StringBuffer createTempId = new StringBuffer();
            StringBuffer createNewId = new StringBuffer();
            StringBuffer idNotNullCond = new StringBuffer();
            StringBuffer createTempIdJson = new StringBuffer();
            _items.handleIdFields(name, "", deleteCondition, idFieldsCondition, createTempId, createNewId, idNotNullCond, createTempIdJson, new StringBuffer(), "");
            
            // Create the grid landing page
            String pageData = Constants.GRID_PAGE.replaceAll(Constants.ADD_ROW_KEY, name).replaceAll(Constants.ADD_COMPONENT_NAME, name)
                    .replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(pageName))
                    .replaceAll(Constants.ADD_GRID_TITLE, title)
                    .replaceAll(Constants.ADD_FIELDS, _items._dataFields.toString())
                    .replaceAll(Constants.ADD_ARGS, addArgs.toString())
                    .replaceAll(Constants.ADD_PUSH_DATA, _items._pushData.toString())
                    .replaceAll(Constants.ADD_POPULATE_JSON, _items._populateJson.toString())
                    .replaceAll(Constants.ADD_ID_FIELDS_CONDITION, idFieldsCondition.toString())
                    .replaceAll(Constants.CREATE_TEMP_ID, createTempId.toString())
                    .replaceAll(Constants.CREATE_NEW_ID, createNewId.toString())
                    .replaceAll(Constants.ADD_DELETE_CONDITION, deleteCondition.toString())
                    .replaceAll(Constants.CREATE_TEMP_ID_JSON, createTempIdJson.toString())
                    .replaceAll(Constants.ADD_ROW_KEY_CAMEL, Constants.toCamelCase(name, false))
                    .replaceAll(Constants.ADD_EDIT_STATE_FIELDS, addFieldPopCode.toString())
                    .replaceAll(Constants.ADD_SET_STATE_FIELDS, setFieldCode.toString())
                    .replaceAll(Constants.ADD_NAME, name)
                    .replaceAll(Constants.PAGE_DESC, _description)
                    .replaceAll(Constants.HEADING_NAME, title)
                    .replaceAll(Constants.ADD_STATE_ARGS, stateArgs.toString())
                    .replaceAll(Constants.ADD_EDIT_STATE_ARGS, stateArgs.toString())
                    .replaceAll(Constants.ADD_PROPS, "").replaceAll(Constants.ADD_ID_PREFIX, "_edit")
                    .replaceAll(Constants.EXTRA_PARAMS, "")
                    .replaceAll(Constants.EXTRA_BTN_PARAMS, "")
                    .replaceAll(Constants.ADD_CLEAR_STATE, clearFieldCode.toString())
                    .replaceAll(Constants.ADD_INVALID, "")
                    .replaceAll(Constants.ADD_INVALID_TEXT, "");
            
            // Add the new page and contents to the pages map
            String fileName = Constants.CONTENT_DIR + pageName + "/" + pageName + ".js";
            _pages.put(fileName, pageData);
            
            // Create the add, edit and delete pages.
            _items.generateGridUpdatePages(name, name, listToString(_items._additionalCode), listToString(_items._additionalImports), 
                    _items._updateGridDataCode.toString(), _items._extraGridAddArgs.toString(), _items._extraGridNames, "", _items._childGrid, true, 1, name, "");
            
            // Add the new pages and contents to the pages map
            _pages.putAll(_items.getPagesMap());
        }
    }
    
    /**
     * Method generates the page that allows a new array element to be added.
     * 
     * @param pageName
     * @param tabContentMap
     * @param gridFields
     * @param loadArgs
     * @throws Exception
     */
    void generateGridUpdatePages(String dirName, String pageName, String additionalCode, String additionalImports, 
            String extraGridCode, String extraGridAddArgs, List<String> extraGridNames, 
            String pagePrefix, List<SimpleComponent> childGrids, boolean isTop, int level, String compPath, String objPath) throws Exception
    {
        boolean top = dirName.equals(pageName);

        StringBuffer stateFields = new StringBuffer();
        StringBuffer setFieldsEmpty = new StringBuffer();
        StringBuffer gridSaveCode = new StringBuffer();
        StringBuffer saveArgs = new StringBuffer();
        StringBuffer submitStateArgs = new StringBuffer();
        StringBuffer deleteState = new StringBuffer();
        
        int index = 0;
        for(SimpleComponent comp: _simpleFields)
        {
            String type = comp.getType();
            String fieldname = comp.getName();
            
            switch(type)
            {
                case "boolean":
                    stateFields.append("        " + fieldname + ": 'false',\n");
                    setFieldsEmpty.append("    document.getElementById(\"" + fieldname + "_id\").checked = false;\n");
                    gridSaveCode.append("    json[\"" + fieldname + "\"] = document.getElementById(\"" + fieldname + "_id\" + idPrefix).checked.toString();\n");
                    break;
                case "number":
                    stateFields.append("        " + fieldname + ": '',\n");
                    setFieldsEmpty.append("    document.getElementById(\"" + fieldname + "_id\").value = \"\";\n");
                    gridSaveCode.append("    json[\"" + fieldname + "\"] = document.getElementById(\"" + fieldname + "_id\" + idPrefix).value;\n");
                    break;
                default:
                    stateFields.append("        " + fieldname + ": '',\n");
                    setFieldsEmpty.append("    document.getElementById(\"" + fieldname + "_id\").value = \"\";\n");
                    
                    // The YAML string cannot end with ":" as this is invalid yaml
                    gridSaveCode.append("    if(document.getElementById(\"" + fieldname + "_id\" + idPrefix).value.endsWith(\":\") !== true) {\n");
                    gridSaveCode.append("      json[\"" + fieldname + "\"] = document.getElementById(\"" + fieldname + "_id\" + idPrefix).value;\n");
                    gridSaveCode.append("    }\n");
            }
            
            saveArgs.append(" json[\"" + fieldname + "\"],");
            
            submitStateArgs.append("this.state." + fieldname + ",");
            
            index++;
        }
        
        // Generate code to create an empty data array
        for(String gridName: extraGridNames)
        {
            // Create an empty array variable
            setFieldsEmpty.append("    " + gridName + "rowData." + gridName + " = []\n");
            
            // Set the grid row data as the new empty array
            setFieldsEmpty.append("    set" + gridName + "(" + gridName + "rowData." + gridName + ");\n\n");
        }
        
        // Generate the grid save code
        for(String longName: _extraGridFields.keySet())
        {
            gridSaveCode.append("    json[\"" + longName + "\"] = " + longName + "rowData." + longName + ";\n");
            saveArgs.append(" json[\"" + longName + "\"],");
        }
        
        // Set the delete modal state fields
        for(index = 0; index < _gridFields.size(); index++)
        {
            String field = _gridFields.get(index);
            
            for(SimpleComponent comp: _simpleFields)
            {
                String longField = comp.getName();
                if(longField.endsWith(field))
                {
                    deleteState.append("      " + longField + ": this.props.row.cells[" + index + "].value,\n");
                    break;
                }
            }
        }
        
        // Generate the tabs
        StringBuffer tabContent = new StringBuffer();
        String defaultTab = generateTabContent(tabContent, _pathWithSelf, top, level, false, false);
        
        // If both pageSUffix and name are not empty then add _ delimiter
        String fullName = generateFullName(pagePrefix, pageName);
        
        StringBuffer disabledStr = new StringBuffer();
        StringBuffer createTempJsonId = new StringBuffer();
        StringBuffer createTempDataId = new StringBuffer();
        handleIdFields(fullName, "", new StringBuffer(), new StringBuffer(), new StringBuffer(), new StringBuffer(), new StringBuffer(), createTempJsonId, createTempDataId, "");
        handleRequiredFields(disabledStr);
        
        String addToolbar = Constants.ADD_TOP_TOOLBAR.replaceAll(Constants.ADD_BUTTON, Constants.ADD_BUTTON_TEMPLATE)
                .replaceAll(Constants.HANDLE_ADD_TYPE, Constants.toCamelCase(pageName, true))
                .replaceAll(Constants.HANDLE_ADD_ARGS, extraGridAddArgs)
                .replaceAll(Constants.ADD_HIDE, Constants.HIDE_STYLE)
                .replaceAll(Constants.ADD_NAME, fullName)
                .replaceAll(Constants.ADD_DISABLED_STATE, disabledStr.toString());
        
        String editToolbar = Constants.ADD_TOP_TOOLBAR.replaceAll(Constants.ADD_BUTTON, "")
                .replaceAll(Constants.HANDLE_ADD_TYPE, Constants.toCamelCase(pageName, true))
                .replaceAll(Constants.HANDLE_ADD_ARGS, extraGridAddArgs)
                .replaceAll(Constants.ADD_HIDE, "")
                .replaceAll(Constants.ADD_NAME, fullName + "_edit")
                .replaceAll(Constants.ADD_DISABLED_STATE, disabledStr.toString());
        
        String handleAdd = Constants.HANDLE_ADD_TOP;
        String handleClose = Constants.HANDLE_CLOSE_TOP;
        String handleAddEdit = Constants.HANDLE_ADD_TOP_EDIT;
        String handleCloseEdit = Constants.HANDLE_CLOSE_TOP_EDIT;
        String extraEditParams = "";
        
        if(!objPath.isEmpty())
        {
            if(objPath.startsWith("json."))
            {
                objPath = objPath.substring(5);
            }
            objPath = objPath.replaceAll("\\[i]\\.", "_")
                    .replaceAll("\\.", "_") 
                    .replaceAll("\\[i.?]", ""); 
        }
        
        String tabId = (objPath.isEmpty())?((pagePrefix != null && !pagePrefix.isEmpty())?(pagePrefix + "_" + pageName):pageName):objPath;
        
        String addTabs = Constants.TABS_TOP.replaceAll(Constants.ADD_TAB_ID, tabId)
                .replaceAll(Constants.ADD_DEFAULT_TAB, defaultTab);
        
        String hideTabs = "";
        String showTabs = "";
        String showTabsEdit = "";
        String hideTabsEdit = "";
        String addToolbarName = "";
        String addToolbarNameEdit = "";
        
        if(tabId != null && !tabId.trim().isEmpty())
        {
            if(isTop)
            {
                hideTabs = Constants.HIDE_TABS_TOP.replaceAll(Constants.ADD_TAB_ID, tabId);
                showTabs = Constants.SHOW_TABS_TOP.replaceAll(Constants.ADD_TAB_ID, tabId);
                hideTabsEdit = Constants.HIDE_TABS_TOP.replaceAll(Constants.ADD_TAB_ID, tabId);
                showTabsEdit = Constants.SHOW_TABS_TOP.replaceAll(Constants.ADD_TAB_ID, tabId);
            }
            else
            {
                hideTabs = Constants.HIDE_TABS.replaceAll(Constants.ADD_TAB_ID, tabId);
                showTabs = Constants.SHOW_TABS.replaceAll(Constants.ADD_TAB_ID, tabId);
                hideTabsEdit = Constants.HIDE_TABS.replaceAll(Constants.ADD_TAB_ID, tabId);
                showTabsEdit = Constants.SHOW_TABS.replaceAll(Constants.ADD_TAB_ID, tabId);
            }
        }

        // If the dirname if not equal to the pageName then its a child array
        if(!dirName.equals(pageName))
        {
            //String containerDivId = tabName + "_div";
            String divClass = (!_parentDivClass.equals("unset_div"))?_parentDivClass:_divClass;

            StringBuffer handleCloseExtra = new StringBuffer();
            handleCloseExtra.append("    updateStyle(\"" + divClass + "\" + idPrefix, \"display\", \"block\");");
            handleCloseExtra.append("\n");
            handleCloseExtra.append(Constants.ELEM_DISPLAY.replaceAll(Constants.ADD_ID, "add" + fullName + "Page").replaceAll(Constants.VALUE, "none"));
            handleCloseExtra.append("\n");
            
            handleAdd = Constants.HANDLE_ADD_NON_TOP;
            handleAddEdit = Constants.HANDLE_ADD_NON_TOP_EDIT.replaceAll(Constants.ADD_NAME, (!compPath.isEmpty())?compPath:pageName);
            
            handleCloseEdit = Constants.HANDLE_CLOSE_NON_TOP_EDIT.replaceAll(Constants.ADD_NAME, (!compPath.isEmpty())?compPath:pageName);
            handleClose = Constants.HANDLE_CLOSE_NON_TOP.replaceAll(Constants.ADD_HANDLE_CLOSE2, handleCloseExtra.toString());
            
            editToolbar = "";
            addToolbar = "";
            
            extraEditParams = Constants.EDIT_PARAMS;
            
            //getDataCode.append(Constants.GET_CODE_TEMPLATE);
            
        }
        else
        {
            showTabsEdit = showTabs + Constants.SHOW_TOOLBAR.replaceAll(Constants.ADD_NAME, fullName + "_edit");
            showTabs = showTabs + Constants.SHOW_TOOLBAR.replaceAll(Constants.ADD_NAME, fullName);
            
            hideTabsEdit = hideTabs + Constants.HIDE_TOOLBAR.replaceAll(Constants.ADD_NAME, fullName + "_edit");
            hideTabs = hideTabs + Constants.HIDE_TOOLBAR.replaceAll(Constants.ADD_NAME, fullName);
            
            addToolbarName = "toolbarName={\"" + fullName + "_tb\"}";
            addToolbarNameEdit = "toolbarName={\"" + fullName + "_edit_tb\"}";
        }
        
        // Need to create the state fields for each simple widget field
        StringBuffer addFieldPopCode = new StringBuffer();
        StringBuffer editFieldPopCode = new StringBuffer();
        StringBuffer setFieldCode = new StringBuffer();
        StringBuffer stateArgs = new StringBuffer();
        StringBuffer editStateArgs = new StringBuffer();
        StringBuffer dataLoadCodeGenerated = new StringBuffer();
        StringBuffer clearFieldCode = new StringBuffer();
        
        // Create set state strings
        // For each direct array get the state data
        setStateStringsRecursive(setFieldCode, addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, false);
        
        String dataLoadCode = Constants.DATALOAD_CODE_TEMPLATE.replaceAll(Constants.ADD_POP_CODE, dataLoadCodeGenerated.toString());
        
        // Top level edit/add pages are slightly bigger than deeper level pages
        String heightLevelAdjust = "0";
        if(!top)
        {
            heightLevelAdjust = "10";
        }
        
        // Add the html element for the grid update
        addTabs = addTabs + _gridUpdateHtml.toString();
        
        String addPageContent = Constants.GRID_ADD_PAGE.replaceAll(Constants.ADD_TABS, addTabs)
                .replaceAll(Constants.ADD_TAB_LIST, tabContent.toString())
                .replaceAll(Constants.ADD_ROW_KEY, fullName)
                .replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(fullName))
                .replaceAll(Constants.ADD_STATE_FIELDS, stateFields.toString())
                .replaceAll(Constants.ADDITIONAL_CODE, additionalCode)
                .replaceAll(Constants.SET_FIELDS_EMPTY, setFieldsEmpty.toString())
                .replaceAll(Constants.ADD_UPDATE_GRID_CODE, extraGridCode)
                .replaceAll(Constants.LOAD_GRID_PARAMS, saveArgs.toString())
                .replaceAll(Constants.ADD_GRID_SAVE_CODE, gridSaveCode.toString())
                .replaceAll(Constants.ADD_IMPORTS, additionalImports)
                .replaceAll(Constants.ADD_HANDLE_ADD, handleAdd)
                .replaceAll(Constants.ADD_HANDLE_CLOSE, handleClose)
                .replaceAll(Constants.ADD_TOOLBAR, addToolbar)
                .replaceAll(Constants.ADD_COMPONENT_NAME, fullName)
                .replaceAll(Constants.HANDLE_ADD_ARGS, (!extraGridAddArgs.isEmpty())?extraGridAddArgs + ", ":"")
                .replaceAll(Constants.ADD_DIV_NAME, tabId + "_div")
                .replaceAll(Constants.ADD_HIDE_TABS, hideTabs)
                .replaceAll(Constants.ADD_SHOW_TABS, showTabs)
                .replaceAll(Constants.ADD_FIELD_POPULATE_CODE, addFieldPopCode.toString())
                .replaceAll(Constants.ADD_SET_STATE_FIELDS, setFieldCode.toString())
                .replaceAll(Constants.ADD_PROPS, "props.")
                .replaceAll(Constants.ADD_ID_PREFIX, "_add")
                .replaceAll(Constants.EXTRA_PARAMS, "")
                .replaceAll(Constants.EXTRA_BTN_PARAMS, "")
                .replaceAll(Constants.ADD_DATALOAD_CODE, dataLoadCode)
                .replaceAll(Constants.ADD_JSON_LOAD, "")
                .replaceAll(Constants.ADD_TOOLBAR_NAME, addToolbarName);
        
        // Update the widget code for id fields
        for(String longIdField: _idFields.keySet())
        {
            String valueTemplateComp = Constants.VALUE_TEMPLATE.replaceAll(Constants.ADD_PROPS, "props.")
                .replaceAll(Constants.ADD_NAME, longIdField);
        
        
            String valueTemplateNew = Constants.VALUE_TEMPLATE.replaceAll(Constants.ADD_INVALID, " invalid={!props." + longIdField + "_valid} ")
                .replaceAll(Constants.ADD_INVALID_TEXT, " invalidText={props." + longIdField + "_invalid_text} ")
                .replaceAll(Constants.ADD_PROPS, "props.")
                .replaceAll(Constants.ADD_NAME, longIdField);
        
            addPageContent = addPageContent.replace(valueTemplateComp, valueTemplateNew);
        }    
        
        // Finish the macro replacement
        addPageContent = addPageContent.replaceAll(Constants.ADD_INVALID, "")
                .replaceAll(Constants.ADD_INVALID_TEXT, "")
                .replaceAll(Constants.ADD_TOP_LEVEL_BREAKS, (isTop)?Constants.TOP_LEVEL_BREAKS:"")
                .replaceAll(Constants.ADD_MAIN_PAGE_NAME, dirName + "Page")
                .replaceAll(Constants.ADD_MAIN_HEIGHT_LEVEL, heightLevelAdjust);
        
        // Create the Add page
        String fileName = Constants.CONTENT_DIR + dirName + "Page/" + pagePrefix + pageName + "Add.js";
        _pages.put(fileName, addPageContent);
        
        // Next create the edit page
        
        // Create the childGrid set data code
        StringBuffer gridEditSetData = new StringBuffer();
        
        String mainJsonPath = "";

        // Need the first id fields so that the comp path can be generated
        // ie path[i].idfield 
        // Find and remove the idField leaving path[i]
        String firstLongIdField = "";
        String firstShortIdField = "";
        for(String key: _idFields.keySet())
        {
            firstLongIdField = key;
            firstShortIdField = _idFields.get(key);
            break;
        }
        
        for(SimpleComponent comp: _simpleFields)
        {
            if(comp.getName().equals(firstLongIdField))
            {
                mainJsonPath = comp.getJsonPath();
                break;
            }
        }
        
        if(mainJsonPath == null || mainJsonPath.isEmpty())
        {
            System.err.println("Missing array uuid fields for : " + _path);
            System.exit(1);
        }
        
        tabContent = new StringBuffer();
        defaultTab = generateTabContent(tabContent, _pathWithSelf, top, level, true, false);

        // This is the json path of the array element (including the "[i]"
        String superPath = mainJsonPath.substring(0, mainJsonPath.length() - firstShortIdField.length() - 1);

        // For simple grids the path does not have a field. eg: json.resource_servers[i].servers[i2].ssl.certificate[i3]
        // Do not match on ending [i]
        if(mainJsonPath.matches(".*i.]$"))
        {
            superPath = mainJsonPath;
        }

        // Only handle valid paths that end in an array index eg: [i] or [i2]
        if(superPath.matches(".*i.*]$"))
        {
            int lastIndex = superPath.indexOf("[");
            String arrayPath = superPath.substring(0, lastIndex);
            
            StringBuffer resetGrids = new StringBuffer();
            StringBuffer setGridFields = new StringBuffer();
            StringBuffer setGridFieldsFromData = new StringBuffer();
            
            for(SimpleComponent currChild: childGrids)
            {
                String name = currChild.getName();
                resetGrids.append("    " + name + "rowData." + name + " = [];\n");
                
                String jsonPath = currChild.getJsonPath();

                Collection<String> idFields = currChild.getShortIdFields();
                String firstIdField = (idFields != null)?idFields.iterator().next():null;
                if(firstIdField == null || firstIdField.isEmpty())
                {
                    System.err.println("Missing ID field for : " + jsonPath);
                    System.exit(1);
                }
                
                // The set grid fields from yaml is only valid for single level arrays
                if(jsonPath.indexOf("[i2]") < 0)
                {
                    // First do json path code. This will populate the grids from the YAML/JSON
                    setGridFields.append("            if(" + generateFullPathCondition(jsonPath, false) + ") {\n");
                    setGridFields.append("              for(var i2 = 0; i2 < " + jsonPath + ".length; i2++) {\n");
                    
                    if(currChild.isSimpleGrid())
                    {
                        setGridFields.append("                var newItem = {};\n");
                        setGridFields.append("                newItem.id = " + jsonPath + "[i2];\n");
                        setGridFields.append("                newItem." + firstIdField + " = " + jsonPath + "[i2];\n");
                        setGridFields.append("                " + name + "rowData." + name + ".push(newItem);\n");
                    }
                    else
                    {
                        StringBuffer createTempId = new StringBuffer();
                        Iterator<String> iter = idFields.iterator();
                        while(iter.hasNext())
                        {
                            String currId = iter.next();
                            setGridFields.append("                " + jsonPath + "[i2]." + currId + " = " + jsonPath + "[i2]." + currId + ".toString();\n");
                            
                            if(createTempId.length() > 0)
                            {
                                createTempId.append(" + ");
                            }
                            String currItem =  jsonPath + "[i2]." + currId;
                            createTempId.append("((" + currItem + ")?" + currItem + ".toString():\"\")");
                        }
                        
                        setGridFields.append("                if(" + jsonPath + "[i2].id == undefined) {\n");
                        setGridFields.append("                  var tempId = " + createTempId.toString() + ";\n");
                        setGridFields.append("                  " + jsonPath + "[i2].id = tempId;\n");
                        setGridFields.append("                }\n\n");
                        setGridFields.append("                " + name + "rowData." + name + ".push(" + jsonPath + "[i2]);\n");
                    }
                    
                    setGridFields.append("              }\n");
                    setGridFields.append("            }\n");
                }
                
                // Now do similar for data path code. This will populate the grids from the parent grid
                String dataPath = "data[i]" + jsonPath.substring(jsonPath.lastIndexOf(']') + 1);
                
                setGridFieldsFromData.append("            if(" + generateFullPathCondition(dataPath, false) + ") {\n");
                
                // If a string has been entered instead of an array then add it as a single array item
                setGridFieldsFromData.append("              if(typeof " + dataPath + " === \"string\") {\n");
                setGridFieldsFromData.append("                var newItem = {};\n");
                setGridFieldsFromData.append("                newItem[\"id\"] = " + dataPath + ";\n");
                Iterator<String> iter = idFields.iterator();
                while(iter.hasNext())
                {
                    String currId = iter.next();
                    setGridFieldsFromData.append("                newItem[\"" + currId + "\"] = " + dataPath + ";\n");
                }
                setGridFieldsFromData.append("                " + name + "rowData." + name + ".push(newItem);\n");
                setGridFieldsFromData.append("              } else {\n");
                setGridFieldsFromData.append("                for(var i2 = 0; i2 < " + dataPath + ".length; i2++) {\n");
                if(currChild.isSimpleGrid())
                {
                    setGridFieldsFromData.append("                  var newItem = {};\n");
                    setGridFieldsFromData.append("                  if(" + dataPath + "[i2].id) {\n");
                    setGridFieldsFromData.append("                    newItem[\"id\"] = " + dataPath + "[i2].id;\n");
                    setGridFieldsFromData.append("                  } else if(" + dataPath + "[i2]." + firstIdField + ") {\n");
                    setGridFieldsFromData.append("                    newItem[\"id\"] = " + dataPath + "[i2]." + firstIdField + ";\n");
                    setGridFieldsFromData.append("                  } else {\n");
                    setGridFieldsFromData.append("                    newItem[\"id\"] = " + dataPath + "[i2];\n");
                    setGridFieldsFromData.append("                  }\n");
                    setGridFieldsFromData.append("                  if(" + dataPath + "[i2]." + firstIdField + ") {\n");
                    setGridFieldsFromData.append("                    newItem[\"" + firstIdField + "\"] = " + dataPath + "[i2]." + firstIdField + ";\n");
                    setGridFieldsFromData.append("                  } else {\n");
                    setGridFieldsFromData.append("                    newItem[\"" + firstIdField + "\"] = " + dataPath + "[i2];\n");
                    setGridFieldsFromData.append("                  }\n");
                    setGridFieldsFromData.append("                  " + name + "rowData." + name + ".push(newItem);\n");
                }
                else
                {
                    StringBuffer createTempId = new StringBuffer();
                    iter = idFields.iterator();
                    while(iter.hasNext())
                    {
                        String currId = iter.next();
                        setGridFieldsFromData.append("                  " + dataPath + "[i2]." + currId + " = " + dataPath + "[i2]." + currId + ".toString();\n");
                        
                        if(createTempId.length() > 0)
                        {
                            createTempId.append(" + ");
                        }
                        String currItem =  dataPath + "[i2]." + currId;
                        createTempId.append("((" + currItem + ")?" + currItem + ".toString():\"\")");
                    }
                    
                    setGridFieldsFromData.append("                  if(" + dataPath + "[i2].id === undefined) {\n");
                    setGridFieldsFromData.append("                    var tempId = " + createTempId.toString() + ";\n"); 
                    setGridFieldsFromData.append("                    " + dataPath + "[i2].id = tempId;\n");
                    setGridFieldsFromData.append("                  }\n");
                    setGridFieldsFromData.append("                  " + name + "rowData." + name + ".push(" + dataPath + "[i2]);\n");
                }
                setGridFieldsFromData.append("                }\n");
                setGridFieldsFromData.append("              }\n");
                setGridFieldsFromData.append("              setData(\"set" + name + "\", " + name + "rowData." + name + ");\n");
                setGridFieldsFromData.append("            }\n");
                
            }
            
            // Generate the getEditData code but only if required
            gridEditSetData.append(resetGrids);
            gridEditSetData.append("    if(data && setData) {\n");
            gridEditSetData.append("      for(var i = 0; i < data.length; i++) {\n");
            gridEditSetData.append("        var tempId = " + createTempDataId.toString() + ";\n");
            gridEditSetData.append("        if(tempId === window[oName + \"rowId\"]) {\n");
            gridEditSetData.append(setGridFieldsFromData);
            gridEditSetData.append("        }\n");
            gridEditSetData.append("      }\n");
            gridEditSetData.append("    } else {\n");
            gridEditSetData.append("      if(" + generateFullPathCondition(arrayPath, false) + ") {\n");
            if(setGridFields.length() > 0)
            {
                gridEditSetData.append("        for(var i = 0; i < " + arrayPath + ".length; i++) {\n");
                gridEditSetData.append("          var tempId = " + createTempJsonId.toString() + ";\n");
                gridEditSetData.append("          if(tempId === window[oName + \"rowId\"]) {\n");
                gridEditSetData.append(setGridFields);
                gridEditSetData.append("          }\n");
                gridEditSetData.append("        }\n");
            }
            gridEditSetData.append("      }\n");
            
            gridEditSetData.append("    }\n");
        }
        
        String addGetCode = Constants.GET_CODE_TEMPLATE.replaceAll(Constants.ADD_NAME, pagePrefix + pageName).replaceAll(Constants.ADD_POP_CODE, gridEditSetData.toString());
        
        // Edit pages for nested grids need to pass the parentIdPrefix as a param
        String extraParams = (isTop)?"":Constants.PARENTID_PARAM;
        
        String editPageContent = Constants.GRID_EDIT_PAGE.replaceAll(Constants.ADD_TABS, addTabs).replaceAll(Constants.ADD_TAB_LIST, tabContent.toString())
                .replaceAll(Constants.ADD_ROW_KEY, fullName)
                .replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(fullName))
                .replaceAll(Constants.ADD_STATE_FIELDS, stateFields.toString())
                .replaceAll(Constants.ADDITIONAL_CODE, additionalCode)
                .replaceAll(Constants.SET_FIELDS_EMPTY, setFieldsEmpty.toString())
                .replaceAll(Constants.ADD_UPDATE_GRID_CODE, extraGridCode)
                .replaceAll(Constants.LOAD_GRID_PARAMS, saveArgs.toString())
                .replaceAll(Constants.ADD_GRID_SAVE_CODE, gridSaveCode.toString())
                .replaceAll(Constants.ADD_IMPORTS, additionalImports)
                .replaceAll(Constants.ADD_HANDLE_ADD, handleAddEdit)
                .replaceAll(Constants.ADD_HANDLE_CLOSE, handleCloseEdit)
                .replaceAll(Constants.ADD_TOOLBAR, editToolbar)
                .replaceAll(Constants.ADD_COMPONENT_NAME, fullName)
                .replaceAll(Constants.HANDLE_ADD_ARGS, (!extraGridAddArgs.isEmpty())?extraGridAddArgs + ", ":"")
                .replaceAll(Constants.ADD_DIV_NAME, tabId + "_div")
                .replaceAll(Constants.ADD_HIDE_TABS, hideTabsEdit)
                .replaceAll(Constants.ADD_SHOW_TABS, showTabsEdit)
                .replaceAll(Constants.ADD_EDIT_STATE_FIELDS, editFieldPopCode.toString())
                .replaceAll(Constants.ADD_GET_CODE, addGetCode)
                .replaceAll(Constants.ADD_DATALOAD_CODE, dataLoadCode)
                .replaceAll(Constants.ADD_JSON_LOAD, "")
                .replaceAll(Constants.ADD_PROPS, "props.")
                .replaceAll(Constants.ADD_ID_PREFIX, "_edit")
                .replaceAll(Constants.EXTRA_PARAMS, extraParams)
                .replaceAll(Constants.ADD_TAB_NAME, tabId + "_tab")
                .replaceAll(Constants.EXTRA_BTN_PARAMS, extraEditParams)
                .replaceAll(Constants.ADD_TOOLBAR_NAME, addToolbarNameEdit)
                .replaceAll(Constants.ADD_INVALID, "")
                .replaceAll(Constants.ADD_INVALID_TEXT, "")
                .replaceAll(Constants.ADD_TOP_LEVEL_BREAKS, (isTop)?Constants.TOP_LEVEL_BREAKS:"")
                .replaceAll(Constants.ADD_MAIN_PAGE_NAME, dirName + "Page")
                .replaceAll(Constants.ADD_MAIN_HEIGHT_LEVEL, heightLevelAdjust);
        
        // Create the Edit page
        fileName = Constants.CONTENT_DIR + dirName + "Page/" + pagePrefix + pageName + "Edit.js";
        _pages.put(fileName, editPageContent);
        
        String deletePageContent = Constants.GRID_DELETE_PAGE.replaceAll(Constants.PAGENAME_MACRO, Constants.toUpperCasename(pagePrefix + pageName))
                .replaceAll(Constants.ADD_ROW_KEY, pagePrefix + pageName)
                .replaceAll(Constants.SUBMIT_STATE_ARGS, submitStateArgs.toString())
                .replaceAll(Constants.ADD_SET_STATE, deleteState.toString())
                .replaceAll(Constants.ADD_LOAD_ARGS, _functionArgs.toString())
                .replaceAll(Constants.DELETE_LABEL, Constants.toCamelCase(pageName, true))
                .replaceAll(Constants.DELETE_NAME, Constants.toCamelCase(pageName, true));

        // Create the Delete page
        fileName = Constants.CONTENT_DIR + dirName + "Page/" + pagePrefix + pageName + "DeleteModal.js";
        _pages.put(fileName, deletePageContent);
    }
    
    /**
     * Method creates a react tab from the given values.
     * 
     * @param name
     * @param content
     * @param path
     * @param top
     * @param level
     * @param extraContent
     * @param isEditPage
     * @param isObjectPage
     * @return
     */
    private String createTab(String name, String id, List<String> content, String path, boolean top, int level, List<String> extraContent, boolean isEditPage, boolean isObjectPage)
    {
        StringBuffer retVal = new StringBuffer();
        
        String description = "";
        if("General".equalsIgnoreCase(name))
        {
            description = "Specifies the general settings associated with this component";
        }
        else if(_tabDescription.containsKey(name))
        {
            description = _tabDescription.get(name);
            
            // Remove the example
            if(description.lastIndexOf("Example:") > 0)
            {
                description = description.substring(0, description.lastIndexOf("Example:"));
            }
            
            description = escapeDescString(description);
        }

        retVal.append("              <TabPanel style={{width:'100%', overflow:'auto'}} tabId={\"" + id + "_tab\" + idPrefix}>\n");
        
        // If this is a grid within a grid then need smaller div
        if(!top)
        {
            // Add the content in a smaller height div so that the buttons never get hidden
            retVal.append("                <div className=\"iag_sublevel_tabs\" style={{height:'60vh', overflow:'auto'}}>\n");
        }
        
        String pathPrefix = (path != null && !path.trim().isEmpty())?path + " : ":"";
        
        retVal.append("                " + Constants.DIV_CLASS_TAB_HDG);
        retVal.append("                  <span className=\"iag_breadcrumb\">" + pathPrefix + "</span><br/>");
        retVal.append("                  <h2>" + Constants.toCamelCase(name, true) + " Settings</h2><hr/>\n");
        if(description != null && !description.trim().isEmpty())
        {
            while(description.trim().endsWith("<br/>"))
            {
                description = description.trim();
                description = description.substring(0, description.length() - 5);
            }
            
            String[] descParts = description.split("\\.");
            
            String descCode = Constants.PAGE_DESC_TEMPLATE.replaceAll(Constants.ADD_NAME, name)
                    .replaceAll(Constants.ADD_LONG_DESC, description)
                    .replaceAll(Constants.ADD_SHORT_DESC, descParts[0].replaceAll("<br/>", " "));
            
            if(descParts.length == 1 || descParts[0].trim().length() == description.trim().length() - 1)
            {
                descCode = description;
            }
            
            retVal.append("                  " + descCode + "\n");
        }
        retVal.append("                </div>\n");
        retVal.append("                <div className={\"iag--simple-div " + Constants.ADD_DIV_NAME + "\" + idPrefix}>\n");
        for(String item: content)
        {
            retVal.append(item);
            retVal.append("\n");
        }
        retVal.append("                </div>\n");
        
        // Close the smaller height div
        if(!top)
        {
            retVal.append("                </div>\n");
        }
        
        for(String item: extraContent)
        {
            retVal.append(item);
            retVal.append("\n");
        }
        
        // If this is a grid within a grid then need new buttons
        if(!top)
        {
            retVal.append("                  " + Constants.DIV_CLASS);
            retVal.append("                    <Button onClick={() => { handleClose(idPrefix, " + Constants.EXTRA_BTN_PARAMS + " doClose); }}>Cancel</Button>\n"); 
            
            StringBuffer disabledStr = new StringBuffer();
            handleRequiredFields(disabledStr);
            
            if(disabledStr.length() > 0)
            {
                retVal.append("                    <Button disabled={" + disabledStr.toString() + "} onClick={() => { handleSave(loadGrid, idPrefix, " + Constants.EXTRA_BTN_PARAMS + " doClose); }}>Save</Button>\n");
            }
            else
            {
                retVal.append("                    <Button onClick={() => { handleSave(loadGrid, idPrefix, " + Constants.EXTRA_BTN_PARAMS + " doClose); }}>Save</Button>\n");
            }

            retVal.append("                  </div>\n");
        }
        
        retVal.append("              </TabPanel>\n");
        
        return retVal.toString();
    }

    /**
     * Method concatenates a list of strings into a single string.
     * 
     * @param list
     * @return
     */
    public String listToString(List<String> list)
    {
        StringBuffer retVal = new StringBuffer();
        
        for(String item: list)
        {
            retVal.append(item);
        }
        
        return retVal.toString();
    }
    
    /**
     * Method splits a path string and generates a condition string that ensures 
     * each path element exists.
     * 
     * @param path
     * @param keepLastAnd
     * @return
     */
    public String generateFullPathCondition(String path, boolean keepLastAnd)
    {
        return generateFullPathCondition(path, keepLastAnd, "");
    }
    
    /**
     * Method splits a path string and generates a condition string that ensures 
     * each path element exists. The condition prefix is added before the condition.
     * 
     * @param path The path to parse
     * @param keepLastAnd Whether or not to leave the trailling && on the result
     * @param condPrefix The condition prefix
     * @return
     */
    public String generateFullPathCondition(String path, boolean keepLastAnd, String condPrefix)
    {
        StringBuffer fullCondition = new StringBuffer();
        StringBuffer prefix = new StringBuffer();
        String[] conditionParts = path.split("\\.");
        for(String part: conditionParts)
        {
            fullCondition.append(condPrefix + prefix + part + " !== undefined && ");
            if(prefix.length() == 0)
            {
                prefix.append(part);
            }
            else
            {
                prefix.append(part);
            }
            
            prefix.append("\\.");
        }
        
        String retVal = fullCondition.toString();
        
        if(!keepLastAnd && retVal.endsWith("&& "))
        {
            retVal = retVal.substring(0, retVal.length() - 3);
        }
        
        return retVal;
    }
    
    /**
     * Method recurses through this component and all of its children to generate the react state variable code for each.
     * 
     * @param setFieldCode Response object for the generated set state field code.
     * @param addFieldPopCode Response object for the generated add state field populate code.
     * @param editFieldPopCode Response object for the generated edit state field code.
     * @param stateArgs Response object for the generated state field arguments that are added to an add page declaration.
     * @param editStateArgs Response object for the generated state field arguments that are added to an edit page declaration.
     * @param dataLoadCodeGenerated Response object for the generated state field data load function.
     * @param clearFieldCode Response object for the generated state field clear code.
     * @param isObjectPage A flag indicating whether or not the component is part of an object menu page.
     */
    private void setStateStringsRecursive(StringBuffer setFieldCode, StringBuffer addFieldPopCode, StringBuffer editFieldPopCode, StringBuffer stateArgs, 
            StringBuffer editStateArgs, StringBuffer dataLoadCodeGenerated, StringBuffer clearFieldCode, boolean isObjectPage)
    {
        // First handle any array items
        Component items = getItems();
        if(items != null)
        {
            // Exists so recursively call this method on the items component
            items.setStateStringsRecursive(setFieldCode, addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, isObjectPage);
        }
        else
        {
            // Handle and child properties
            Map<String, Component> props = getProperties();
            if(props != null)
            {
                // Loop through each 
                for(String name: props.keySet())
                {
                    Component comp = props.get(name);
                    if(comp != null)
                    {
                        // If its an array then call setStateStrings for the simple array.
                        if("array".equals(comp.getType()))
                        {
                            setStateStrings(comp.getItems()._simpleFields, comp.getItems()._idFields, /*comp._items._shortIdField, */ setFieldCode, 
                                    addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, isObjectPage, true);
                        }
                        else
                        {
                            // Recursively call this method on each property
                            comp.setStateStringsRecursive(setFieldCode, addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, isObjectPage);
                        }
                    }
                }
            }
            else
            {
                // Simple field that is not in an array
                setStateStrings(getSimpleComponent(), null, /*null, */ setFieldCode, addFieldPopCode, editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, isObjectPage, false);
            }
        }
    }
    
    /**
     * Method generate the react state variable code for this component.
     * 
     * @param fields A list of child simple components of this object
     * @param longIdField The long idField name.
     * @param idField The short idField name.
     * @param setFieldCode Response object for the generated set state field code.
     * @param addFieldPopCode Response object for the generated add state field populate code.
     * @param editFieldPopCode Response object for the generated edit state field code.
     * @param stateArgs Response object for the generated state field arguments that are added to an add page declaration.
     * @param editStateArgs Response object for the generated state field arguments that are added to an edit page declaration.
     * @param dataLoadCode Response object for the generated state field data load function.
     * @param clearFieldCode Response object for the generated state field clear code.
     * @param isObjectPage A flag indicating whether or not the component is part of an object menu page.
     */
    public void setStateStrings(List<SimpleComponent> fields, Map<String, String> idFields, StringBuffer setFieldCode, StringBuffer addFieldPopCode, StringBuffer editFieldPopCode, StringBuffer stateArgs,
            StringBuffer editStateArgs, StringBuffer dataLoadCode, StringBuffer clearFieldCode, boolean isObjectPage, boolean addDataLoadCode)
    {
        Map<String, StringBuffer> dataLoadCodeMap = new HashMap<String, StringBuffer>();
        
        // Loop through each simple components
        for(SimpleComponent comp: fields)
        {
            String field = comp.getName();
            String jsonPath = comp.getJsonPath();
            String type = comp.getType();
            String nakedDefaultValue = (comp.getDefault() != null && !comp.getDefault().isEmpty())?comp.getDefault():"";
            String shortName = comp.getShortName();
            String rowDataName = comp.getRowDataName();
            String rowDataArrayName = comp.getRowDataArrayName();
            
            // If the field name equals the long id field then this is the idField
            boolean isIdField = false;
            if(idFields != null)
            {
                isIdField = idFields.containsKey(field);
            }
            
            // For object pages we don't handle second level arrays here
            if(isObjectPage)
            {
                if(jsonPath.split("\\[i").length > 2)
                {
                    // Ignore this case. Sub arrays are handled in the sub component
                    continue;
                }
            }

            // Set some variable values
            String addValue = Constants.EVT_TARGET_VALUE;
            String defaultValue = "'" + nakedDefaultValue + "'";
            String trueValue = jsonPath;
            
            // Change any values based upon the type
            if("boolean".equalsIgnoreCase(type))
            {
                addValue = Constants.EVT;
                defaultValue = nakedDefaultValue;
                trueValue = "(" + jsonPath + " == true || " + jsonPath  + " == \"true\")";
            }
            else if("number".equalsIgnoreCase(type))
            {
                defaultValue = nakedDefaultValue;
                if(defaultValue.isEmpty() || "unlimited".equals(defaultValue))
                {
                    defaultValue = "0";
                }
            }
            
            // Generate the field populate code
            if(isIdField)
            {
                // Grid id fields need to check that the id does not already exist on change
                // If it does then the Save button is disabled and an error shown.
                // ie: id must be unique.
                
                String fieldName = (idFields.size() > 1)?"unique values":shortName;
                
                StringBuffer createTempId = new StringBuffer();
                StringBuffer fieldsAdd = new StringBuffer();
                StringBuffer extraValidate = new StringBuffer();
                for(String key: idFields.keySet())
                {
                    String currId = idFields.get(key);
                    if(fieldsAdd.length() > 0)
                    {
                        fieldsAdd.append(" + ");
                    }
                    
                    if(shortName.equals(currId))
                    {
                        fieldsAdd.append("evt.target.value");
                    }
                    else
                    {
                        createTempId.append("      var " + currId + "Wdgt = document.getElementById(\"" + key + "_id\" + idPrefix);\n");
                        createTempId.append("      var " + currId + "Val = (" + currId + "Wdgt)?" + currId + "Wdgt.value:\"\";\n");
                        
                        fieldsAdd.append(currId + "Val");
                        
                        extraValidate.append("      validateField(" + Constants.ADD_ROW_DATA_PREFIX + "rowData." + Constants.ADD_ROW_DATA_SUFFIX + ", set" + key + "_valid, set" + key + "_invalid_text, \"" + Constants.ADD_CAMEL_NAME + "\", \"" + fieldName + "\", tempId);\n");
                    }
                }

                createTempId.append("      var tempId = " + fieldsAdd.toString() + ";\n");
                createTempId.append(extraValidate.toString());

                addFieldPopCode.append(Constants.POP_ID_FIELD_TEMPLATE.replaceAll(Constants.ADD_NAME, field)
                        .replaceAll(Constants.CREATE_TEMP_ID, createTempId.toString())
                        .replaceAll(Constants.ADD_VALUE, addValue)
                        .replaceAll(Constants.DEFAULT_VALUE, defaultValue)
                        .replaceAll(Constants.ADD_ROW_DATA_PREFIX, rowDataName)
                        .replaceAll(Constants.ADD_ROW_DATA_SUFFIX, rowDataArrayName)
                        .replaceAll(Constants.ADD_CAMEL_NAME, Constants.toCamelCase(rowDataArrayName, true))
                        .replaceAll(Constants.ADD_FIELD, fieldName));
                
                editFieldPopCode.append(Constants.EDIT_POP_ID_FIELD_TEMPLATE.replaceAll(Constants.ADD_NAME, field)
                        .replaceAll(Constants.ADD_VALUE, addValue)
                        .replaceAll(Constants.DEFAULT_VALUE, defaultValue));
            }
            else
            {
                String popTemp = Constants.POP_FIELD_TEMPLATE;
                
                // Carbon number input does not work with update onChange
                if("number".equalsIgnoreCase(type))
                {
                    popTemp = Constants.POP_NUMBER_FIELD_TEMPLATE;
                }

                addFieldPopCode.append(popTemp.replaceAll(Constants.ADD_NAME, field).replaceAll(Constants.ADD_VALUE, addValue)
                    .replaceAll(Constants.DEFAULT_VALUE, defaultValue));
                
                editFieldPopCode.append(popTemp.replaceAll(Constants.ADD_NAME, field).replaceAll(Constants.ADD_VALUE, addValue)
                        .replaceAll(Constants.DEFAULT_VALUE, defaultValue));
            }
            addFieldPopCode.append("\n\n");
            editFieldPopCode.append("\n\n");
            
            // Generate the condition code
            String condition = generateFullPathCondition(jsonPath, false);
            
            // Generate the set field code
            setFieldCode.append(Constants.SET_STATE_FIELD_TEMPLATE.replaceAll(Constants.ADD_NAME, field)
                    .replaceAll(Constants.ADD_CONDITIONS, condition)
                    .replaceAll(Constants.ADD_JSON_PATH, jsonPath)
                    .replaceAll(Constants.ADD_FALSE_VALUE, defaultValue)
                    .replaceAll(Constants.ADD_TRUE_VALUE, trueValue));
            setFieldCode.append("\n");
            
            // Simple code to clear the state for this field
            clearFieldCode.append("    set" + field + "(" + defaultValue + ");\n");
            
            // Add this to the arguments list for the Add and Edit objects
            stateArgs.append("            update" + field + "={update" + field + "} " + field + "={" + field + "}\n");
            editStateArgs.append("            update" + field + "={update" + field + "} " + field + "={" + field + "}\n");
            
            // Add the UUID checking code if this field is the id for the grid
            // Edit does not have state validation
            if(isIdField)
            {
                clearFieldCode.append("    set" + field + "_valid(true);\n");
                stateArgs.append("            " + field + "_valid={" + field + "_valid}\n");
                stateArgs.append("            " + field + "_invalid_text={" + field + "_invalid_text}\n");
            }
            
            // Create data load code
            // Need to parse the jsonPath to create the correct code
            // eg: json.resource_servers[i].servers[i].url_style.windows needs to become
            // resource_serversservers[i].url_style.windows
            // ie drop the first [i] and json.
            
            // First make sure there are multiple [i] instances
            // If the array level is 2 there should be more than 2 parts
            int level = (isObjectPage)?1:2;
            if(jsonPath.split("\\[i").length > level)
            {
                // Strip off the leading json.
                String tempPath = (jsonPath.startsWith("json."))?jsonPath.substring(5):jsonPath;
                
                String newPath = generateNewPath(tempPath);
                String newKey = generateNewKey(tempPath);
                
                StringBuffer loadLine = new StringBuffer();
                loadLine.append("        set" + field + "((");
                loadLine.append(generateFullPathCondition(newPath, false, newKey + "rowData."));
                if("boolean".equalsIgnoreCase(type))
                {
                    loadLine.append(")?(" + newKey + "rowData." + newPath + " == true || " + newKey + "rowData." + newPath + " == \"true\"):false);\n");
                }
                else
                {
                    loadLine.append(")?" + newKey + "rowData." + newPath + ":\"\");\n");
                }
                
                if(dataLoadCodeMap.containsKey(newKey))
                {
                    dataLoadCodeMap.get(newKey).append(loadLine);
                }
                else
                {
                    dataLoadCodeMap.put(newKey, loadLine);
                }
            }
        }
        
        // If the idField is not null generate the dataLoad code
        if(addDataLoadCode)
        {
            // Generate the data load populate code
            for(String key: dataLoadCodeMap.keySet())
            {
                StringBuffer code = dataLoadCodeMap.get(key);
                
                dataLoadCode.append("      for(var i = 0; i < " + key + "rowData." + key + ".length; i++) {\n");
                dataLoadCode.append("        if(" + key + "rowData." + key + "[i].id === window." + key + "rowId) {\n");
                dataLoadCode.append(code);
                dataLoadCode.append("        }\n");
                dataLoadCode.append("      }\n\n");
            }
        }
    }
    
    /**
     * Method parses an input path and generates a new array key.
     * It will remove all array keys and replace '.' with '_'.
     * Eg: resource_servers[i].forms_login[i2].login_resources[i3].fields[i4].source
     * becomes:
     * resource_servers_forms_login_login_resources_fields_source
     * 
     * @param input
     * @return
     */
    private String generateNewKey(String input)
    {
        String retVal = "";
        int index = input.lastIndexOf("[");
        
        if(index > -1)
        {
            input = input.substring(0, index);
        }
        
        String[] parts = input.split("\\[i.?]");
        
        for(String part: parts)
        {
            retVal += part;
        }
        
        return retVal.replaceAll("\\.", "_");
    }
    
    /**
     * Method parses an input path and generates a single array path name.
     * 
     * Eg: resource_servers[i].forms_login[i2].login_resources[i3].fields[i4].source
     * becomes
     * resource_servers_forms_login_login_resources_fields[i].source
     * 
     * @param input
     * @return
     */
    private String generateNewPath(String input)
    {
        // Path is just newKey + [i] + idField
        String newKey = generateNewKey(input);
        
        String retVal = newKey + "[i]";
        
        int index = input.lastIndexOf("]");
        
        if(index > -1)
        {
            if(index != (input.length() - 1))
            {
                String idField = input.substring(index + 1);
                
                retVal += idField;
            }
            else
            {
                String idField = input.substring(input.lastIndexOf("."), input.lastIndexOf("["));
                
                retVal += idField;
            }
        }
        
        return retVal;
    }
    
    /**
     * This method recurses through this object and all children to generate a schema that can be used in validation.
     * 
     * @param name
     * @param indent
     * @return
     */
    public String getValidationSchema(String name, String indent)
    {
        StringBuffer retVal = new StringBuffer();
        String defaultVal = null;
        
        String nameEntry = (name != null && !name.trim().isEmpty())?name + ": ":"";
        
        switch(_type)
        {
            case "array":
                
                // Handle special oneOf case first
                if(_isOneOfSpecialCase)
                {
                    retVal.append(indent + nameEntry + "\"stringarray\"" + ",\n");
                }
                else
                {
                    // Handle an array of items
                    retVal.append(indent + nameEntry + "[\n");
                    if(getItems() != null)
                    {
                        retVal.append(getItems().getValidationSchema("", indent + "  "));
                    }
                    retVal.append(indent + "],\n");
                }
                break;
            case "object":
                // Handle the properties 
                retVal.append(indent + nameEntry + "{\n");
                Map<String, Component> props = getProperties();
                for(String key: props.keySet())
                {
                    Component comp = props.get(key);
                    retVal.append(comp.getValidationSchema(key, indent + "  "));
                }
                retVal.append(indent + "},\n");
                break;
            case "number":
                if(defaultVal == null) defaultVal = "0";
            case "boolean":
                if(defaultVal == null) defaultVal = "true";
            case "string":
                if(defaultVal == null) defaultVal = "\"string\"";
                
                if(_isOneOfSpecialCase)
                {
                    defaultVal = "stringarray";
                }

                // Handle directly
                retVal.append(indent + nameEntry + defaultVal + ",\n");
                break;
        }
        
        return retVal.toString();
    }
    
    /**
     * This method recurses through the current component and all child components to generate the get<component) code.
     * This code populates the page with existing YAML data.
     * 
     * @param code
     * @param resetGrids
     * @param jsonPath
     * @param compLevel
     * @param arrayLevel
     * @param deepObjectName
     * @param indent
     * @param addNewIfCondition
     */
    private void setGetStringsRecursive(StringBuffer code, StringBuffer resetGrids, String jsonPath, int compLevel, int arrayLevel, String deepObjectName, String indent, boolean addNewIfCondition)
    {
        String jsonPathNoArray = jsonPath;
        String codeArrayIndex = "";
        boolean inArray = false;
        String pathName = "";
        String gridStore = "";
        boolean arrayHandled = false;
        String rowDataName = "";
        
        if(addNewIfCondition)
        {
            
            if(jsonPathNoArray.matches(".*i.*]$"))
            {
                jsonPathNoArray = jsonPath.substring(0, jsonPath.lastIndexOf("["));
                codeArrayIndex = jsonPath.substring(jsonPath.lastIndexOf("[") + 1, jsonPath.lastIndexOf("]"));
                inArray = true;
            }
              
            String[] pathParts = jsonPath.split("\\.");
            pathName = pathParts[pathParts.length - 1];
            if(pathName.matches(".*i.*]$"))
            {
                pathName = pathName.substring(0, pathName.lastIndexOf("["));
            }
                
            code.append(indent + "if(" + generateFullPathCondition(jsonPathNoArray, false) + ") {\n");
            
            // If we are in an array then need to set the variables and loop
            if(inArray)
            {
                indent += "  ";
                code.append(indent + "var new" + pathName + "s = [];\n");
                code.append(indent + "for(var " + codeArrayIndex + " = 0; " + codeArrayIndex + " < " + jsonPathNoArray + ".length; " + codeArrayIndex + "++) {\n");
            }
            
            // Strip off the json.
            rowDataName = jsonPath.substring(5);
            if(rowDataName.matches(".*i.*]$"))
            {
                rowDataName = rowDataName.substring(0, rowDataName.lastIndexOf("["));
            }
            rowDataName = rowDataName.replaceAll("\\.", "_");
            
            gridStore = rowDataName + "rowData." + rowDataName;
        }
        
        String arrayIndex = "i";
        if(arrayLevel > 1)
        {
            arrayIndex += arrayLevel;
        }

        String objectName = "newItem";
        if(!deepObjectName.isEmpty())
        {
            objectName = "new" + deepObjectName;
        }
        
        Component items = getItems();
        if(items != null)
        {
            switch(items.getType())
            {
                case "array":
                    items.setGetStringsRecursive(code, resetGrids, jsonPath, compLevel + 1, arrayLevel, deepObjectName, indent, false);
                    break;
                case "object":
                    code.append(indent + "  var " + objectName + " = {};\n");
                    items.setGetStringsRecursive(code, resetGrids, jsonPath, compLevel + 1, arrayLevel, deepObjectName, indent, false);
                    break;
                default:
                    // Simple array handle here
                    code.append(indent + "    var new" + pathName + " = {};\n");
                    code.append(indent + "    new" + pathName + "[\"id\"] = " + jsonPath + ";\n");
                    code.append(indent + "    new" + pathName + "[\"" + pathName + "\"] = " + jsonPath + ";\n");
                    code.append(indent + "    new" + pathName + "s.push(new" + pathName + ");\n");

                    // If this is a simple array at the top level then add the new item to the rowData directly
                    if(arrayLevel == 2)
                    {
                        code.append(indent + "    " + gridStore + ".push(new" + pathName + ");\n");
                        arrayHandled = true;
                    }
            }

            
        }
        else
        {
            Map<String, Component> props = getProperties();
            if(props != null)
            {
                boolean doneFirst = false;
                for(String name: props.keySet())
                {
                    Component comp = props.get(name);
                    if(comp != null)
                    {
                        switch(comp.getType())
                        {
                            case "array":
                                 
                                comp.setGetStringsRecursive(code, resetGrids, jsonPath + "." + name + "[" + arrayIndex + "]", compLevel + 1, arrayLevel + 1, deepObjectName, indent + "  ", true);
                                break;
                            case "object":

                                code.append(indent + "  var new" + name + " = {};\n");
                                comp.setGetStringsRecursive(code, resetGrids, jsonPath + "." + name, compLevel + 1, arrayLevel, name, indent + "  ", true);
                                if(compLevel > 1 && !objectName.trim().isEmpty() && !"s".equals(name))
                                {
                                    code.append(indent + "  " + objectName + "[\"" + name + "\"] = new" + name + ";\n");
                                }
                                break;
                            default:
                                
                                if(compLevel > 1 && arrayLevel > 1)
                                {
                                    if(!doneFirst)
                                    {
                                        if(_idFields.size() > 0)
                                        {
                                            StringBuffer createTempIdJson = new StringBuffer();
                                            handleIdFields("", "", new StringBuffer(), new StringBuffer(), 
                                                    new StringBuffer(), new StringBuffer(), new StringBuffer(), 
                                                    createTempIdJson, new StringBuffer(), jsonPath);
                                            
                                            code.append(indent + "  var tempId = " + createTempIdJson.toString() + ";\n");
                                            code.append(indent + "  " + objectName + "[\"id\"] = tempId;\n");
                                            doneFirst = true;
                                        }
                                    }
                                    code.append(indent + "  " + objectName + "[\"" + name + "\"] = " + jsonPath + "." + name + ";\n");
                                }
                                else
                                {
                                    String fullPath = jsonPath + "." + name;
                                    
                                    code.append(indent + "  if(" + generateFullPathCondition(fullPath, false) + ") {\n");
                                    code.append(indent + "    set" + rowDataName + "_" + name + "(" + fullPath + ");\n");
                                    code.append(indent + "  }\n");
                                }
                        }
                    }
                }
            }
            else
            {
                // Simple field that is not in an array
            }
        }
        
        if(inArray)
        {
            // For newItem array need to add each element to the array
            if(arrayLevel == 2 && "newItem".equals(objectName) && !arrayHandled)
            {
                code.append("  " + indent + gridStore + ".push(" + objectName + ");\n");
                arrayHandled = true;
            }
            code.append(indent + "}\n");
        
            
            // Top level array need to update rowData
            if(arrayLevel == 2)
            {
                if(!arrayHandled)
                {
                    code.append(indent + gridStore + ".push(" + objectName + ");\n");
                }
                resetGrids.append(indent + gridStore + " = [];\n");
            }
            else if(!objectName.trim().isEmpty() && !pathName.trim().isEmpty())
            {
                code.append(indent + objectName + "[\"" + pathName + "\"] = new" + pathName + "s;\n");
            }
        }
        
        if(addNewIfCondition)
        {
            code.append(indent + "}\n");
        }
    }
    
    /**
     * Method adds the react route, import and links for this page to a global list.
     * 
     * @param pageName
     * @param name
     */
    private void addGlobalEntries(String pageName, String name)
    {
        // Add the route for this new page
        String route = Constants.ROUTE_TEMPLATE.replaceAll(Constants.ROUTE_MACRO, name).replaceAll(Constants.COMP_MACRO, pageName);
        _routes.add(route);
        
        // Add the import for this new page
        String importStr = Constants.IMPORT_TEMPLATE.replaceAll(Constants.IMP_MACRO, pageName).replaceAll(Constants.FROM_MACRO, pageName);
        _imports.add(importStr);
        
        // Update the header menu with a link to this new page
        String link = Constants.LINK_TEMPLATE.replaceAll(Constants.LINK_MACRO, name)
                .replaceAll(Constants.LINKNAME_MACRO, getTitle(name, this._altName))
                .replaceAll(Constants.LINKID_MACRO, name);
        
        _links.add(link);
        _linkNames.add(name);
    }
    
    /**
     * Method combines a prefix and suffix to make a new name.
     * If both are not empty then the combining char will be a '_'.
     * 
     * @param prefix
     * @param suffix
     * @return
     */
    String generateFullName(String prefix, String suffix)
    {
        // If both prefix and suffix are not empty then add _ delimiter
        String fullName;
        if(!prefix.trim().isEmpty() && !suffix.trim().isEmpty())
        {
            fullName = prefix + "_" + suffix;
        }
        else
        {
            fullName = prefix + suffix;
        }
        
        return fullName;
    }
    
    /**
     * Method generates a new TabList for the stored tabs in the tabContent map.
     * 
     * @param tabContent
     * @param path
     * @param top
     * @param level
     * @param isEditPage
     * @param isObjectPage
     * @return
     */
    private String generateTabContent(StringBuffer tabContent, String path, boolean top, int level, boolean isEditPage, boolean isObjectPage)
    {
        List<String> tabList = new ArrayList<String>();
        List<String> tabPanels = new ArrayList<String>();
        
        // Add tabs from extraTabContent
        for(String key: _extratabContent.keySet())
        {
            if(!_tabContent.containsKey(key))
            {
                String id = (_tabMap.containsKey(key))?_tabMap.get(key):key;
                List<String> currentContent = _extratabContent.get(key);
                
                // Only add it if there is valid content
                if(currentContent.size() > 0)
                {
                    tabList.add(key);
                    tabPanels.add(createTab(key, id, new ArrayList<String>(), path, top, level, currentContent, isEditPage, isObjectPage));
                }
            }
        }
        
        // Add tabs from tabContent including any extra content
        for(String key: _tabContent.keySet())
        {
            if(key != null && !key.trim().isEmpty())
            {
                String id = (_tabMap.containsKey(key))?_tabMap.get(key):key;
                
                List<String> currentContent = _tabContent.get(key);
                List<String> extraContent = new ArrayList<String>();
                
                if(_extratabContent.containsKey(key))
                {
                    extraContent = _extratabContent.get(key);
                }
                
                // Only add it if there is valid content
                if(currentContent.size() > 0)
                {
                    tabList.add(key);
                    tabPanels.add(createTab(key, id, currentContent, path, top, level, extraContent, isEditPage, isObjectPage));
                }
            }
        }
        
        // Start the react tablist
        tabContent.append("              <TabList>\n");
        
        String defaultTab = "";
        
        // Sort the tab order (ensuring defaultTab is first
        Collections.sort(tabList, new SortTabList());
        for(String tab: tabList)
        {
            // Set the first tab as default if not already set
            if(defaultTab.isEmpty())
            {
                defaultTab = _tabMap.get(tab);
            }
            
            // Add the react tab
            tabContent.append("                <Tab tabFor={\"" + _tabMap.get(tab) + "_tab\" + idPrefix}>" + tab + "</Tab>\n");

            // Is there a general tab. If so then its default
            if("general".equalsIgnoreCase(tab))
            {
                defaultTab = tab;
            }
        }
        
        // Set defaultTab as general if not already set
        if(defaultTab.isEmpty())
        {
            defaultTab = "General";
        }
        
        // Close react tablist
        tabContent.append("              </TabList>\n");
        
        // Add all tabpanels to the tabContent
        for(String panel: tabPanels)
        {
            tabContent.append(panel);
        }

        return defaultTab;
    }
    
    /**
     * Function replaces the input widget text with the tooltip fields if the description is not empty.
     * 
     * @param input
     * @param description
     * @param name
     * @return
     */
    String replaceTooltipText(String input, String description, String name)
    {
        String tooltipText = "";
        String ttFields = "";
        if(description != null && !description.trim().isEmpty())
        {
            String realDesc = escapeDescString(description);
            // Descriptions longer than 500 chars break the tooltip usage
            // To fix this set the width to 50% of available screen
            String ttWidth = "300";
            String ttDelay = "";
            if(realDesc.length() > 500)
            {
                ttWidth = Constants.TT_LARGE_WIDTH;
                ttDelay = Constants.TT_LARGE_DELAY;
            }
            tooltipText = Constants.TOOLTIP.replaceAll(Constants.ADD_NAME, name)
                    .replaceAll(Constants.ADD_TT_TEXT, realDesc)
                    .replaceAll(Constants.ADD_TT_WIDTH, ttWidth)
                    .replaceAll(Constants.ADD_TT_DELAY, ttDelay);
            ttFields = Constants.TOOLTIP_FIELDS.replaceAll(Constants.ADD_NAME, name);
        }
        
        return input.replaceAll(Constants.ADD_TT_FIELDS, ttFields).replaceAll(Constants.ADD_TOOLTIP, tooltipText);
    }
    
    /**
     * Method escapes some react/html characters from a given descriptions string such that it can be displayed
     * correctly in a html element
     * 
     * @param input
     * @return
     */
    String escapeDescString(String input)
    {
        StringBuffer newInput = new StringBuffer();

        // Encode special HTML elements
        input = input.replaceAll("<", "&lt;")
                .replaceAll(">", "&gt;")
                .replaceAll("\\{", "&#123;")
                .replaceAll("\\&lt;br/\\&gt;", "<br/>");
        
        
        // Handle wiki markup
        String[] lines = input.split("\n");
        
        boolean inExample = false;
        boolean inTable = false;
        
        // Loop through all lines
        for(int index = 0; index < lines.length; index++)
        {
            String line = lines[index];
            boolean lineHandled = false;
            
            // First check if its a table entry
            String[] tableParts = line.split("\\|");
            if(!inTable && tableParts.length > 1 && lines.length > index + 1)
            {
                // Check that the next line is like --- | ---- | ----
                // If it is then its a table markup
                String nextLine = lines[index + 1];
                String[] tableParts2 = nextLine.split("\\|");
                boolean onlyDash = true;
                
                // Ignore the --- | --- | --- line
                for(String tPart2: tableParts2)
                {
                    tPart2 = tPart2.trim();
                    
                    for(int i = 0; i < tPart2.length(); i++)
                    {
                        char c = tPart2.charAt(i);
                        
                        if(c != '-')
                        {
                            onlyDash = false;
                            break;
                        }
                    }
                    
                    if(!onlyDash)
                    {
                        break;
                    }
                }
                
                // If its a table markup then create a HTML table
                if(onlyDash)
                {
                    inTable = true;
                    lineHandled = true;
                    
                    newInput.append("<table style={{textAlign:'left', border:'1px solid black'}}><tbody><tr style={{textAlign:'left', border:'1px solid black'}}>");
                    for(int index2 = 0; index2 < tableParts.length; index2++)
                    {
                        String tPart = tableParts[index2];
                        
                        if(index2 != 0 || !tPart.trim().isEmpty())
                        {
                            newInput.append("<th style={{borderRight:'1px solid black', padding: '10px'}}>" + tPart + "</th>");
                        }
                    }
                    newInput.append("</tr>");
                }
            }
            else if(inTable  && tableParts.length > 1)
            {
                // HTML table has already been created
                lineHandled = true;
                
                boolean onlyDash = true;
                
                // Ignore the --- | --- | --- line
                for(String tPart: tableParts)
                {
                    tPart = tPart.trim();
                    
                    for(int i = 0; i < tPart.length(); i++)
                    {
                        char c = tPart.charAt(i);
                        
                        if(c != '-')
                        {
                            onlyDash = false;
                            break;
                        }
                    }
                    
                    if(!onlyDash)
                    {
                        break;
                    }
                }
                
                // Add a new HTML table row
                if(!onlyDash)
                {
                    newInput.append("<tr>");
                    for(int index2 = 0; index2 < tableParts.length; index2++)
                    {
                        String tPart = tableParts[index2];
                        
                        if(index2 != 0 || !tPart.trim().isEmpty())
                        {
                            newInput.append("<td style={{borderRight:'1px solid black', paddingLeft: '10px'}}>" + tPart + "</td>");
                        }
                    }
                    newInput.append("</tr>");
                }
            }
            
            // If line is not handled already then no longer in a table (or never was)
            if(!lineHandled)
            {
                // If we were in a table then close the HTML table
                if(inTable)
                {
                    inTable = false;
                    newInput.append("</tbody></table>");
                }
                
                // Handle heading markups
                if(line.trim().startsWith("###"))
                {
                    line = line.replace("###", "<h4>");
                    line = line + "</h4>";
                }
                else if(line.trim().startsWith("##"))
                {
                    line = line.replace("##", "<h3>");
                    line = line + "</h3>";
                }
                else if(line.trim().startsWith("#"))
                {
                    line = line.replace("#", "<h2>");
                    line = line + "</h2>";
                }
                    
                // Remove any doc links
                if(line.indexOf("](") > -1)
                {
                    StringBuffer newLine = new StringBuffer();
                    
                    // This is a link eg: [OIDC](./oidc)
                    // Need to strip the brackets and the link.
                    String[] parts = line.split("\\]\\(");
                    
                    for(int i = 0; i < parts.length; i++)
                    {
                        String part = parts[i];
                        if(i == 0 || (i % 2 == 0))
                        {
                            newLine.append(part.substring(0, part.lastIndexOf("[")));
                            newLine.append(part.substring(part.lastIndexOf("[") + 1));
                        }
                        else
                        {
                            newLine.append(part.substring(part.indexOf(")") + 1));
                        }
                    }
                    
                    line = newLine.toString();
                }
                
                // Enclose examples in a div
                if(line.indexOf("```yaml") > -1)
                {
                    inExample = true;
                    newInput.append("<span>YAML Example</span><br/>");
                    line = line.replaceAll("```yaml", "<div style={{outline:'2px solid', backgroundColor:'#dcd7d7', padding:'10px', whiteSpace:'pre-wrap'}}>");
                }
                else if(inExample && line.indexOf("```") > -1)
                {
                    inExample = false;
                    // Close example
                    line = line.replaceAll("```", "</div>");
                }
                
                newInput.append(line + "<br/>");
            }
        }

        // Close any tables if not already done.
        if(inTable)
        {
            inTable = false;
            newInput.append("</tbody></table>");
        }
        
        return newInput.toString();
        
    }
    
    /**
     * Method returns the widget label text for a given name.
     * 
     * @param name
     * @return
     */
    String getLabel(String name, boolean toCamel)
    {
        // Set the label
        String label = (toCamel)?Constants.toCamelCase(name, true):name;
        if(_required)
        {
            label = label + " *";
        }
        else if(_requiredOneOf)
        {
            label = label + " **";
        }
        else if(_uuid)
        {
            label = label + " *";
        }
        
        return label;
    }
    
    /**
     * Method loops through the ID fields maps and creates various code.
     */
    public void handleIdFields(String name, String rowDataPrefix, StringBuffer deleteCondition, StringBuffer idFieldsCondition, 
            StringBuffer createTempId, StringBuffer createNewId, StringBuffer idNotNullCond, 
            StringBuffer createTempIdJson, StringBuffer createTempDataId, String jsonPath) 
    {
        if(jsonPath == null || jsonPath.trim().isEmpty())
        {
            jsonPath = "json." + name + "[i]";
        }
        
        for(String longIdField: _idFields.keySet())
        {
            if(deleteCondition.length() > 0)
            {
                deleteCondition.append(" && ");
            }
            deleteCondition.append(rowDataPrefix + "rowData." + name + "[i]." + _idFields.get(longIdField) + " !== " + longIdField + " ");
            
            if(idFieldsCondition.length() > 0)
            {
                idFieldsCondition.append(" || ");
            }
            idFieldsCondition.append(longIdField);
            
            String item = rowDataPrefix + "rowData." + name + "[i]." + _idFields.get(longIdField);
            if(createTempId.length() > 0)
            {
                createTempId.append(" + ");
            }
            createTempId.append("((" + item + ")?" + item + ":\"\")");
            
            if(createNewId.length() > 0)
            {
                createNewId.append(" + ");
            }
            createNewId.append("((" + longIdField + ")?" + longIdField + ":\"\")");
            
            if(idNotNullCond.length() > 0)
            {
                idNotNullCond.append(" && ");
            }
            idNotNullCond.append(longIdField + " !== undefined && " + longIdField + " !== null ");
            
            if(createTempIdJson.length() > 0)
            {
                createTempIdJson.append(" + ");
            }
            item = jsonPath + "." + _idFields.get(longIdField);
            createTempIdJson.append("((" + item + ")?" + item + ":\"\")");
            
            item = rowDataPrefix + "data[i]." + _idFields.get(longIdField);
            if(createTempDataId.length() > 0)
            {
                createTempDataId.append(" + ");
            }
            createTempDataId.append("((" + item + ")?" + item + ":\"\")");
        }
    }
    
    /**
     * Method loops through the required and requiredonof fields maps and creates various code.
     */
    public void handleRequiredFields(StringBuffer disabledStr) 
    {
        for(String longField: _requiredFields.keySet())
        {
            if(disabledStr.length() > 0)
            {
                disabledStr.append(" || ");
            }
            
            disabledStr.append("(!props." + longField + " || !props." + longField + "_valid)");
        }
        
        boolean closeBracket = false;
        
        if(disabledStr.length() > 0 && _requiredOneOfFields.size() > 1)
        {
            disabledStr.append(" || ");
            disabledStr.append("(");
            closeBracket = true;
        }
        
        boolean first = true;
        
        for(String longField: _requiredOneOfFields.keySet())
        {
            if(!first && disabledStr.length() > 0)
            {
                disabledStr.append(" && ");
            }
            
            disabledStr.append("(!props." + longField + " || !props." + longField + "_valid)");
            
            first = false;
        }
        
        if(closeBracket)
        {
            disabledStr.append(")");
        }
    }
    
    /**
     * Method does a very shallow copy of a component. 
     * Only copies the fields that are populated by Jackson.
     * @param newComp
     */
    public void copy(Component otherComp)
    {
        _type = otherComp.getType();
        _description = otherComp.getDescription();
        _items = otherComp.getItems();
        _properties = otherComp.getProperties();
        _enumVals = otherComp.getEnum();
        _default = otherComp.getDefault();
        _minimum = otherComp.getMinimum();
        _maximum = otherComp.getMaximum();
        _oneOf = otherComp.getOneOf();
        _isOneOfSpecialCase = otherComp._isOneOfSpecialCase;
        _required = otherComp._required;
        _requiredOneOf = otherComp._requiredOneOf;
        _uuid = otherComp._uuid;
        _altName = otherComp._altName;
    }
    
    /**
     * Method recursively sets the path of a component and all its children. 
     * The path elements are separated by the '_' character.
     * It will also set the name of the parent for each component.
     * 
     * @param parent
     * @param path
     * @param name
     * @param parentPath
     */
    public void updatePath(String parent, String path, String name, String parentPath, String altName)
    {
        this._parent = parent;
        this._path = path;
        
        String currName = Constants.toCamelCase(name, true);
        if(altName != null && !altName.trim().isEmpty())
        {
            currName = altName;
        }
        
        this._pathWithSelf = (parentPath != null && !parentPath.trim().isEmpty())?parentPath + " / " + currName:currName;

        // Handle the special "oneOf" case
        if("string".equals(_type) && _oneOf != null)
        {
            // Loop through each oneOf component
            for(Component comp: _oneOf)
            {
                // Handle the case where its an array
                if("array".equals(comp.getType()))
                {
                    // Change the type to array and the items to the oneOf items
                    _type = "array";
                    _items = comp.getItems();
                    _isOneOfSpecialCase = true;
                }
            }
        }
        
        // Handle the component items subcomponent
        if(_items != null)
        {
            _items.updatePath(name, path, name, parentPath, altName);
        }
        
        // Loop through all the child properties and recursively update the path of each
        if(_properties != null)
        {
            for(String key: _properties.keySet())
            {
                Component currComp = _properties.get(key);
                
                String newPath = (!path.isEmpty()?path + "_" + name:name);
                
                currComp.updatePath(name, newPath, key, _pathWithSelf, currComp.getXName());
            }
        }
    }
    
    /**
     * Method returns a UI title from a given name and alt name.
     * 
     * @param name
     * @return
     */
    public String getTitle(String name, String altName)
    {
        String title = Constants.toCamelCase(name, true);
        if(altName != null && !altName.trim().isEmpty())
        {
            title = altName;
        }
        
        return title;
    }

    
    /*
     * Variable getters and setters
     */
    public void addSimpleComponent(SimpleComponent comp)
    {
        _simpleComponent.add(comp);
    }
    
    public List<SimpleComponent> getSimpleComponent()
    {
        return _simpleComponent;
    }
    
    public String getTabName()
    {
        return this._tabName;
    }
    
    public void setTabName(String name)
    {
        this._tabName = name;
    }
    
    public String getTabTitle()
    {
        return this._tabTitle;
    }
    
    public void setTabTitle(String name)
    {
        this._tabTitle = name;
    }
    
    public String getParent()
    {
        return this._parent;
    }
    
    public List<String> getRoutes()
    {
        return this._routes;
    }
    
    public List<String> getLinks()
    {
        return this._links;
    }
    
    public List<String> getLinkNames()
    {
        return this._linkNames;
    }
    
    public List<ValidationEntry> getValidations()
    {
        return this._validations;
    }
    
    public List<String> getImports()
    {
        return this._imports;
    }
    
    public List<String> getJsonToYaml()
    {
        return this._jsonToYaml;
    }
    
    public String getJsonToYamlCondition()
    {
        return this._jsonToYamlCondition;
    }
    
    public Map<String, String> getPagesMap()
    {
        return this._pages;
    }
    
    public Map<String, List<String>> getTabContent()
    {
        return this._tabContent;
    }
    
    public Map<String, String> getTabMap()
    {
        return this._tabMap;
    }
    
    public Map<String, List<String>> getExtraTabContent()
    {
        return this._extratabContent;
    }
    
    public String getDataFields()
    {
        return this._dataFields.toString();
    }
    
    public List<String> getGridFields()
    {
        return this._gridFields;
    }
    
    public String getFunctionArgs()
    {
        return this._functionArgs.toString();
    }
    
    public String getPushData()
    {
        return this._pushData.toString();
    }
    
    public String getChangeData()
    {
        return this._handleChangeCode.toString();
    }
    
    public String getPopulateJson()
    {
        return this._populateJson.toString();
    }
    
    public void setType(String type)
    {
        this._type = type;
    }
    
    public String getType()
    {
        return this._type;
    }
    
    public void setMinimum(String min)
    {
        this._minimum = min;
    }
    
    public String getMinimum()
    {
        return this._minimum;
    }
    
    public void setMaximum(String max)
    {
        this._maximum = max;
    }
    
    public String getMaximum()
    {
        return this._maximum;
    }
    
    public void setDefault(String defaultVal)
    {
        this._default = defaultVal;
    }
    
    public String getDefault()
    {
        return this._default;
    }
    
    public void setItems(Component items)
    {
        this._items = items;
    }
    
    public ArrayList<Component> getOneOf()
    {
        return this._oneOf;
    }
    
    public void setOneOf(ArrayList<Component> oneOf)
    {
        this._oneOf = oneOf;
    }
    
    public Component getItems()
    {
        return this._items;
    }
    
    public void setEnum(List<String> items)
    {
        this._enumVals = items;
    }
    
    public List<String> getEnum()
    {
        return this._enumVals;
    }
    
    public void setProperties(Map<String, Component> props)
    {
        this._properties = props;
    }
    
    public Map<String, Component> getProperties()
    {
        return this._properties;
    }
    
    public void setDescription(String description)
    {
        this._description = description;
    }
    
    public String getDescription()
    {
        return this._description;
    }
    
    @JsonProperty("x-required")
    public void setXRequired(boolean required)
    {
        this._required = required;
    }
    
    public boolean isRequired()
    {
        return this._required;
    }
    
    @JsonProperty("x-requiredOneOf")
    public void setXRequiredOneOf(boolean requiredOneOf)
    {
        this._requiredOneOf = requiredOneOf;
    }
    
    public boolean isRequiredOneOf()
    {
        return this._requiredOneOf;
    }
    
    @JsonProperty("x-uuid")
    public void setXUuid(boolean uuid)
    {
        this._uuid = uuid;
    }
    
    public boolean isUuid()
    {
        return this._uuid;
    }
    
    @JsonProperty("x-name")
    public void setXName(String name)
    {
        this._altName = name;
    }
    
    public String getXName()
    {
        return this._altName;
    }
    
    public void set$ref(String ref)
    {
        this._ref = ref;
    }
    
    public String get$ref()
    {
        return this._ref;
    }
    
    @Override
    public String toString() {
        return "\nType: " + _type + "\nRef: " + _ref + "\nAltName: " + _altName + "\nDescription: " + _description + "\nItems: " + _items +"\nProperties: " + _properties + "\nPath: " + _path + "\nParent: " + _parent + "\n";
    }

    /**
     * These variables are open API schema mapped variables and are populated by the jackson
     * YAML parser.
     */
    private String _type;
    private String _ref;
    private String _description = "";
    private Component _items;
    private Map<String, Component> _properties;
    private List<String> _enumVals;
    private String _default;
    private String _minimum;
    private String _maximum;
    private ArrayList<Component> _oneOf;
    private boolean _isOneOfSpecialCase = false;
    private boolean _required;
    private boolean _requiredOneOf;
    private boolean _uuid;
    private String _altName;
    
    
    /*
     * These variables are populated during the YAML parsing stage 2. ie not populated 
     * by jackson but added directly after.
     */
    String _parent = "";
    String _path = "";
    String _pathWithSelf = "";
    
    /*
     * These variables are populated for each component but are used at a higher level
     * when the GenerateUI class needs to populate the common React js files.
     */
    Map<String, String> _pages = new HashMap<String, String>();
    List<String> _routes = new ArrayList<String>();
    List<String> _imports = new ArrayList<String>();
    List<String> _links = new ArrayList<String>();
    List<String> _linkNames = new ArrayList<String>();
    List<ValidationEntry> _validations = new ArrayList<ValidationEntry>();
    List<String> _jsonToYaml = new ArrayList<String>();
    String _childJsonToYaml = "";
    String _jsonToYamlCondition = "";
    
    /*
     * These variables are used only during the UI generation of a specific component
     */
    public List<String> _jsonToYamlGridFields = new ArrayList<String>();
    
    // The name of the UI tab that this component will be shown in
    public String _tabName = "";
    public String _tabTitle = "";

    
    // Generation containers
    List<SimpleComponent> _simpleFields = new ArrayList<SimpleComponent>();
    List<String> _gridFields = new ArrayList<String>();
    // Map of id fields for this component (longname --> shortname)
    Map<String, String> _idFields = new HashMap<String, String>();
    Map<String, String> _requiredFields = new HashMap<String, String>();
    Map<String, String> _requiredOneOfFields = new HashMap<String, String>();
    
    // This is for the grid store
    StringBuffer _dataFields = new StringBuffer();
    
    // This is for the grid store update args
    StringBuffer _functionArgs = new StringBuffer();
    
    // This is the code to push the new data to the grid store
    StringBuffer _pushData = new StringBuffer();
    StringBuffer _populateJson = new StringBuffer();
    Map<String, List<String>> _tabContent = new HashMap<String, List<String>>();
    StringBuffer _gridUpdateHtml = new StringBuffer();
    Map<String, String> _tabDescription = new HashMap<String, String>();
    Map<String, List<String>> _extratabContent = new HashMap<String, List<String>>();
    Map<String, String> _tabMap = new HashMap<String, String>();
    
    // This is the code that gets added to the handleChange function
    StringBuffer _handleChangeCode = new StringBuffer();
    
    // List of any additional code or imports for a page
    List<String> _additionalCode = new ArrayList<String>();
    List<String> _additionalImports = new ArrayList<String>();
    
    // Map of any child array jsonPath to id field
    List<SimpleComponent> _childGrid = new ArrayList<SimpleComponent>();
    StringBuffer _updateGridDataCode = new StringBuffer();
    Map<String, String> _extraGridFields = new HashMap<String, String>();
    StringBuffer _extraGridAddArgs = new StringBuffer();
    List<String> _extraGridNames = new ArrayList<String>();
    
    public String _divClass = "unset_div";
    public String _parentDivClass = "unset_div";
    
    // The simple representation of this component
    public List<SimpleComponent> _simpleComponent = new ArrayList<SimpleComponent>();; 
    

}

/**
 * Private class that will sort a List of tabs alphabetically.
 */
class SortTabList implements Comparator<String> 
{ 
    public int compare(String stringOne, String stringTwo) 
    { 
        String nameOne = getTabName(stringOne);
        String nameTwo = getTabName(stringTwo);
        
        // General should always be first
        if("General".equalsIgnoreCase(nameOne))
        {
            return -1;
        }
        if("General".equalsIgnoreCase(nameTwo))
        {
            return 1;
        }
        return nameOne.compareTo(nameTwo); 
    } 
    
    private String getTabName(String input)
    {
        String[] parts = input.split(">");
        if(parts.length > 1)
        {
            return parts[0].substring(0, parts[0].indexOf("<") - 1);
        }
        
        return parts[0];
    }
  
} 
