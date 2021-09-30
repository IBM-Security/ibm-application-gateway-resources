/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * This object represents a complex open API component and the interactions
 * required to generate the multilayered react UI pages that are needed to
 * manage it.
 */
public class ComplexComponent 
{
    private Component _comp;
    private String _name;
    private String _jsonPath;
    private String _rowPath;
    private boolean _handleAsTop;
    private boolean _wrapHelper;
    private String _indent;
    private boolean _isArray;
    private String _pagePrefix;
    private String _simpleName;
    private String _handleChange;
    private boolean _isObjectMenu;
    private int _arrayLevel;
    private boolean _inSimpleArray;
    private Component _parentArray;
    private String _compPath;
    private String _rowDataName;
    private String _rowDataArrayName;
    
    List<String> currentJsonToYaml = new ArrayList<String>();
    StringBuffer currentJsonToYamlCondition = new StringBuffer();
    
    /**
     * Constructor.
     * 
     * @param comp The component this object is working on
     * @param name The top level name that this object belongs in
     * @param jsonPath The json path for this object
     * @param rowPath The grid rowData path for this object
     * @param handleAsTop A flag indicating that this object is a top level object
     *                    or should be handled as one.
     * @param wrapHelper A flag indicating that the jsonToYaml code in the helper
     *                   needs to be wrapped in a new condition.
     * @param indent
     * @param isArray A flag indicating that this object is an array
     * @param pagePrefix The prefix to use for the pageName
     * @param simpleName The simpleName for this object
     * @param handleChange The handleChange code for this object
     * @param isObjectMenu A flag indicating that the parent of this object is an object menu
     * @param arrayLevel The depth of array that this object resides at
     * @param inSimpleArray A flag indicating this this object is a simple array. ie only simple fields
     * @param parentArray The component of the previous level that is an array.
     * @param compPath The component path
     * @param rowDataName
     * @param rowDataArrayName
     * @throws Exception
     */
    ComplexComponent(Component comp, String name, String jsonPath, String rowPath, boolean handleAsTop, boolean wrapHelper, String indent, 
            boolean isArray, String pagePrefix, String simpleName, String handleChange, boolean isObjectMenu, int arrayLevel, boolean inSimpleArray, 
            Component parentArray, String compPath, String rowDataName, String rowDataArrayName)
    {
        _comp = comp;
        _name = name;
        _jsonPath = jsonPath;
        _rowPath = rowPath;
        _handleAsTop = handleAsTop;
        _wrapHelper = wrapHelper;
        _indent = indent;
        _isArray = isArray;
        _pagePrefix = pagePrefix;
        _simpleName = simpleName;
        _handleChange = handleChange;
        _isObjectMenu = isObjectMenu;
        _arrayLevel = arrayLevel;
        _inSimpleArray = inSimpleArray;
        _parentArray = parentArray;
        _compPath = compPath;
        _rowDataName = rowDataName;
        _rowDataArrayName = rowDataArrayName;
    }
    
    /**
     * Method recursively loops through the current component and its children
     * creating a page with tabs for each object.
     *
     * @throws Exception
     */
    void generateComplexPageContent() throws Exception
    {
        boolean closeDiv = false;
        String tabTitle = (_handleAsTop || _comp._tabTitle == null || _comp._tabTitle.isEmpty())?"General":_comp._tabTitle;
        String tabName = (_handleAsTop || _comp._tabName == null || _comp._tabName.isEmpty())?"General":_comp._tabName;
        
        // Save the tab description
        if(!_comp._tabDescription.containsKey(tabTitle))
        {
            _comp._tabDescription.put(tabTitle, _comp.getDescription());
        }

        // Generate tab heading if required
        closeDiv = generateTabHeading(tabTitle, tabName, _jsonPath, _comp.getXName());
        
        // Get the properties of this component
        Map<String, Component> props = _comp.getProperties();
        
        // If there are properties then handle each separately
        if(props != null)
        {
            // Loop through each one and generate its UI code
            for(String key:props.keySet())
            {
                // Each key is going to be a new tab and simple types added to the grid
                Component currComp = props.get(key);
                
                String orgJsonPath = _jsonPath;
                _jsonPath = _jsonPath + "." + key;
                String orgRowPath = _rowPath;
                _rowPath = _rowPath + "." + key;
                
                // Handle this component and its children
                handleCurrentComp(currComp, key);
                
                _jsonPath = orgJsonPath;
                _rowPath = orgRowPath;
                
                // Merge the additonal code
                mergeLists(_comp._additionalImports, currComp._additionalImports);
                mergeLists(_comp._additionalCode, currComp._additionalCode);
                
                // If there is no parent array then add any child grids to this component
                if(_parentArray == null)
                {
                    _comp._childGrid.addAll(currComp._childGrid);
                }
            }
        }
        else
        {
            // No props must be a simple object or an array
            handleCurrentComp(_comp, _simpleName);
        }
        
        // If we added a heading then close the heading div here
        if(closeDiv)
        {
            _comp._tabContent.get(tabTitle).add("                </div>\n");
        }
        
        // Have all of the jsonToYaml code so format it 
        mergeJsonToYaml();
    }
    
    /**
     * Method generates the UI code for a given component and the children of that component.
     * 
     * @param currComp The actual component to generate the UI for
     * @param compName The string name of the component
     * 
     * @throws Exception
     */
    void handleCurrentComp(Component currComp, String compName) throws Exception
    {
        // Set the divclass. This gets used for showing/hiding pages
        if(_comp._divClass.equals("unset_div"))
        {
            currComp._divClass = compName + "_div";
        }
        else
        {
            currComp._divClass = _comp._divClass;
        }
        
        // The real component name is the path + parent + component name. This gets used for the component name macro replacements
        String longCompName = _comp._path + ((_comp._path.isEmpty() || _comp._path.endsWith("_"))?"":"_") + currComp.getParent() + "_" + compName;
        
        // The jsonObject is the js object name that gets used to populate the new json upon a field change
        String jsonObject = getJsonObjectName(currComp.getParent());
        if(_handleAsTop)
        {
            // Top elements are always newElem
            jsonObject = "newElem";
        }

        // Check if it needs to be a drop down select
        // Simple array type can also have an enum so check its not an array
        if(!"array".equals(currComp.getType()) && currComp.getEnum() != null && currComp.getEnum().size() > 0)
        {
            // Generate the select drop down code
            addSimpleSelectGridField(compName, longCompName, currComp, jsonObject);
            
            // If in an array then add this field to the list of grid fields
            if(_isArray)
            {
                _comp._jsonToYamlGridFields.add(compName);
            }
        }
        else
        {
            // Its not a select so handle other types
            switch(currComp.getType())
            {
                case "string":
                    
                    // Create the text input code
                    addSimpleStringGridField(compName, longCompName, currComp, jsonObject);
                    
                    // If in array then add simple field to list of fields in the grid
                    if(_isArray)
                    {
                        _comp._jsonToYamlGridFields.add(compName);
                    }
                    
                    break;
                    
                case "number":
                    
                    // Generate the number input code
                    addSimpleNumberGridField(compName, longCompName, currComp, jsonObject);
                    
                    // If in array then add simple field to list of fields in the grid
                    if(_isArray)
                    {
                        _comp._jsonToYamlGridFields.add(compName);
                    }
                    
                    break;
                    
                case "boolean":
                    
                    // Generate the checkbox code
                    addSimpleBooleanGridField(compName, longCompName, currComp, jsonObject);
                    
                    // If in array then add simple field to list of fields in the grid
                    if(_isArray)
                    {
                        _comp._jsonToYamlGridFields.add(compName);
                    }
                    
                    break;
                    
                case "object":
                    
                    // If this is an object then update the component path and add a new tab for the new object
                    String compPath = _compPath + ((_compPath.isEmpty())?compName:"_" + compName);
                    generateChildObjectCode(compName, jsonObject, currComp, compPath);
    
                    break;
                    
                case "array":
                    
                    // The current component is an array.
                    // Need to create a new tab and a grid
                    Component currItems = currComp.getItems();
                    
                    // Set the parent div class for the grid items component
                    currItems._parentDivClass = currComp._divClass;
                    
                    // Get the array key and level
                    StringBuffer arrayKey = new StringBuffer();
                    int lvl = getArrayKey(arrayKey, _jsonPath, _isObjectMenu);
                    
                    // Increment the indent
                    String newIndent = _indent + "    ";

                    // Flag if its a simple grid
                    boolean isSimpleGrid = !"object".equals(currItems.getType());
                    
                    // Set the description of the grid items component
                    currItems._tabDescription.putAll(_comp._tabDescription);
                    
                    // Recursively generate the UI code for the array items and their children components.
                    ComplexComponent newCompObj = new ComplexComponent(currItems, _name, _jsonPath + arrayKey.toString(), _rowPath + arrayKey, true, false, newIndent, 
                            true, _pagePrefix + compName, compName, _handleChange, _isObjectMenu, _arrayLevel + 1, isSimpleGrid, 
                            currComp, "", longCompName, longCompName);
                    newCompObj.generateComplexPageContent();

                    // Create the grid add, edit and delete pages for this new grid
                    generateChildGridUpdatePages(compName, longCompName, currComp, jsonObject, isSimpleGrid, lvl);
                    
                    break;
            }
        }
    }
    
    /**
     * This method generates the code for a YAML object with a list of child properties.
     * Recursively calls back to generateTabsPageContent for all child components generation.
     * 
     * @param compName The string name of the component.
     * @param jsonObject The name of the json container to add the values to.
     * @param currComp The object to generate the code for.
     * @param compPath The dot separated component path to this object.
     * 
     * @throws Exception
     */
    private void generateChildObjectCode(String compName, String jsonObject, Component currComp, String compPath) throws Exception
    {
        // Set the tab name if not already set
        if(_handleAsTop || (_comp.getTabName() == null || _comp.getTabName().isEmpty()))
        {
            currComp.setTabTitle(currComp.getTitle(compName, currComp.getXName()));
            currComp.setTabName(compName);
        }
        else
        {
            currComp.setTabTitle(_comp.getTabTitle());
            currComp.setTabName(_comp.getTabName());
        }
        
        // Add the current description
        currComp._tabDescription.putAll(_comp._tabDescription);
        
        // Generate the tabs page content
        ComplexComponent newCompObj = new ComplexComponent(currComp, _name, _jsonPath, _rowPath, false, false, _indent + "  ", 
                _isArray, _pagePrefix + compName, "", _handleChange, _isObjectMenu, _arrayLevel, false, _parentArray, compPath, _rowDataName, _rowDataArrayName);
        newCompObj.generateComplexPageContent();
        
        // Add the child descriptions
        _comp._tabDescription.putAll(currComp._tabDescription);
        
        // Save all validations
        _comp._validations.addAll(currComp.getValidations());
        
        // Merge the child additional lists
        mergeLists(_comp._additionalCode, currComp._additionalCode);
        mergeLists(_comp._additionalImports, currComp._additionalImports);
        
        // Add the child extra grid code and function args
        _comp._updateGridDataCode.append(currComp._updateGridDataCode.toString());
        if(_comp._extraGridAddArgs.length() > 0 && currComp._extraGridAddArgs.length() > 0)
        {
            _comp._extraGridAddArgs.append(", ");
        }
        _comp._extraGridAddArgs.append(currComp._extraGridAddArgs.toString());
        _comp._extraGridNames.addAll(currComp._extraGridNames);
        
        // Add all of the child pages to this pages map
        _comp._pages.putAll(currComp.getPagesMap());
        
        // Merge the remaining child fields into this one
        _comp._simpleFields.addAll(currComp._simpleFields);
        _comp._extraGridFields.putAll(currComp._extraGridFields);
        _comp._dataFields.append(currComp.getDataFields());
        _comp._gridFields.addAll(currComp.getGridFields());
        _comp._functionArgs.append(currComp.getFunctionArgs());
        
        // Merge the pushData
        _comp._pushData.append("    " + compName + ": {\n");
        _comp._pushData.append(currComp.getPushData());
        _comp._pushData.append("    },\n");

        // Add the handle change code
        _comp._handleChangeCode.append("    var new" + compName + " = {};\n");
        _comp._handleChangeCode.append(currComp.getChangeData());
        
        // Make sure add the child array objects
        for(String longName: currComp._extraGridFields.keySet())
        {
            String field = currComp._extraGridFields.get(longName);
            _comp._handleChangeCode.append("    new" + compName + "[\"" + field + "\"] = " + longName + "rowData." + longName + ";\n");
        }
        _comp._handleChangeCode.append("    " + jsonObject + "[\"" + compName + "\"] = new" + compName + ";\n");
        
        // Update the json populate code
        StringBuffer popJson2 = new StringBuffer(currComp.getPopulateJson());
        if(popJson2.length() > 0)
        {   
            popJson2.insert(0, "      var new" + compName + " = {};\n");
            popJson2.append("      " + jsonObject + "[\"" + compName + "\"] = new" + compName + ";\n\n");
            _comp._populateJson.append(popJson2);
            
        }
        
        // Merge the grid update html code
        _comp._gridUpdateHtml.append(currComp._gridUpdateHtml);
        
        // Merge the child tab content 
        for(String tabKey: currComp.getTabContent().keySet())
        {
            List<String> elems = currComp.getTabContent().get(tabKey);
            
            if(_comp._tabContent.containsKey(tabKey))
            {
                _comp._tabContent.get(tabKey).addAll(elems);
            }
            else
            {
                _comp._tabMap.put(tabKey, currComp.getTabMap().get(tabKey));
                _comp._tabContent.put(tabKey, elems);
            }
        }
        
        // Merge the child extra tab content
        for(String tabKey: currComp.getExtraTabContent().keySet())
        {
            List<String> elems = currComp.getExtraTabContent().get(tabKey);
            
            if(_comp._extratabContent.containsKey(tabKey))
            {
                _comp._extratabContent.get(tabKey).addAll(elems);
            }
            else
            {
                _comp._extratabContent.put(tabKey, elems);
            }
        }
        
        // Finally merge the child jsonToYaml code
        String cond = currComp.getJsonToYamlCondition();
        if(cond.endsWith(" || "))
        {
            cond = cond.substring(0, cond.length() - 4);
        }
        if(cond.isEmpty())
        {
            cond = "true";
        }
        
        // Get the addComment string
        String addComment = getAddCommentString(_jsonPath);
        
        currentJsonToYaml.add("            if(" + _jsonPath + " && (" + cond + ")) {");
        currentJsonToYaml.add("            " + addComment);
        currentJsonToYaml.add("                retVal += \"" + _indent + compName + ":\\\\\\\\n\";");
        currentJsonToYaml.addAll(currComp.getJsonToYaml());
        currentJsonToYaml.add("            }\n");
        
        if(currComp.getJsonToYamlCondition().length() > 0)
        {
            if(currentJsonToYamlCondition.length() > 0)
            {
                currentJsonToYamlCondition.append(" || ");
            }
            currentJsonToYamlCondition.append(currComp.getJsonToYamlCondition());
        }
    }
    
    /**
     * Method generates the grid update pages for a grid that is not a top level object.
     * 
     * @param shortCompName The short name of the component
     * @param longCompName The long name of the component
     * @param currComp The actual component to generate the UI for
     * @param jsonObject The json object name
     * @param isSimpleGrid Indicates that the current component is a simple element in an array
     * @param lvl The array level of this component
     * @throws Exception
     */
    private void generateChildGridUpdatePages(String shortCompName, String longCompName, Component currComp, String jsonObject, 
            boolean isSimpleGrid, int lvl) throws Exception
    {
        Component gridComp = currComp.getItems();
        
        if(gridComp != null)
        {
            // Set the new tab name
            String tabName = _comp._tabName;
            String tabTitle = _comp._tabTitle;
            if(tabName == null || tabName.isEmpty())
            {
                tabName = shortCompName;
                tabTitle = _comp.getTitle(tabName, currComp.getXName());
            }
            
            // Save all validations
            _comp._validations.addAll(gridComp.getValidations());
            
            StringBuffer currChildJson = new StringBuffer();
            for(String jty: gridComp._jsonToYaml)
            {
                currChildJson.append(jty);
            }
    
            _comp._childJsonToYaml = currChildJson.toString();
            
            addDatatableGridField(shortCompName, longCompName, jsonObject, currComp, tabName, tabTitle, isSimpleGrid);
            
            // Merge the additional code
            mergeLists(_comp._additionalCode, gridComp._additionalCode);
            mergeLists(_comp._additionalImports, gridComp._additionalImports);
    
            // Merge the extra grid code 
            _comp._updateGridDataCode.append(gridComp._updateGridDataCode.toString());
            if(_comp._extraGridAddArgs.length() > 0 && gridComp._extraGridAddArgs.length() > 0)
            {
                _comp._extraGridAddArgs.append(", ");
            }
            _comp._extraGridAddArgs.append(gridComp._extraGridAddArgs.toString());
            _comp._extraGridNames.addAll(gridComp._extraGridNames);
            
            // Add the code to push the grid data to the json
            _comp._pushData.append(shortCompName + ": " + longCompName + ",\n");
            
            // Add the code to add the grid data to updateYaml
            updatePopulateJson(shortCompName, jsonObject);
            
            // Create the pages to update the grid. ie add, edit and delete
            gridComp.generateGridUpdatePages(_name, shortCompName, _comp.listToString(gridComp._additionalCode), _comp.listToString(gridComp._additionalImports), 
                    gridComp._updateGridDataCode.toString(), gridComp._extraGridAddArgs.toString(), gridComp._extraGridNames, 
                    _pagePrefix, currComp._childGrid, false, (_isObjectMenu)?lvl+1:lvl, (_compPath.isEmpty())?shortCompName: _compPath + "_" + shortCompName, _jsonPath);
            
            // Add the new pages and content to the pages map
            _comp._pages.putAll(gridComp.getPagesMap());
        }

    }
    
    /**
     * Method updates the populate json code for this object.
     * The populate json code is used to convert the UI fields into the json that is passed
     * into the jsonToYaml function.
     *  
     * @param compName The name of this component.
     * @param jsonObject The name of the json container to add the field value to.
     */
    void updatePopulateJson(String compName, String jsonObject)
    {
        // Need to make sure that the rowData contains the objects to add
        // Add a condition check for each part
        StringBuffer addCond = new StringBuffer();
        StringBuffer path = new StringBuffer();
        String parts[] = _rowPath.split("\\.");
        for(String part: parts)
        {
            if(path.length() > 0)
            {
                path.append(".");
            }
            path.append(part);
            
            if(addCond.length() > 0)
            {
                addCond.append(" && ");
            }
            addCond.append(path);
        }
        
        // Make sure the grid populate key is correct
        String gridPopKey = _rowPath;
        if(gridPopKey.endsWith("]"))
        {
            gridPopKey += "." + compName;
        }

        // Generate the code and add it to the existing populate json code.
        _comp._populateJson.append(Constants.GRID_POPULATE_JSON_STR.replaceAll(Constants.GRID_POP_KEY, gridPopKey).replaceAll(Constants.ADD_ROW_KEY, _name)
                .replaceAll(Constants.ELEM_NAME, jsonObject).replaceAll(Constants.GRID_LOOKUP_KEY, compName).replaceAll(Constants.GRID_POP_CONDITION, addCond.toString()));
    }
    
    /**
     * This method generates the additional code for a grid page.
     * 
     * @param simpleFields A list of simple fields that this grid contains.
     * @param dataFields A string containing the grid data header data.
     * @param name The long name for this component that will get used for variable names.
     * @param fullName The full page name that gets shown when the add button is clicked on the grid.
     * @param tabName The UI tab name that the grid lives in.
     */
    private void generateAdditionalCode(List<SimpleComponent> simpleFields, String dataFields, String name, String fullName, String tabName)
    {
        // Make sure there are data fields
        if(dataFields != null && !dataFields.trim().isEmpty())
        {
            // Create the grid data struct code
            String dataStruct = Constants.GRID_DATA_STRUCT.replaceAll(Constants.ADD_FIELDS, dataFields).replaceAll(Constants.ADD_NAME, name);
            _comp._additionalCode.add(dataStruct + "\n");
            
            // Create the grid row data code
            String rowData = Constants.GRID_DATA_ROW.replaceAll(Constants.ADD_NAME, name);
            _comp._additionalCode.add(rowData + "\n");
            
            // Generate code to reset all the grid simple fields
            StringBuffer resetFields = new StringBuffer();
            for(SimpleComponent field: simpleFields)
            {
                String fieldName = field.getName();
                resetFields.append("    " + Constants.WIDGET_CLEAR.replaceAll(Constants.WIDGET_ID, fieldName + "_id"));
                resetFields.append("\n");
            }
            
            // Generate the function to add a new grid row
            String gridHandleAdd = Constants.GRID_HANDLE_ADD.replaceAll(Constants.ADD_COMPONENT_NAME, name).replaceAll(Constants.ADD_WIDGET_CLEAR, resetFields.toString())
                    .replaceAll(Constants.ADD_PARENT_DIV, tabName + "_div").replaceAll(Constants.ADD_CHILD_PAGE, "add" + fullName + "Page");
            
            // Save the generated additional code
            _comp._additionalCode.add(gridHandleAdd + "\n");
        }
    }
    
    /**
     * This method generates the code for the UPDATE_GRID_DATA macro replacement.
     * This code is called when the grid data is updated via add, edit or delete.
     * 
     * @param comp The current component.
     * @param handleChange The handleChange method
     * @param name The long name that gets used for variable names.
     */
    private void generateExtraGridCode(Component comp, String handleChange, String name)
    {
        
        // Make sure that child grid fields are added as arguments to the load grid method
        StringBuffer addArgs = new StringBuffer();
        addArgs.append(comp.getFunctionArgs());
        for(String field: comp._extraGridFields.keySet())
        {
            addArgs.append(field + ",");
        }

        StringBuffer deleteCondition = new StringBuffer();
        StringBuffer idFieldsCondition = new StringBuffer();
        StringBuffer createTempId = new StringBuffer();
        StringBuffer createNewId = new StringBuffer();
        StringBuffer idNotNullCond = new StringBuffer();
        comp.handleIdFields(name, name, deleteCondition, idFieldsCondition, createTempId, createNewId, idNotNullCond, new StringBuffer(), new StringBuffer(), "");
        
        // Update the handleChange functionality by wrapping in a condition
        StringBuffer realHandleChange = new StringBuffer();
        if(handleChange != null && !handleChange.isEmpty())
        {
             
            realHandleChange.append("        if(" + idNotNullCond.toString() + ") {\n");
            realHandleChange.append("    " + handleChange + "\n");
            realHandleChange.append("        }\n");
        }

        // Generate and save the update grid data function
        _comp._updateGridDataCode.append(Constants.UPDATE_GRID_DATA.replaceAll(Constants.ADD_NAME, name)
                .replaceAll(Constants.ADD_LOAD_ARGS, addArgs.toString())
                .replaceAll(Constants.ADD_DELETE_CONDITION, deleteCondition.toString())
                .replaceAll(Constants.ADD_PUSH_DATA, comp.getPushData())
                .replaceAll(Constants.ADD_ID_FIELDS_CONDITION, idFieldsCondition.toString())
                .replaceAll(Constants.CREATE_TEMP_ID, createTempId.toString())
                .replaceAll(Constants.CREATE_NEW_ID, createNewId.toString())
                .replaceAll(Constants.ADD_HANDLE_CHANGE, realHandleChange.toString()));
    }
    
    /**
     * This method adds a grid name to the list of extraGridAddArgs and extraGridNames
     * 
     * @param comp
     * @param name
     * @param isSimpleArray
     */
    private void generateExtraGridArgs(Component comp, String name, boolean isSimpleArray)
    {
        SimpleComponent currChild = new SimpleComponent(_jsonPath, comp._idFields.values(), comp._requiredFields.values(), comp._requiredOneOfFields.values(),
                name, isSimpleArray, "", "", false, "", "", "");
        if(_parentArray != null)
        {
            _parentArray._childGrid.add(currChild);
        }
        else
        {
            _comp._childGrid.add(currChild);
        }
        
        if(_comp._extraGridAddArgs.length() > 0)
        {
            _comp._extraGridAddArgs.append(", ");
        }
        _comp._extraGridAddArgs.append("set" + name);
        _comp._extraGridNames.add(name);
    }
    
    private void addDatatableGridField(String compName, String longCompName, String jsonObject,
            Component currComp, String tabName, String tabTitle, boolean isSimpleArray)
    {
        if(!isSimpleArray && currComp.getItems()._idFields.isEmpty())
        {
            System.err.println("The array " + longCompName + " does not have a UUID field.");
            System.exit(1);
        }
        
       // Create the jsonToYaml for the grid
       generateGridJsonToYaml(currComp.getItems()._jsonToYamlGridFields, compName);
       
       // Add the grid handleSave data
       _comp._extraGridFields.put(longCompName, compName);
       
       // Generate the additional code for the new page
       generateAdditionalCode(currComp.getItems()._simpleFields, currComp.getItems().getDataFields(), longCompName, _comp.generateFullName(_pagePrefix, compName), tabName);
       
       generateExtraGridCode(currComp.getItems(), _handleChange, longCompName);
       
       generateExtraGridArgs(currComp.getItems(), longCompName, isSimpleArray);

       // Add the new page imports (Add, Edit and Delete)
       String pageName = _pagePrefix + compName;
       _comp._additionalImports.add("const " + Constants.toCamelCase(pageName, false) + "DeleteModal = lazy(() => import('./" + pageName + "DeleteModal'));\n");
       _comp._additionalImports.add("const " + Constants.toCamelCase(pageName, false) + "Add = lazy(() => import('./" + pageName + "Add'));\n");
       _comp._additionalImports.add("const " + Constants.toCamelCase(pageName, false) + "Edit = lazy(() => import('./" + pageName + "Edit'));\n");
       
       // Need to create the state fields for each simple widget field
       StringBuffer addFieldPopCode = new StringBuffer();
       StringBuffer editFieldPopCode = new StringBuffer();
       StringBuffer setFieldCode = new StringBuffer();
       StringBuffer stateArgs = new StringBuffer();
       StringBuffer editStateArgs = new StringBuffer();
       StringBuffer dataLoadCodeGenerated = new StringBuffer();
       StringBuffer clearFieldCode = new StringBuffer();
       
       // Create set state strings
       _comp.setStateStrings(currComp.getItems()._simpleFields, currComp.getItems()._idFields, setFieldCode, addFieldPopCode, 
               editFieldPopCode, stateArgs, editStateArgs, dataLoadCodeGenerated, clearFieldCode, false, true);
       
       String clearFields = clearFieldCode.toString().trim().replaceAll("\n", "").replaceAll(";", ",");
       
       String escapedDescription = _comp.escapeDescString(currComp.getDescription());
       
       // Descriptions longer than 500 chars break the tooltip usage
       // To fix this set the width to 50% of available screen
       String ttWidth = "300";
       String ttDelay = "";
       if(escapedDescription.length() > 500)
       {
           ttWidth = Constants.TT_LARGE_WIDTH;
           ttDelay = Constants.TT_LARGE_DELAY;
       }
       
       String title = currComp.getTitle(compName, currComp.getXName());
       
       // Create tab content for the new grid
       String dataTableContent = Constants.DATA_TABLE.replaceAll(Constants.ADD_NAME, longCompName)
               .replaceAll(Constants.ADD_TITLE, title)
               .replaceAll(Constants.ADD_ROW_KEY_CAMEL, Constants.toCamelCase(pageName, false))
               .replaceAll(Constants.ADD_STATE_ARGS, stateArgs.toString())
               .replaceAll(Constants.ADD_EDIT_STATE_ARGS, stateArgs.toString())
               .replaceAll(Constants.ADD_DATA_ROW, longCompName + "rowData." + longCompName)
               .replaceAll(Constants.ADD_CLEAR_STATE, clearFields)
               .replaceAll(Constants.ADD_TT_TEXT, escapedDescription)
               .replaceAll(Constants.ADD_TT_WIDTH, ttWidth)
               .replaceAll(Constants.ADD_TT_DELAY, ttDelay);
       
       // Need to create a new tab for simple types not at top level
       if(!_comp._tabContent.containsKey(tabTitle))
       {
           List<String> content = new ArrayList<String>();
           _comp._tabContent.put(tabTitle, content);
           _comp._tabMap.put(tabTitle, tabName);
       }
       
       _comp._tabContent.get(tabTitle).add("                " + dataTableContent);
       
       // Add the extra grid update html code
       String updateGridHtmlCode = Constants.GRID_UPDATE_HTML.replaceAll(Constants.ADD_NAME, longCompName)
               .replaceAll(Constants.ADD_ROW_KEY_CAMEL, Constants.toCamelCase(pageName, false))
               .replaceAll(Constants.ADD_STATE_ARGS, stateArgs.toString())
               .replaceAll(Constants.ADD_EDIT_STATE_ARGS, stateArgs.toString());

       _comp._gridUpdateHtml.append(updateGridHtmlCode);
   }
    
    /**
     * This method generates the jsonToYaml code for a grid.
     * 
     * @param fields
     * @param arrayLevel
     * @param currentJsonToYaml
     * @param currentJsonToYamlCondition
     * @param jsonPath
     * @param key
     * @param indent
     */
    private void generateGridJsonToYaml(List<String> fields, String compName)
    {
        if(fields.size() > 0)
        {
            String arrayKey = "i";
            if(_arrayLevel > 0)
            {
                arrayKey += (_arrayLevel + 1);
            }
            
            // For single array elements don't need new line
            // Unless its a complex multi layer element (eg: server.ssl.front_end.sni.certificate
            // This is the case if there is only a single field and the child jsonToYaml doesn't have a for loop 
            String elemNewLine = "\\\\\\\\n";
            if(fields.size() == 1 && _comp._childJsonToYaml.indexOf("for(var") < 0)
            {
                elemNewLine = "";
            }
            
            // Generate the condition code
            String fullCondition = _comp.generateFullPathCondition(_jsonPath, true);
            
            // Generate the jsonToYaml code
            StringBuffer jsonYamlCode = new StringBuffer();
            jsonYamlCode.append("            if(" + fullCondition + _jsonPath + ".length > 0) {\n");
            
            // Get the addComment string
            String addComment = getAddCommentString(_jsonPath);
            
            // If a string has been entered rather than an array then just add it directly
            jsonYamlCode.append("                if(typeof " + _jsonPath + " === \"string\") {\n");
            jsonYamlCode.append("                " + addComment);
            jsonYamlCode.append("                    retVal += \"" + _indent + compName + ": \" + escapeYaml(" + _jsonPath + ", \"" + _indent + "\") + \"\\\\\\\\n\";\n");
            jsonYamlCode.append("                } else {\n");
            jsonYamlCode.append("                " + addComment);
            jsonYamlCode.append("                    retVal += \"" + _indent + compName + ": \\\\\\\\n\";");
            jsonYamlCode.append("\n");
            
            // Add the for loop for all grid items.
            jsonYamlCode.append("                    for(var " + arrayKey + " = 0; " + arrayKey + " < " + _jsonPath + ".length; " + arrayKey + "++) {\n");
            jsonYamlCode.append("                        retVal += \"" + _indent + "  - " + elemNewLine + "\";");
            jsonYamlCode.append("\n");
            jsonYamlCode.append(_comp._childJsonToYaml);
            jsonYamlCode.append("                    }\n");
            jsonYamlCode.append("                }\n");
            jsonYamlCode.append("            }\n");
            
            // This entire jsonToYaml now becomes the new child jsonToYaml in case of multiple nesting.
            _comp._childJsonToYaml = jsonYamlCode.toString();
            
            // Add the new code to the existing list
            currentJsonToYaml.add(jsonYamlCode.toString());
            
            // Add the new overall condition. ie no changes unless there is an item in the grid
            if(currentJsonToYamlCondition.length() > 0)
            {
                currentJsonToYamlCondition.append(" || ");
            }
            currentJsonToYamlCondition.append("(" + fullCondition + _jsonPath + ".length > 0)");
        }
    }
    
    /**
     * Method checks the json path of an element and generates the tab heading if required.
     * 
     * @param tabName The map key of the current tab contents 
     * @param tabId The id for the current tab
     * @param jsonPath
     * @param altName An alternate name for the tab title
     * @return
     */
    private boolean generateTabHeading(String tabName, String tabId, String jsonPath, String altName)
    {
        boolean retVal = false;
        
        // Add the headings for multi level parts
        String[] pathParts = jsonPath.split("\\.");
        
        // Paths more than 3 elements need a heading
        if(pathParts.length > 3)
        {
            // Create the tab heading
            int realLength = pathParts.length - 3;
            String marginLeft = (realLength * 20) + "px";
            
            StringBuffer heading = new StringBuffer();
            heading.append(Constants.DIV_CLASS);
            
            String headingName = pathParts[pathParts.length - 1].replaceAll("\\[i.]", "").replaceAll("\\[i]", "");
            
            // Generate the title for the tab heading
            String title = _comp.getTitle(headingName, altName);
            
            heading.append("  <h3>" + title + "</h3>");
            heading.append("<hr/>\n");
            heading.append("</div>\n");
            heading.append("                <div className=\"iag-wdgt-container\" style={{marginLeft:\"" + marginLeft + "\",marginBottom:\"10px\"}}>\n");
                     
            // Make sure the tabContent contains the heading data
            if(!_comp._tabContent.containsKey(tabName))
            {
                List<String> content = new ArrayList<String>();
                _comp._tabContent.put(tabName, content);
                _comp._tabMap.put(tabName, tabId);
            }
            
            _comp._tabContent.get(tabName).add("                " + heading);
            
            // We have opened a new div so need to close it later
            retVal = true;
        }
        
        return retVal;
    }
    
    /**
     * Method merges the passed in jsonToYaml code with the component jsonToYamL code.
     * 
     * @param name The object name
     * @param currentJsonToYaml The new jsonToYaml code to add
     * @param currentJsonToYamlCondition The new jsonToYaml condition to add
     * @param addConditionWrap Whether or not to wrap the jsonToYaml with a condition check
     * @param isArray Whether or not the condition check needs to check array length
     * @param isObjectMenu Whether or not the object is part of an object Menu
     */
    private void mergeJsonToYaml()
    {
        // Have all of the jsonToYaml code so format it 
        StringBuffer helperStr = new StringBuffer();
        for(String current: currentJsonToYaml)
        {
            helperStr.append(current);
            helperStr.append("\n");
        }
        
        // Add the new condition code
        if(currentJsonToYamlCondition.length() > 0)
        {
            if(!_comp._jsonToYamlCondition.isEmpty())
            {
                _comp._jsonToYamlCondition += " || ";
            }
            _comp._jsonToYamlCondition += currentJsonToYamlCondition;
        }
        
        // If this is the top then wrap the jsonToYaml code
        if(_wrapHelper && helperStr.length() > 0)
        {
            // Object level condition
            String cond = "json." + _name + " && json." + _name + ".length > 0";
            if(!_isArray)
            {
                cond = "json." + _name;
            }
            
            // Add extra conditions for object menu page
            String extraConds = "";
            if(_isObjectMenu && !_comp._jsonToYamlCondition.trim().isEmpty())
            {
                extraConds = " && (" + _comp._jsonToYamlCondition + ")";
            }
            
            // Generate the code
            StringBuffer newJsonToYaml = new StringBuffer();
            newJsonToYaml.append("    // " + _name + "\n");
            newJsonToYaml.append("    if(" + cond + extraConds + ") {\n");
            newJsonToYaml.append("    " + Constants.JSONTOYAML_ADD_COMMENT.replaceAll(Constants.ADD_NAME, _name));
            newJsonToYaml.append("        retVal += \"" + _name + ":\\\\\\\\n\";");
            if(_isArray)
            {
                newJsonToYaml.append("        for (var i = 0; i < json." + _name + ".length; i++) {\n");
                newJsonToYaml.append("            retVal += \"  - \\\\\\\\n\";\n");
            }
            newJsonToYaml.append(helperStr.toString());
            if(_isArray)
            {
                newJsonToYaml.append("        }\n");
            }
            newJsonToYaml.append("    }\n");
            
            // Wrap it with the jsonToYaml skeleton to create its own function
            String currJsonToYaml = Constants.JSONTOYAML_CODE_SKELETON.replaceAll(Constants.ADD_NAME, _name)
                    .replaceAll(Constants.JSONTOYAML_CODE, newJsonToYaml.toString());
            
            _comp._jsonToYaml.add(currJsonToYaml);
        }
        else
        {
            // No need to wrap just add the jsonToYaml directly
            _comp._jsonToYaml.add(helperStr.toString());
        }

    }
    
    /**
     * Helper method generates the js object name that is used to add data to json.
     * If the parent is not null then the object name is "new + parent", otherwise 
     * it will be newElem.
     * 
     * @param parent The name of the parent if it exists.
     * @return
     */
    private String getJsonObjectName(String parent)
    {
        return "new" + ((!parent.isEmpty())?parent:"Elem");
    }
    
    /**
     * Method creates the code to create a react select widget that will get added to a grid add and edit page.
     * 
     * @param compName
     * @param longCompName
     * @param currComp
     * @param jsonObject
     */
    private void addSimpleSelectGridField(String compName, String longCompName, Component currComp, String jsonObject)
    {
        String title = currComp.getTitle(compName, currComp.getXName());
        
        // If the jsonPath ends with [i] then its a simple array rather than a string
        String valType = "string";
        if(_jsonPath != null && _jsonPath.matches(".*i.*]$")) 
        {
            valType = "stringarray";
        }
        
        _comp._validations.add(new ValidationEntry(_jsonPath.substring(5), valType, currComp.getEnum(), 0, false, 0, false));
        StringBuffer items = new StringBuffer();
        for(String item: currComp.getEnum())
        {
            items.append(Constants.SELECT_ITEM.replaceAll(Constants.SELECT_TEXT, item).replaceAll(Constants.SELECT_VALUE, item));
            items.append("\n");
        }
        
        String onChange = (_isArray)?Constants.ON_CHANGE_STATE_ADD_PAGE.replaceAll(Constants.ADD_NAME, longCompName)
                :Constants.ON_CHANGE_STATE_OBJECT_PAGE.
                replaceAll(Constants.ADD_NAME, longCompName);
        
        String widgetText = Constants.SELECT_INPUT.replaceAll(Constants.ADD_NAME, longCompName).replaceAll(Constants.HANDLE_CHANGE, onChange)
                .replaceAll(Constants.ADD_LABEL, currComp.getLabel(title, false)).replaceAll(Constants.SELECT_ITEMS, items.toString());
        
        widgetText = _comp.replaceTooltipText(widgetText, currComp.getDescription(), longCompName);
        
        addSimpleGridField(compName, longCompName, currComp, jsonObject, widgetText, "value", false, false);
    }

    /**
     * Method creates the code to create a react text input widget that will get added to a grid add and edit page.
     * 
     * @param compName
     * @param longCompName
     * @param currComp
     * @param jsonObject
     */
    private void addSimpleStringGridField(String compName, String longCompName, Component currComp, String jsonObject)
    {
        String title = currComp.getTitle(compName, currComp.getXName());
        
        _comp._validations.add(new ValidationEntry(_jsonPath.substring(5), "string", new ArrayList<String>(), 0, false, 0, false));
        
        String onChange = (_isArray)?Constants.ON_CHANGE_STATE_ADD_PAGE.replaceAll(Constants.ADD_NAME, longCompName)
                :Constants.ON_CHANGE_STATE_OBJECT_PAGE.
                replaceAll(Constants.ADD_NAME, longCompName);
        
        String widgetText = Constants.TEXT_INPUT.replaceAll(Constants.ADD_NAME, longCompName).replaceAll(Constants.HANDLE_CHANGE, onChange)
                .replaceAll(Constants.ADD_LABEL, currComp.getLabel(title, false));
        
        widgetText = _comp.replaceTooltipText(widgetText, currComp.getDescription(), longCompName);
        
        addSimpleGridField(compName, longCompName, currComp, jsonObject, widgetText, "value", false, true);
    }
    
    /**
     * Method creates the code to create a react number input widget that will get added to a grid add and edit page.
     * 
     * @param compName
     * @param longCompName
     * @param currComp
     * @param jsonObject
     */
    private void addSimpleNumberGridField(String compName, String longCompName, Component currComp, String jsonObject)
    {
        String title = currComp.getTitle(compName, currComp.getXName());
        
        int min = -1;
        int max = -1;
        boolean minSet = false;
        boolean maxSet = false;
        if(currComp.getMinimum() != null && !currComp.getMinimum().trim().isEmpty() && !"unlimited".equalsIgnoreCase(currComp.getMinimum()))
        {
            min = Integer.parseInt(currComp.getMinimum());
            minSet = true;
        }
        if(currComp.getMaximum() != null && !currComp.getMaximum().trim().isEmpty() && !"unlimited".equalsIgnoreCase(currComp.getMaximum()))
        {
            max = Integer.parseInt(currComp.getMaximum());
            maxSet = true;
        }
        
        _comp._validations.add(new ValidationEntry(_jsonPath.substring(5), "number", new ArrayList<String>(), min, minSet, max, maxSet));
        
        String minText = (currComp.getMinimum() != null && !"unlimited".equals(currComp.getMinimum()))?" min={" + currComp.getMinimum() + "} ":"";
        String maxText = (currComp.getMaximum() != null && !"unlimited".equals(currComp.getMaximum()))?" max={" + currComp.getMaximum() + "} ":"";
        
        String onChange = (_isArray)?Constants.ON_CHANGE_STATE_ADD_PAGE.replaceAll(Constants.ADD_NAME, longCompName)
                :Constants.ON_CHANGE_STATE_OBJECT_PAGE.
                replaceAll(Constants.ADD_NAME, longCompName);
        
        String widgetText = Constants.NUMBER_INPUT.replaceAll(Constants.ADD_NAME, longCompName).replaceAll(Constants.HANDLE_CHANGE, onChange)
                .replaceAll(Constants.ADD_LABEL, currComp.getLabel(title, false))
                .replaceAll(Constants.ADD_MIN, minText)
                .replaceAll(Constants.ADD_MAX, maxText);
        
        widgetText = _comp.replaceTooltipText(widgetText, currComp.getDescription(), longCompName);
        
        addSimpleGridField(compName, longCompName, currComp, jsonObject, widgetText, "value", false, false);
    }
    
    /**
     * Method creates the code to create a react checkbox widget that will get added to a grid add and edit page.
     * 
     * @param compName
     * @param longCompName
     * @param currComp
     * @param jsonObject
     */
    private void addSimpleBooleanGridField(String compName, String longCompName, Component currComp, String jsonObject)
    {
        String title = currComp.getTitle(compName, currComp.getXName());
        
        _comp._validations.add(new ValidationEntry(_jsonPath.substring(5), "boolean", new ArrayList<String>(), 0, false, 0, false));

        String onChange = (_isArray)?Constants.ON_CHANGE_STATE_ADD_PAGE.replaceAll(Constants.ADD_NAME, longCompName)
                :Constants.ON_CHANGE_STATE_OBJECT_PAGE.
                replaceAll(Constants.ADD_NAME, longCompName);
        
        String widgetText = Constants.CHECKBOX_INPUT.replaceAll(Constants.ADD_NAME, longCompName).replaceAll(Constants.HANDLE_CHANGE, onChange)
                .replaceAll(Constants.ADD_LABEL, currComp.getLabel(title, false));
        
        widgetText = _comp.replaceTooltipText(widgetText, currComp.getDescription(), longCompName);
        
        addSimpleGridField(compName, longCompName, currComp, jsonObject, widgetText, "checked.toString()", true, false);
    }
    
    /**
     * Method finishes the creation of a react widget inside a grid add/edit page.
     * It will generate all the code that is common for any widget type.
     * 
     * @param compName
     * @param longCompName
     * @param currComp
     * @param jsonObject
     * @param widgetText
     * @param getValueSuffix
     * @param isBoolean
     * @param isString
     */
    private void addSimpleGridField(String compName, String longCompName, Component currComp, String jsonObject, String widgetText, 
            String getValueSuffix, boolean isBoolean, boolean isString)
    {
        String title = currComp.getTitle(compName, currComp.getXName());
        
        boolean isIdField = false;

        if(currComp.isUuid())
        {
            _comp._idFields.put(longCompName, compName);
            isIdField = true;
        }
        
        if(currComp.isRequired())
        {
            _comp._requiredFields.put(longCompName, compName);
        }
        else if(currComp.isRequiredOneOf())
        {
            _comp._requiredOneOfFields.put(longCompName, compName);
        }
        
        // Add simple fields to the grid
        SimpleComponent currChild = new SimpleComponent(_jsonPath, null, null, null, longCompName, false, currComp.getType(), currComp.getDefault(), isIdField, compName, _rowDataName, _rowDataArrayName);
        currComp.addSimpleComponent(currChild);
        _comp._simpleFields.add(currChild);

        if(_handleAsTop)
        {
            // Add the simple field to the grid store (This is for grid render only)
            _comp._dataFields.append(Constants.GRID_PUSH_DATA.replaceAll(Constants.GRID_PUSH_KEY, compName).replaceAll(Constants.GRID_PUSH_HEADER, title));
            _comp._gridFields.add(compName);
        }
        
        // Add the key to the function arguments (ie for update of grid)
        _comp._functionArgs.append(longCompName);
        _comp._functionArgs.append(", ");
        
        // Add the new push code to update the grid store
        _comp._pushData.append(compName + ": " + longCompName + ",\n");
        if(isString)
        {
            _comp._handleChangeCode.append("    if(document.getElementById(\"" + longCompName + "_id\").value.endsWith(\":\") !== true) {\n");
        }
        _comp._handleChangeCode.append("    " + jsonObject + "[\"" + compName + "\"] = document.getElementById(\"" + longCompName + "_id\")." + getValueSuffix + ";\n");
        if(isString)
        {
            _comp._handleChangeCode.append("    }\n");
        }
        updatePopulateJson(compName, jsonObject);
        
        // Save simple jsonToYaml
        String condition = _jsonPath;
        StringBuffer jsonYamlCode = new StringBuffer();
        
        String yamlKey = _indent +  compName + ": ";
        
        String simpleArrayField = "";
        if(_inSimpleArray)
        {
            yamlKey = "";
            simpleArrayField = "." + compName;
        }
        
        // Add the check for the default value being set
        // If it is then no yaml gets added
        String defaultVal = "";
        String boolCheck = "";
        if(currComp.getDefault() != null && !currComp.getDefault().isEmpty())
        {
            defaultVal = currComp.getDefault();
            if(isBoolean)
            {
                boolCheck = " && " + condition + simpleArrayField + " != " + defaultVal + "";
            }
        }
        
        String path = condition + simpleArrayField;
        String addComment = getAddCommentString(path);
        
        jsonYamlCode.append("            if(" + path + " !== undefined && " + path + " !== '" + defaultVal + "'" + boolCheck + ") {\n");
        jsonYamlCode.append("            " + addComment);
        jsonYamlCode.append("                retVal += \"" + yamlKey + "\" + escapeYaml(" + path + ", \"" + _indent + "\") + \"\\\\\\\\n\";\n");
        
        // Simple array need to add a yaml check for simple field also
        // Eg: first check json.server.ssl.front_end.certificate[i].certificate and if that fails
        // then check json.server.ssl.front_end.certificate[i]
        addComment = getAddCommentString(condition);
        if(_inSimpleArray)
        {
            jsonYamlCode.append("            } else if(" + condition + " !== undefined && " + condition + " !== '" + defaultVal + "'" + boolCheck + ") {\n");
            jsonYamlCode.append("            " + addComment);
            jsonYamlCode.append("                retVal += \"" + yamlKey + "\" + escapeYaml(" + condition + ", \"\") + \"\\\\\\\\n\";\n");
        }
        jsonYamlCode.append("            }\n");

        currentJsonToYaml.add(jsonYamlCode.toString());
        
        if(currentJsonToYamlCondition.length() > 0)
        {
            currentJsonToYamlCondition.append(" || ");
        }
        
        // condition value may be a long json path. Need to make sure that each element exists
        String fullCondition = _comp.generateFullPathCondition(condition, true);
        
        currentJsonToYamlCondition.append("(" + fullCondition.toString() + condition + " !== '" + defaultVal + "'" + boolCheck + ")");
        
        // Create tab content
        // The simple types at top level just get added to a general tab
        if(_handleAsTop)
        {
            if(!_comp._tabContent.containsKey("General"))
            {
                List<String> generalContent = new ArrayList<String>();
                _comp._tabContent.put("General", generalContent);
                _comp._tabMap.put("General", "General");
            }
            
            _comp._tabContent.get("General").add("                " + widgetText);
        }
        else
        {
            // Need to create a new tab for simple types not at top level
            String tabName = _comp._tabTitle;
            
            if(!_comp._tabContent.containsKey(tabName))
            {
                List<String> content = new ArrayList<String>();
                _comp._tabContent.put(tabName, content);
                _comp._tabMap.put(tabName, _comp._tabName);
            }
            
            _comp._tabContent.get(tabName).add("                " + widgetText);
        }

    }

    /**
     * This method generates the correct array key for this jsonPath
     *. Eg: resource_servers[i].name would result in "[i]" whereas
     * resource_servers[i].name[i2].name2 would result in [i2]
     * @param arrayKey
     * @param jsonPath
     * @param isObjectMenu
     * @return
     */
    private int getArrayKey(StringBuffer arrayKey, String jsonPath, boolean isObjectMenu)
    {
        // Split the path to find 
        String[] jpParts = jsonPath.split("\\[i");
        int lvl = jpParts.length;
        
        

        // Set the array index
        if((isObjectMenu && lvl > 1) || (!isObjectMenu && lvl > 1))
        {
            arrayKey.append("[i" + (lvl) + "]");
        } else {
            arrayKey.append("[i]");
        }
        return lvl;
    }
    
    /**
     * Method will add all entries from one list into another unless the entry already exists.
     * ie result will be a list of unique entries from both lists.
     * 
     * @param mainList The array to add to
     * @param newList The array of new items to add to the mainList
     */
    public void mergeLists(List<String> mainList, List<String> newList)
    {
        for(String item: newList)
        {
            if(!mainList.contains(item))
            {
                mainList.add(item);
            }
        }
    }
    
    /**
     * Method generates the addComment function call from a given path.
     * 
     * @param path
     * @return
     */
    public String getAddCommentString(String path)
    {
        String retVal = "";
        
        // Comments not supported for arrays
        if(path.indexOf("[") == -1)
        {
            String shortPath = ((path.startsWith("json."))?path.substring(5):path);
            retVal = Constants.JSONTOYAML_ADD_COMMENT.replaceAll(Constants.ADD_NAME, shortPath);
        }
        
        return retVal;
    }
}
