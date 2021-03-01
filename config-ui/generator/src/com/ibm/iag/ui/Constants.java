/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

/**
 * This class contains the constant string and methods used for the UI generation.
 */
public class Constants 
{
    // *********************************************************************************************
    // --------------------------------------------------- Method constants ------------------------
    // *********************************************************************************************
    
    /**
     * This method converts a string of the form name_name2 into camel case NameName2
     * @param input
     * @param addSpace A flag indicating whether or not to add a space for each '_' char.
     * @return
     */
    public static String toCamelCase(String input, boolean addSpace)
    {
        StringBuffer retVal = new StringBuffer();
        String[] parts = input.split("_");
        for(int index = 0; index < parts.length; index++)
        {
            String part = parts[index];
            retVal.append(toUpperCasename(part));
            if(addSpace && (index + 1) < parts.length)
            {
                retVal.append(" ");
            }
        }
        
        return retVal.toString();
    }
    
    /**
     * Method converts the first char in a given string to an uppercase char.
     * 
     * @param input
     * @return
     */
    public static String toUpperCasename(String input)
    {
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    }
    
    // *********************************************************************************************
    // --------------------------------------------------- Standard constants and MACROs -----------
    // *********************************************************************************************
    
    public static String CONTENT_DIR = "content/";
    
    // App.js constants
    public static String ROUTES_MACRO = "<ADD_ROUTES_HERE>";
    public static String ROUTE_MACRO = "<ADD_ROUTE>";
    public static String COMP_MACRO = "<ADD_COMPONENT>";
    public static String ROUTE_TEMPLATE = "<Route path=\"/" + ROUTE_MACRO + "\" component= {" + COMP_MACRO + "} />";
    public static String IMPORT_MACRO = "<ADD_IMPORTS_HERE>";
    public static String IMP_MACRO = "<ADD_IMPORT>";
    public static String FROM_MACRO = "<ADD_FROM>";
    public static String IMPORT_TEMPLATE = "import " + IMP_MACRO + " from './content/" + FROM_MACRO + "'";
    
    // Header constants
    public static String LINKNAME = "<LINKNAME>";
    public static String LINKS_MACRO = "<ADD_LINKS_HERE>";
    public static String LINK_MACRO = "<ADD_LINK>";
    public static String LINKNAME_MACRO = "<ADD_LINK_NAME>";
    public static String LINKID_MACRO = "<ADD_LINK_ID>";
    public static String LINK_TEMPLATE = "<SideNavLink id=\"" + LINKID_MACRO + "Link\" isActive={window.location.hash && window.location.hash.indexOf(\"/" + LINK_MACRO + "\") > -1} onClick= {() => {onClick(onClickSideNavExpand, \"" + LINKID_MACRO + "Link\");}} element={Link} to=\"/" + LINK_MACRO + "\"><span id=\"" + LINKID_MACRO + "LinkText\">" + LINKNAME_MACRO + "</span></SideNavLink>";
    public static String REMOVE_LINK_TEMPLATE = "    document.getElementById(\"" + LINKNAME + "LinkText\").classList.remove('populatedLink');\n";
    public static String ADD_LINK_TEMPLATE = "        if(json." + LINKNAME + ") {\n" +
            "            document.getElementById(\"" + LINKNAME + "LinkText\").classList.add('populatedLink');\n" +
            "        }\n";
    
    // Landing Page constants
    public static String ADD_VALIDATE_HERE = "<ADD_VALIDATE_HERE>";
    public static String ADD_SCHEMA_HERE = "<ADD_SCHEMA_HERE>";
   
    // Component page constants
    public static String PAGENAME_MACRO = "<PAGENAME_MACRO>";
    public static String PAGECONTENT_MACRO = "<PAGECONTENT_MACRO>";
    public static String PAGECONTENT_INDENT = "                ";
    public static String PAGECHANGE_MACRO = "<PAGECHANGE_MACRO>";
    
    // -------------------------------------- STRING REPPLACE MACROS ----------------------------------------
    public static String ADD_NAME = "<ADD_NAME>";
    public static String ADD_FIELD_POPULATE_CODE = "<ADD_FIELD_POPULATE_CODE>";
    public static String ADD_EDIT_STATE_FIELDS = "<ADD_EDIT_STATE_FIELDS>";
    public static String ADD_SET_STATE_FIELDS = "<ADD_SET_FIELDS>";
    public static String PAGE_DESC = "<PAGE_DESC>";
    public static String HEADING_NAME = "<HEADING_NAME>";
    
    public static String ADD_ROW_KEY = "<ADD_ROW_KEY>";
    public static String ADD_ROW_KEY_CAMEL = "<ADD_ROW_KEY_CAMEL>";
    public static String ADD_FIELDS = "<ADD_FIELDS>";
    public static String ADD_ARGS = "<ADD_ARGS>";
    public static String ADD_COMPONENT_NAME = "<ADD_COMPONENT_NAME>";
    public static String ADD_GRID_TITLE = "<ADD_GRID_TITLE>";
    public static String ADD_PUSH_DATA = "<ADD_PUSH_DATA>";
    public static String ADD_POPULATE_JSON = "<ADD_POPULATE_JSON>";
    public static String GRID_PUSH_KEY = "<GRID_PUSH_KEY>";
    public static String GRID_PUSH_HEADER = "<GRID_PUSH_HEADER>";
    public static String GRID_POP_KEY = "<GRID_POP_KEY>";
    public static String GRID_LOOKUP_KEY = "<GRID_LOOKUP_KEY>";
    public static String ELEM_NAME = "<ELEM_NAME>";
    public static String GRID_POP_CONDITION = "<GRID_POP_CONDITION>";
    
    public static String ADD_PROPS = "<ADD_PROPS>";
    public static String ADD_LABEL = "<ADD_LABEL>";
    public static String HANDLE_CHANGE = "<HANDLE_CHANGE>";
    public static String ON_CHANGE = "onChange={handleChange}";
    public static String ON_CHANGE_STATE_OBJECT_PAGE = "onChange={(evt) => { update" + ADD_NAME + "(evt); handleChange(); }}";
    public static String ON_CHANGE_STATE_ADD_PAGE = "onChange={" + ADD_PROPS + "update" + ADD_NAME + "}";
    public static String SELECT_ITEMS = "<SELECT_ITEMS>";
    public static String SELECT_TEXT = "<SELECT_TEXT>";
    public static String SELECT_VALUE = "<SELECT_VALUE>";
    
    public static String ADD_TT_FIELDS = "<ADD_TT_FIELDS>";
    public static String ADD_TOOLTIP = "<ADD_TOOLTIP>";
    public static String ADD_INVALID = "<ADD_INVALID>";
    public static String ADD_INVALID_TEXT = "<ADD_INVALID_TEXT>";
    public static String VALUE_TEMPLATE = ADD_INVALID + ADD_INVALID_TEXT + " value={" + ADD_PROPS + ADD_NAME + "} ";
    public static String ADD_MIN = "<ADD_MIN>";
    public static String ADD_MAX = "<ADD_MAX>";

    public static String JSONTOYAML_MACRO = "<JSONTOYAML_MACRO>";
    public static String JSONTOYAML_CODE = "<JSONTOYAML_CODE>";
    public static String JSONTOYAML_BOOLS = "<JSONTOYAML_BOOLS>";
    public static String JSONTOYAML_SWITCH = "<JSONTOYAML_SWITCH>";
    public static String JSONTOYAML_CHECK = "<JSONTOYAML_CHECK>";
    
    public static String ADD_SHORT_DESC = "<ADD_SHORT_DESC>";
    public static String ADD_LONG_DESC = "<ADD_LONG_DESC>";
    
    public static String ADD_STATE_ARGS = "<ADD_STATE_ARGS>";
    public static String ADD_EDIT_STATE_ARGS = "<ADD_STATE_ARGS>";
    
    public static String ADD_ID_PREFIX = "<ADD_ID_PREFIX>";
    public static String ADD_HANDLE_ADD = "<ADD_HANDLE_ADD>";
    public static String ADD_CLEAR_STATE = "<ADD_CLEAR_STATE>";
    
    public static String ADD_MAIN_PAGE_NAME = "<ADD_MAIN_PAGE_NAME>";
    public static String ADD_MAIN_HEIGHT_LEVEL = "<ADD_MAIN_HEIGHT_LEVEL>";
    
    public static String ADD_IMPORTS = "<ADD_IMPORTS>";
    public static String ADD_GRID_SAVE_CODE = "<ADD_GRID_SAVE_CODE>";
    public static String LOAD_GRID_PARAMS = "<LOAD_GRID_PARAMS>";
    public static String SET_FIELDS_EMPTY = "<SET_FIELDS_EMPTY>";
    public static String ADDITIONAL_CODE = "<ADDITIONAL_CODE>";
    public static String ADD_STATE_FIELDS = "<ADD_STATE_FIELDS>";
    public static String ADD_TAB_LIST = "<ADD_TAB_LIST>";
    public static String ADD_HANDLE_CLOSE = "<ADD_HANDLE_CLOSE>";
    public static String ADD_HANDLE_CLOSE2 = "<ADD_HANDLE_CLOSE2>";
    public static String ADD_TOOLBAR = "<ADD_TOOLBAR>";
    public static String ADD_TABS = "<ADD_TABS>";
    public static String HANDLE_ADD_TYPE = "<HANDLE_ADD_TYPE>";
    public static String HANDLE_ADD_ARGS = "<HANDLE_ADD_ARGS>";
    public static String ADD_TAB_ID = "<ADD_TAB_ID>";
    public static String ADD_DEFAULT_TAB = "<ADD_DEFAULT_TAB>";
    
    public static String ADD_STATE_ID_FIELD = "<ADD_STATE_ID_FIELD>";
    public static String ADD_BUTTON = "<ADD_BUTTON>";
    public static String HIDE_STYLE = "style={{display:'none'}}";
    public static String ADD_HIDE = "<ADD_HIDE>";
    
    public static String EXTRA_PARAMS = "<EXTRA_PARAMS>";
    public static String EXTRA_BTN_PARAMS = "<EXTRA_BTN_PARAMS>";
    public static String PARENTID_PARAM = " tbName, parentIdPrefix, ";
    public static String EDIT_PARAMS = " objectName, " + PARENTID_PARAM;
    public static String ADD_DIV_NAME = "<ADD_DIV_NAME>";
    public static String ADD_TAB_NAME = "<ADD_DIV_NAME>";
    
    public static String WIDGET_ID = "<WIDGET_ID>";
    
    public static String ADD_UPDATE_GRID_CODE = "<ADD_EXTRA_GRID_CODE>";
    public static String ADD_LOAD_ARGS = "<ADD_LOAD_ARGS>";
    public static String ADD_HANDLE_CHANGE = "<ADD_HANDLE_CHANGE>";
    public static String ADD_GET_CODE = "<ADD_GET_CODE>";
    public static String ADD_DATALOAD_CODE = "<ADD_DATALOAD_CODE>";
    
    public static String ADD_POP_CODE = "<ADD_POP_CODE>";
    public static String ADD_JSON_LOAD = "<ADD_JSON_LOAD>";
    
    public static String ADD_SHOW_TABS = "<ADD_SHOW_TABS>";
    
    public static String ADD_CONDITIONS = "<ADD_CONDITIONS>";
    public static String ADD_JSON_PATH = "<ADD_JSON_PATH>";
    
    public static String ADD_VALUE = "<ADD_VALUE>";
    public static String DEFAULT_VALUE = "<DEFAULT_VALUE>";
    public static String EVT_TARGET_VALUE = "evt.target.value";
    public static String EVT = "evt";
    public static String ADD_ROW_DATA_PREFIX = "<ADD_ROW_DATA_PREFIX>";
    public static String ADD_ROW_DATA_SUFFIX = "<ADD_ROW_DATA_SUFFIX>";
    public static String ADD_CAMEL_NAME = "<ADD_CAMEL_NAME>";
    public static String ADD_FIELD = "<ADD_FIELD>";
    
    public static String ADD_TRUE_VALUE = "<ADD_TRUE_VALUE>";
    public static String ADD_FALSE_VALUE = "<ADD_FALSE_VALUE>";
    
    public static String ADD_TOP_LEVEL_BREAKS = "<ADD_TOP_LEVEL_BREAKS>";
    public static String TOP_LEVEL_BREAKS = "          <br/><br/><br/>\n";
    
    public static String ADD_SET_STATE = "<ADD_SET_STATE>";
    public static String SUBMIT_STATE_ARGS = "<SUBMIT_STATE_ARGS>";
    
    public static String DELETE_LABEL = "<DELETE_LABEL>";
    public static String DELETE_NAME = "<DELETE_NAME>";
    
    public static String ADD_LOAD_PAGE_CODE = "<ADD_LOAD_PAGE_CODE>";
    public static String ADD_RESET_GRIDS = "<ADD_RESET_GRIDS>";
    public static String ADD_LOAD_CODE = "<ADD_LOAD_CODE>";
    
    public static String ADD_PAGE_NAME = "<ADD_PAGE_NAME>";
    
    public static String VALUE = "<VALUE>";
    public static String ADD_ID = "<ADD_ID>";
    
    public static String ADD_TITLE = "<ADD_TITLE>";
    
    public static String ADD_DATA_ROW = "<ADD_DATA_ROW>";
    public static String ADD_TOOLBAR_NAME = "<ADD_TOOLBAR_NAME>";
    
    public static String ADD_TT_TEXT = "<ADD_TT_TEXT>";
    
    public static String ADD_WIDGET_CLEAR = "<ADD_WIDGET_CLEAR>";
    public static String ADD_PARENT_DIV = "<ADD_PARENT_DIV>";
    public static String ADD_CHILD_PAGE = "<ADD_CHILD_PAGE>";
    public static String ADD_HIDE_TABS = "<ADD_HIDE_TABS>";
    
    public static String ADD_GRID_UPDATE_HTML = "<ADD_GRID_UPDATE_HTML>";
    
    // MACROS to add and remove the populatedLinks class name to the various links
    public static String REMOVE_POPCLASS = "<REMOVE_POPCLASS>";
    public static String ADD_POPCLASS = "<ADD_POPCLASS>";
    
    // MACRO for the application name
    public static String APPLICATION_NAME = "<APPLICATION_NAME>";
    
    // Macro for update grid data
    public static String ADD_ID_FIELDS_CONDITION = "<ADD_ID_FIELDS_CONDITION>";
    public static String CREATE_TEMP_ID = "<ADD_CREATE_ID>";
    public static String CREATE_NEW_ID = "<ADD_GENERATE_ID>";
    public static String ADD_DELETE_CONDITION = "<ADD_DELETE_CONDITION>";
    public static String CREATE_TEMP_ID_JSON = "<CREATE_TEMP_ID_JSON>";
    public static String ADD_DISABLED_STATE = "<ADD_DISABLED_STATE>";
    
    
    
    // *********************************************************************************************
    // --------------------------------------------------- Code snippet templates -------------
    // *********************************************************************************************
    
    // Template code for handleAdd function in a non top edit page
    public static String HANDLE_ADD_NON_TOP_EDIT = "    var pName = oName;\n" +
            "    if(pName.endsWith(\"_" + ADD_NAME + "\")) {\n" +
            "        var len = \"_" + ADD_NAME + "\".length;\n" +
            "        pName = pName.slice(0, -len);\n" +
            "    }\n" +
            "\n" +
            "    if(tbName !== undefined && tbName !== \"\") {\n" +
            "      document.getElementById(tbName).style.display = \"none\";\n" +
            "    }\n\n" +
            "    updateStyle(pName + \"_div\" + parentIdPrefix, \"display\", \"none\");\n" + 
            "    document.getElementById(\"edit" + ADD_COMPONENT_NAME + "Page\" + idPrefix).style.display = \"block\";\n" +
            "    document.getElementById(pName + \"_tab\" + parentIdPrefix).style.display = \"none\";\n\n";
    
    // Template code for handleClose function in a non top edit page
    public static String HANDLE_CLOSE_NON_TOP_EDIT = "    var pName = oName;\n" +
            "    if(pName.endsWith(\"_" + ADD_NAME + "\")) {\n" +
            "        var len = \"_" + ADD_NAME + "\".length;\n" +
            "        pName = pName.slice(0, -len);\n" +
            "    }\n" +
            "\n" +
            "    if(tbName !== undefined && tbName !== \"\") {\n" +
            "      document.getElementById(tbName).style.display = \"flex\";\n" +
            "    }\n\n" +
            "    updateStyle(pName + \"_div\" + parentIdPrefix, \"display\", \"block\");\n" + 
            "    document.getElementById(\"edit" + ADD_COMPONENT_NAME + "Page\" + idPrefix).style.display = \"none\";\n" +
            "    document.getElementById(pName + \"_tab\" + parentIdPrefix).style.display = \"flex\";\n\n";
    
    public static String HANDLE_CLOSE_NON_TOP = ADD_HANDLE_CLOSE2;
    
    // Template to reload the grid data for a grid when the add/edit/delete function is called.
    public static String UPDATE_GRID_DATA = "    const [" + ADD_NAME + ", set" + ADD_NAME + "] = React.useState([]);\n" + 
            "    const [fetched" + ADD_NAME + ", setFetched" + ADD_NAME + "] = React.useState(false);\n" + 
            "\n" + 
            "    React.useEffect(() => {\n" + 
            "      " + ADD_NAME + "loadGrid();\n" + 
            "    }, [fetched" + ADD_NAME + "]);\n" + 
            "\n" + 
            "    const " + ADD_NAME + "loadGrid = React.useCallback(async (" + ADD_LOAD_ARGS + "add) => {\n" + 
            "      try {\n" + 
            "        var attrs = [];\n" + 
            "        if(" + ADD_ID_FIELDS_CONDITION + ") {\n" + 
            "          if(add) {\n" + 
            "            for(var i = 0; i < " + ADD_NAME + "rowData." + ADD_NAME + ".length; i++) {\n" +
            "              var tempId = " + CREATE_TEMP_ID + " + \"\";\n" +
            "              if((window." + ADD_NAME + "editing != true && window." + ADD_NAME + "editing != \"true\") || tempId != window." + ADD_NAME + "rowId) {\n" +
            "                attrs.push(" + ADD_NAME + "rowData." + ADD_NAME + "[i]);\n" + 
            "              }\n" +
            "            }\n" + 
            "            var newId = " + CREATE_NEW_ID + " + \"\";\n" +
            "            attrs.push({\n" + 
            "              id: newId,\n" + 
            "              " + ADD_PUSH_DATA + 
            "            });\n" + 
            "          } else {\n" + 
            "            // Must be a delete\n" + 
            "            for(var i = 0; i < " + ADD_NAME + "rowData." + ADD_NAME + ".length; i++) {\n" + 
            "              if(" + ADD_DELETE_CONDITION + ") {\n" + 
            "                attrs.push(" + ADD_NAME + "rowData." + ADD_NAME + "[i]);\n" + 
            "              }\n" + 
            "            }\n" + 
            "          }\n" + 
            "        } else {\n" + 
            "          attrs = " + ADD_NAME + "rowData." + ADD_NAME + ";\n" + 
            "        }\n" + 
            "        " + ADD_NAME + "rowData." + ADD_NAME + " = attrs;\n" + 
            "        const data = {" + ADD_NAME + ": attrs};\n" + 
            "        set" + ADD_NAME + "(data." + ADD_NAME + ");\n\n" + 
            ADD_HANDLE_CHANGE + 
            "\n" +
            "      } catch (e) {\n" + 
            "        console.log(e);\n" + 
            "      }\n" + 
            "      return true;\n" + 
            "    });\n" +
            "\n";
    
    // Template to load the grid data for a page
    public static String GET_CODE_TEMPLATE = "    const getEditData = (objectName, data, setData) => {\n" +
            "      var oName = (objectName)?objectName:\"\"\n" +
            "\n" +
            "      var yamlText = window.iagyaml;\n" + 
            "      var json = {};\n" + 
            "      if(yamlText !== null && yamlText !== undefined) {\n" + 
            "        json = safeLoad(yamlText);\n" + 
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "      }\n\n" + 
            ADD_POP_CODE +
            "  };";
    
    // Template to load the current IAG yaml into a JSON object
    public static String JSON_LOAD =             "      var yamlText = window.iagyaml;\n" + 
            "      var json = {};\n" + 
            "      if(yamlText !== null && yamlText !== undefined) {\n" + 
            "        json = safeLoad(yamlText);\n" + 
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "      }\n";
    
    // Template to load the data for simple types on a page (ie not grid data)
    public static String DATALOAD_CODE_TEMPLATE = "    const [fetcheddata, setFetcheddata] = React.useState(false);\n" + 
            "    React.useEffect(() => {\n" + 
            "      dataLoad();\n" + 
            "    }, [fetcheddata]);\n" + 
            "    const dataLoad = () => {\n" + 
            ADD_JSON_LOAD + "\n" +
            ADD_POP_CODE + "\n" +
            "      return true;\n" + 
            "    };";
    
    // Templates to show/hide a toolbar
    public static String SHOW_TOOLBAR = "      updateStyle2(\"" + ADD_NAME + "_tb_div\" + idPrefix, \"bx--table-toolbar\", \"display\", \"flex\");\n";
    public static String HIDE_TOOLBAR = "    updateStyle2(\"" + ADD_NAME + "_tb_div\" + idPrefix, \"bx--table-toolbar\", \"display\", \"none\");\n";
    
    // Template to retrieve specific data when a page is first loaded
    public static String LOAD_PAGE_CODE_TEMPLATE = 
            "    const [fetched" + ADD_NAME + ", setFetched" + ADD_NAME + "] = React.useState(false);\n" +
            "    React.useEffect(() => {\n" +
            "      get" + ADD_NAME + "();\n" +
            "    }, [fetched" + ADD_NAME + "]);\n" +
            "\n" +
            "    const get" + ADD_NAME + " = () => {\n" +
            "\n" +
            "      var yamlText = window.iagyaml;\n" +
            "      var json = {};\n" +
            "      if(yamlText !== null && yamlText !== undefined) {\n" +
            "        json = safeLoad(yamlText);\n" +
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "      }\n" +
            "\n" +
            ADD_RESET_GRIDS +
            "\n" +
            ADD_LOAD_CODE +
            "    };\n" +
            "\n";
    
    // Template to show an element
    public static String ELEM_DISPLAY = "    document.getElementById(\"" + ADD_ID + "\" + idPrefix).style.display = \"" + VALUE + "\";";
    
    // Template to open a new div with a specific divname class so it can be shown/hidden easily
    public static String DIV_CLASS = "<div className= {\"iag_form_elem " + ADD_DIV_NAME + "\" + idPrefix}>\n";
    public static String DIV_CLASS_TAB_HDG = "<div className= {\"iag_form_elem iag_tab_heading " + ADD_DIV_NAME + "\" + idPrefix}>\n";
    
    // Templates to call updateStyle2 to hide/show a tab via classname
    public static String HIDE_TABS = "document.getElementById(\"" + ADD_TAB_ID + "_tab\" + idPrefix).style.display = \"none\";\n";
    public static String SHOW_TABS = "document.getElementById(\"" + ADD_TAB_ID + "_tab\" + idPrefix).style.display = \"flex\";\n"; 
    public static String HIDE_TABS_TOP = "document.getElementById(\"" + ADD_TAB_ID + "_tab\" + idPrefix).style.display = \"none\";\n";
    public static String SHOW_TABS_TOP = "document.getElementById(\"" + ADD_TAB_ID + "_tab\" + idPrefix).style.display = \"flex\";\n"; 
    
    // handleAdd function when an array sub component has the add button clicked
    public static String GRID_HANDLE_ADD = "const " + ADD_COMPONENT_NAME + "handleAdd = (idPrefix, clearFields) => {\n" +
            "    if(idPrefix === undefined) idPrefix = \"\";\n\n" +
            "    // Set the fields to empty\n" + 
            "    if(clearFields) {\n" +
            "      for(var i = 0; i < clearFields.length; i++) {\n" +
            "        eval(clearFields[i]);\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            ADD_WIDGET_CLEAR +
            "    // Hide the tab page\n" + 
            "    updateStyle(\"" + ADD_DIV_NAME + "\" + idPrefix, \"display\", \"none\");\n" +
            "    // Show the add page\n" + 
            "    document.getElementById(\"" + ADD_CHILD_PAGE + "\" + idPrefix).style.display = \"block\";\n" + 
            "    // Hide the remaining fields\n" + 
            "    " + ADD_HIDE_TABS + "\n" + 
            "  };";
    
    // Template to clear a widget value
    public static String WIDGET_CLEAR = "document.getElementById(\"" + WIDGET_ID + "\" + idPrefix).value = \"\";";
    
    // Helper functions
    public static String PAGE_DESC_TEMPLATE = "<Collapsible tabIndex=\"0\" trigger=\"" + ADD_SHORT_DESC + "\">\n" +
            "                    <p>" + ADD_LONG_DESC + "</p>\n" +
            "                  </Collapsible>\n";
    
    // For each top level page need to delete any window settings that may have been set previously
    public static String UPDATE_WINDOW_PAGE = "  if(window.iagpage != \"" + PAGENAME_MACRO + "\") {\n" +
            "    delete(window.editing);\n" +
            "    delete(window.rowId);\n" +
            "    window.iagpage = \"" + PAGENAME_MACRO + "\";\n" +
            "  }\n";
    
    // Template for the code to populate a JSON element
    public static String GRID_POPULATE_JSON_STR = "      if(" + GRID_POP_CONDITION + ") {\n" + 
            "        " + ELEM_NAME + "[\"" + GRID_LOOKUP_KEY + "\"] = " + GRID_POP_KEY + ";\n" +
            "      }\n";
    
    // Template for the grid data format
    public static String GRID_PUSH_DATA = "{\n" + 
            "    header: '" + GRID_PUSH_HEADER + "',\n" + 
            "    key: '" + GRID_PUSH_KEY + "',\n" + 
            "  },\n";
    
    
    // This is a template for the table grid data fields.
    public static String GRID_DATA_STRUCT = "const " + ADD_NAME + "headerData = [\n" + 
            "    " + ADD_FIELDS + "\n" + 
            "];\n";
    
    // This is a template for the actual table grid data hashmap
    public static String GRID_DATA_ROW = "const " + ADD_NAME + "rowData = {" + ADD_NAME + ": []};\n";
    
    // Template for Tabs at the top level
    public static String TABS_TOP =             "          <Tabs id= {\"" + ADD_TAB_ID + "_tab\" + idPrefix} defaultTab={\"" + ADD_DEFAULT_TAB + "_tab\" + idPrefix} vertical className=\"vertical-tabs\" style={{overflow:'auto'}}>\n" + 
            ADD_TAB_LIST + 
            "          </Tabs>\n";
    
    // Add button template
    public static String ADD_BUTTON_TEMPLATE = "            <Button id='addButton' onClick={() => {handleAdd(" + HANDLE_ADD_ARGS + ", idPrefix, props.doAdd); }}>Add " + HANDLE_ADD_TYPE + "</Button>\n";
    
    // Toolbar for grids in the top level page
    public static String ADD_TOP_TOOLBAR = "        <div id={\"" + ADD_NAME + "_tb_div\" + idPrefix}>\n" +
            "          <TableToolbar aria-label=\"data table toolbar\">\n" + 
            "            <TableToolbarContent id={\"" + ADD_NAME + "_tb\"}>\n" + 
            ADD_BUTTON + 
            "              <Button id='closeButton' " + ADD_HIDE + " onClick={() => { handleClose(idPrefix); }}>Cancel</Button>\n" + 
            "              <Button disabled={" + ADD_DISABLED_STATE + "} id='saveButton' " + ADD_HIDE + " onClick={() => { handleSave(loadGrid, idPrefix); }}>Save</Button>\n" + 
            "            </TableToolbarContent>\n" + 
            "          </TableToolbar>\n" +
            "        </div>\n";
    
    // handleAdd code for top level edit page
    public static String HANDLE_ADD_TOP_EDIT = "    document.getElementById(\"" + ADD_COMPONENT_NAME + "Page\").style.display = \"none\";\n" + 
            "    document.getElementById(\"addButton\").style.display = \"none\";\n" + 
            "    document.getElementById(\"edit" + ADD_COMPONENT_NAME + "Page\" + idPrefix).style.display = \"block\";\n";
    
    // handleClose code for top level edit page
    public static String HANDLE_CLOSE_TOP_EDIT = "    document.getElementById(\"" + ADD_COMPONENT_NAME + "Page\").style.display = \"block\";\n" + 
            "    document.getElementById(\"addButton\").style.display = \"block\";\n" + 
            "    document.getElementById(\"edit" + ADD_COMPONENT_NAME + "Page\" + idPrefix).style.display = \"none\";\n";
    
    // handleAdd code for top level add page
    public static String HANDLE_ADD_TOP = "    document.getElementById(\"" + ADD_COMPONENT_NAME + "Page\").style.display = \"none\";\n" + 
            "    document.getElementById(\"addButton\").style.display = \"none\";\n" + 
            "    document.getElementById(\"closeButton\").style.display = \"block\";\n" + 
            "    document.getElementById(\"saveButton\").style.display = \"block\";\n" + 
            "    document.getElementById(\"add" + ADD_COMPONENT_NAME + "Page\").style.display = \"block\";\n";
    
    // handleClose code for top level add page
    public static String HANDLE_CLOSE_TOP = "    document.getElementById(\"" + ADD_COMPONENT_NAME + "Page\").style.display = \"block\";\n" + 
            "    document.getElementById(\"addButton\").style.display = \"block\";\n" + 
            "    document.getElementById(\"closeButton\").style.display = \"none\";\n" + 
            "    document.getElementById(\"saveButton\").style.display = \"none\";\n" + 
            "    document.getElementById(\"add" + ADD_COMPONENT_NAME + "Page\").style.display = \"none\";\n";
    
    // handleAdd code for non top level 
    public static String HANDLE_ADD_NON_TOP = "    handleClose(idPrefix,  doClose);\n";

    
    // *********************************************************************************************
    // --------------------------------------------------- React state field templates -------------
    // *********************************************************************************************
    
    // Template for code to create and update a standard state field 
    public static String POP_FIELD_TEMPLATE = "    const [" + ADD_NAME + ", set" + ADD_NAME + "] = useState(" + DEFAULT_VALUE + "),\n" + 
            "    update" + ADD_NAME + " = useCallback((evt) => set" + ADD_NAME + "(" + ADD_VALUE + "), []);";
    
    // Template for code to create and update a number state field 
    public static String POP_NUMBER_FIELD_TEMPLATE = "    const [" + ADD_NAME + ", set" + ADD_NAME + "] = useState(" + DEFAULT_VALUE + "),\n" + 
            "    update" + ADD_NAME + " = useCallback((evt) => {}, []);";
    
    // Template for code to create and update a state field that is also a grid ID for Add page
    public static String POP_ID_FIELD_TEMPLATE = "    const [" + ADD_NAME + ", set" + ADD_NAME + "] = useState(" + DEFAULT_VALUE + "),\n" + 
            "    update" + ADD_NAME + " = useCallback((evt) => {\n" +
            "      set" + ADD_NAME + "(" + ADD_VALUE + ");\n" +
            CREATE_TEMP_ID +
            "      validateField(" + ADD_ROW_DATA_PREFIX + "rowData." + ADD_ROW_DATA_SUFFIX + ", set" + ADD_NAME + "_valid, set" + ADD_NAME + "_invalid_text, \"" + ADD_CAMEL_NAME + "\", \"" + ADD_FIELD + "\", tempId);\n" +
            "    }, []);\n" +
            "\n" +
            "    const [" + ADD_NAME + "_valid, set" + ADD_NAME + "_valid] = useState(true);\n" +
            "    const [" + ADD_NAME + "_invalid_text, set" + ADD_NAME + "_invalid_text] = useState(\"\");\n";
    
    // Template for code to create and update a state field that is also a grid ID for Edit page
    public static String EDIT_POP_ID_FIELD_TEMPLATE = "    const [" + ADD_NAME + ", set" + ADD_NAME + "] = useState(" + DEFAULT_VALUE + "),\n" + 
            "    update" + ADD_NAME + " = useCallback((evt) => set" + ADD_NAME + "(" + ADD_VALUE + "), []);" +
            "\n" +
            "    const [" + ADD_NAME + "_valid, set" + ADD_NAME + "_valid] = useState(true);\n" +
            "    const [" + ADD_NAME + "_invalid_text, set" + ADD_NAME + "_invalid_text] = useState(\"\");\n";
    
    // Template to set a state field
    public static String SET_STATE_FIELD_TEMPLATE = "    set" + ADD_NAME + "((" + ADD_CONDITIONS + ")?" + ADD_TRUE_VALUE + ":" + ADD_FALSE_VALUE + ");";

    
    // *********************************************************************************************
    // --------------------------------------------------- Widget templates ------------------------
    // *********************************************************************************************
    
    // Template for a text input widget
    public static String TEXT_INPUT = DIV_CLASS + 
            "          <TextInput " + VALUE_TEMPLATE + " id={\"" + ADD_NAME + "_id\" + idPrefix} " + ADD_TT_FIELDS + " labelText=\"" + ADD_LABEL + "\" " + HANDLE_CHANGE + "/>\n" + 
            ADD_TOOLTIP +
            "        </div>\n"; 
    
    // Template for a number input widget
    public static String NUMBER_INPUT = DIV_CLASS + 
            "          <NumberInput value={" + ADD_PROPS + ADD_NAME + "} id={\"" + ADD_NAME + "_id\" + idPrefix} " + ADD_TT_FIELDS + ADD_MIN + ADD_MAX + " label=\"" + ADD_LABEL + "\" " + HANDLE_CHANGE + "/>\n" + 
            ADD_TOOLTIP +
            "        </div>\n"; 
    
    // Template for a checkbox widget
    public static String CHECKBOX_INPUT = DIV_CLASS + 
            "          <Checkbox checked={" + ADD_PROPS + ADD_NAME + "} id={\"" + ADD_NAME + "_id\" + idPrefix} " + ADD_TT_FIELDS + " labelText=\"" + ADD_LABEL + "\" " + HANDLE_CHANGE + "/>\n" + 
            ADD_TOOLTIP +
            "        </div>\n"; 
    
    // Template for a select widget
    public static String SELECT_INPUT = DIV_CLASS + "                <Select\n" +
            "                  value={" + ADD_PROPS + ADD_NAME + "}\n " +
            "                  id={\"" + ADD_NAME + "_id\" + idPrefix}\n" + 
            ADD_TT_FIELDS +
            "                  labelText=\"" + ADD_LABEL + "\"\n" + 
            "                  " + HANDLE_CHANGE +
            ">\n" +
            "                  <SelectItem text=\"\" value=\"\" />\n" +
            SELECT_ITEMS +
            "                </Select>\n" + ADD_TOOLTIP + "                </div>\n";
    
    // Template for a select drop down item
    public static String SELECT_ITEM = "                  <SelectItem text=\"" + SELECT_TEXT + "\" value=\"" + SELECT_VALUE + "\" />"; 
    
    // Templates for tooltip widgets
    public static String TOOLTIP_FIELDS = " onFocus={(e) => ReactTooltip.show(e.target)} onBlur={(e) => ReactTooltip.hide(e.target)} data-tip data-for={\"" + ADD_NAME + "_tooltip_id\" + idPrefix} ";
    public static String TOOLTIP = "          <ReactTooltip id={\"" + ADD_NAME + "_tooltip_id\" + idPrefix} place=\"top\" effect=\"solid\"><div style={{ maxWidth: 300 }}>" + ADD_TT_TEXT + "</div></ReactTooltip>\n";
    
    // Template for grid update html code
    public static String GRID_UPDATE_HTML = "                  <Suspense fallback={<div></div>}>\n" +
            "                    <" + ADD_ROW_KEY_CAMEL + "Add loadGrid={" + ADD_NAME + "loadGrid} doClose={() => {closeAdd(idPrefix);}} idPrefix={idPrefix} \n" +
            ADD_STATE_ARGS +
            "                    />\n" +
            "                  </Suspense>\n" +
            "                  <Suspense fallback={<div></div>}>\n" +
            "                    <" + ADD_ROW_KEY_CAMEL + "Edit " + ADD_TOOLBAR_NAME + " loadGrid={" + ADD_NAME + "loadGrid} dataLoad={dataLoad} name={\"" + ADD_NAME + "\"} idPrefix={idPrefix + \"" + ADD_ID_PREFIX + "\"} parentIdPrefix={idPrefix} \n" +
            ADD_EDIT_STATE_ARGS + 
            "                    />\n" +
            "                  </Suspense>\n";

    // Template for a tab widget
    public static String DATA_TABLE = DIV_CLASS + "  <h3 tabIndex=\"0\" " + TOOLTIP_FIELDS + ">" + ADD_TITLE + "</h3><hr/>\n</div>\n" +
            TOOLTIP + "\n" +
            "                <div id={\"" + ADD_NAME + "TableDiv\" + idPrefix} style={{marginLeft:\"10px\",marginBottom:\"10px\"}}>\n" + 
            "                  <div className={\"iag_form_elem " + ADD_DIV_NAME + "\" + idPrefix}>\n" +
            "                    <DataTable id={\"" + ADD_NAME + "Table\" + idPrefix} isSortable\n" + 
            "                        headers={" + ADD_NAME + "headerData}\n" + 
            "                        rows={" + ADD_NAME + "rowData." + ADD_NAME + "}\n" + 
            "                        render={({\n" + 
            "                          rows,\n" + 
            "                          headers,\n" + 
            "                          getHeaderProps,\n" + 
            "                          getRowProps,\n" + 
            "                          getTableProps,\n" + 
            "                          getToolbarProps,\n" + 
            "                          onInputChange,\n" + 
            "                          getTableContainerProps\n" + 
            "                    }) => (\n" + 
            "                      <TableContainer>\n" + 
            "                        <TableToolbar aria-label=\"data table toolbar\">\n" + 
            "                          <TableToolbarContent>\n" + 
            "                            <Button onClick={() => {" + ADD_NAME + "handleAdd(idPrefix, [" + ADD_CLEAR_STATE + "]);}}>Add</Button>\n" + 
            "                          </TableToolbarContent>\n" + 
            "                        </TableToolbar>\n" + 
            "                        <Table size='normal' {...getTableProps()}>\n" + 
            "                          <TableHead>\n" + 
            "                            <TableRow>\n" + 
            "                              {headers.map(header => (\n" + 
            "                                <TableHeader {...getHeaderProps({ header })}>\n" + 
            "                                  {header.header}\n" + 
            "                                </TableHeader>\n" + 
            "                              ))}\n" + 
            "                              <TableHeader>\n" + 
            "                                  Actions\n" + 
            "                              </TableHeader>\n" + 
            "                            </TableRow>\n" + 
            "                          </TableHead>\n" + 
            "                          <TableBody>\n" + 
            "                            {rows.map(row => (\n" + 
            "                              <TableRow key={row.id}>\n" + 
            "                                {row.cells.map(cell => (\n" + 
            "                                  <TableCell key={cell.id}>{cell.value}</TableCell>\n" + 
            "                                ))}\n" + 
            "                                <TableCell>\n" + 
            "                                  <Suspense fallback={<div></div>}>\n" +
            "                                    <" + ADD_ROW_KEY_CAMEL + "DeleteModal row={row} loadGrid={" + ADD_NAME + "loadGrid} />\n" +
            "                                  </Suspense>\n" +
            "                                  <Suspense fallback={<div></div>}>\n" +
            "                                    <" + ADD_ROW_KEY_CAMEL + "Edit " + ADD_TOOLBAR_NAME + " data={" + ADD_DATA_ROW + "} setData={setDataMain} row={row} loadGrid={" + ADD_NAME + "loadGrid} dataLoad={dataLoad} editing={true} name={\"" + ADD_NAME + "\"} idPrefix={idPrefix + \"" + ADD_ID_PREFIX + "\"} parentIdPrefix={idPrefix} \n" +
            ADD_EDIT_STATE_ARGS + 
            "                                    />\n" +
            "                                  </Suspense>\n" +
            "                                </TableCell>\n" + 
            "                              </TableRow>\n" + 
            "                            ))}\n" + 
            "                          </TableBody>\n" + 
            "                        </Table>\n" + 
            "                      </TableContainer>)}\n" + 
            "                    />\n" + 
            "                  </div>\n" +
            "                </div>\n";

    
    // *********************************************************************************************
    // ------------------------------------------- Page Templates ----------------------------------
    // *********************************************************************************************
    
    /**
     * A simple page is a page that contains only simple widgets. There are no arrays or objects (hashes).
     * Just simple widgets like text string, number, boolean or select
     */
    public static String SIMPLE_PAGE = "import React, { useState, useCallback, lazy, Suspense } from 'react';\n" + 
            "import {\n" + 
            "  Button,\n" + 
            "  TextInput,\n" + 
            "  Select,\n" + 
            "  SelectItem,\n" + 
            "  Checkbox,\n" + 
            "} from 'carbon-components-react';\n" + 
            "import ReactTooltip from \"react-tooltip\";\n" +
            "\n" + 
            "import { safeLoad, getDivHeight, jsonToYaml, updateStyle, updateStyle2, validateField, toggleDescription } from '../../helpers';" +
            "\n\n" +
            "const handleChange = () => {\n" + 
            "\n" + 
            "    var yamlText = window.iagyaml;\n" + 
            "\n" + 
            "    var json = {};\n" + 
            "\n" + 
            "    if(yamlText !== null && yamlText !== undefined) {\n" + 
            "        json = safeLoad(yamlText);\n" + 
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "    }\n" + 
            "\n" + 
            "    " + PAGECHANGE_MACRO + 
            "\n\n" +
            "    var yamlop = jsonToYaml(json);" +
            "\n\n" +
            "    window.iagyaml = yamlop;\n" + 
            "};\n" + 
            "\n" + 
            "const " + PAGENAME_MACRO + " = () => {\n" +
            "\n" +
            "    const idPrefix = \"\";\n" +
            "\n" + 
            UPDATE_WINDOW_PAGE +
            "\n" +
            ADD_EDIT_STATE_FIELDS +
            "\n" +
            "    const [fetcheddata, setFetcheddata] = React.useState(false);\n" +
            "    React.useEffect(() => {\n" +
            "      dataLoad();\n" +
            "    }, [fetcheddata]);\n" +
            "    const dataLoad = () => {\n" +
            "      var yamlText = window.iagyaml;\n" +
            "      var json = {};\n" +
            "      if(yamlText !== null && yamlText !== undefined) {\n" +
            "        json = safeLoad(yamlText);\n" +
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "      }\n" +
            ADD_SET_STATE_FIELDS + "\n" +
            "    };\n\n" +
            "    const setDataMain = (functionName, data) => {\n" +
            "      if(functionName && data) {\n" +
            "        eval(functionName)(data);\n" +
            "      }\n" +
            "    };\n" +
            "\n" +
            "    return (\n" + 
            "        <div className=\"bx--grid--no-gutter bx--grid--full-width landing-page\">\n" + 
            "          <div className=\"bx--row landing-page__banner\" style={{paddingBottom:\"3rem\"}}>\n" + 
            "            <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "              <h1 className=\"landing-page__heading\">\n" + 
            "                " + HEADING_NAME + "\n" + 
            "              </h1>\n" + 
            "            </div>\n" + 
            "            <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "              <h4 className=\"landing-page__desc\" style={{marginTop:\"30px\"}}>" + PAGE_DESC + "</h4>\n" + 
            "            </div>" + 
            "            <div id=\"warning_div\" className=\"bx--col-lg-13\" style={{display:'none', color:'red', position:'absolute', bottom:'0', marginBottom: '10px'}}></div>\n" +
            "          </div>\n" + 
            "          <div className=\"bx--row landing-page__r2\">\n" + 
            "            <div className=\"bx--col bx--no-gutter\">\n" + 
            "              <div className=\"bx--col\">\n" + 
            "                <br/><br/><br/>\n" +
            "                <div className=\"iag--simple-div\">\n" +
            "                " + PAGECONTENT_MACRO + "\n" + 
            "                </div>\n" +
            "              </div>\n" + 
            "            </div>\n" + 
            "          </div>\n" + 
            "        </div>\n" + 
            "    );\n" + 
            "};\n" + 
            "\n" + 
            "export default " + PAGENAME_MACRO + ";";
    
    /**
     * A grid page is a page that contains a top level array with no additional elements.
     */
    public static String GRID_PAGE = "import React, { useState, useCallback, lazy, Suspense } from 'react';\n" + 
            "import {\n" + 
            "  Button,\n" + 
            "  Tabs,\n" + 
            "  Tab,\n" + 
            "  TextInput,\n" +
            "  NumberInput,\n" +
            "  Select,\n" + 
            "  SelectItem,\n" + 
            "  Checkbox,\n" + 
            "  DataTable,\n" + 
            "  TableRow,\n" + 
            "  TableHead,\n" + 
            "  TableHeader,\n" + 
            "  TableContainer,\n" + 
            "  TableCell,\n" + 
            "  Table,\n" + 
            "  TableBody,\n" + 
            "  TableToolbar,\n" + 
            "  TableToolbarContent,\n" + 
            "} from 'carbon-components-react';\n" + 
            "import ReactTooltip from \"react-tooltip\";\n" +
            "\n" + 
            "import { safeLoad, getDivHeight, jsonToYaml, updateStyle, updateStyle2, validateField, toggleDescription } from '../../helpers';" +
            "\n\n" +
            "const " + ADD_ROW_KEY_CAMEL + "Add = lazy(() => import('./" + ADD_ROW_KEY + "Add'));\n" + 
            "const " + ADD_ROW_KEY_CAMEL + "Edit = lazy(() => import('./" + ADD_ROW_KEY + "Edit'));\n" + 
            "const " + ADD_ROW_KEY_CAMEL + "DeleteModal = lazy(() => import('./" + ADD_ROW_KEY + "DeleteModal'));\n" + 
            "\n\n" + 
            "// Form header data\n" + 
            "const headerData = [\n" + 
            "    " + ADD_FIELDS + "\n" + 
            "];\n" + 
            "\n" + 
            "const rowData = {" + ADD_ROW_KEY + ": []};\n" + 
            "\n" + 
            "const " + PAGENAME_MACRO + " = () => {\n" + 
            "\n" +
            "  const idPrefix = \"\";\n" +
            "\n" + 
            UPDATE_WINDOW_PAGE +
            "\n" +
            "  const [" + ADD_ROW_KEY + ", set" + ADD_ROW_KEY + "] = React.useState([]);\n" + 
            "  const [fetched, setFetched] = React.useState(false);\n" + 
            "\n" + 
            "  React.useEffect(() => {\n" + 
            "    loadGrid();\n" + 
            "  }, [fetched]);\n" + 
            "\n" + 
            "  const loadGrid = React.useCallback(async (" + ADD_ARGS + " add) => {\n" + 
            "\n" + 
            "    try {\n" + 
            "\n" + 
            "      var newData = [];\n" + 
            "\n" + 
            "      if(" + ADD_ID_FIELDS_CONDITION + ") {\n" + 
            "\n" + 
            "        if(add) {\n" + 
            "          for(var i = 0; i < rowData." + ADD_ROW_KEY + ".length; i++) {\n" + 
            "            var tempId = " + CREATE_TEMP_ID + " + \"\";\n" +
            "            // If editing don't add the row that is being edited\n" +
            "            if((window.editing != true && window.editing != \"true\") || tempId != window.rowId) {\n" +
            "              newData.push(rowData." + ADD_ROW_KEY + "[i]);\n" +
            "            }\n" +
            "          }\n" + 
            "          var newId = " + CREATE_NEW_ID + " + \"\";\n" +
            "          newData.push({\n" + 
            "            id: newId,\n" + 
            "            " + ADD_PUSH_DATA + 
            "          });\n" + 
            "        } else {\n" + 
            "          // Must be a delete\n" + 
            "          for(var i = 0; i < rowData." + ADD_ROW_KEY + ".length; i++) {\n" + 
            "            if(" + ADD_DELETE_CONDITION + ") {\n" + 
            "              newData.push(rowData." + ADD_ROW_KEY + "[i]);\n" + 
            "            }\n" + 
            "          }\n" + 
            "        }\n" + 
            "      } else {\n" + 
            "        newData = rowData." + ADD_ROW_KEY + ";\n" + 
            "      }\n" + 
            "\n" + 
            "      rowData." + ADD_ROW_KEY + " = newData;\n" + 
            "      \n" + 
            "      const data = {" + ADD_ROW_KEY + ": newData};\n" + 
            "      set" + ADD_ROW_KEY + "(data." + ADD_ROW_KEY + ");\n" + 
            "\n" + 
            "      updateYaml();\n" + 
            "    } catch (e) {\n" + 
            "      console.log(e);\n" + 
            "    }\n" + 
            "\n" + 
            "    return true;\n" + 
            "  });\n" + 
            "\n" + 
            "  const updateYaml = React.useCallback(async () => {\n" + 
            "\n" + 
            "    var yamlText = window.iagyaml;\n" + 
            "\n" + 
            "    var json = {};\n" + 
            "\n" + 
            "    if(yamlText !== null && yamlText !== undefined) {\n" + 
            "      json = safeLoad(yamlText);\n" + 
            "      if(json === undefined || json === null) {\n" +
            "        json = {};\n" +
            "      }\n" +
            "    }\n" + 
            "\n" + 
            "    if(rowData." + ADD_ROW_KEY + ".length > 0) {\n" +
            "      json[\"" + ADD_COMPONENT_NAME + "\"] = [];\n" + 
            "\n" + 
            "      for(var i = 0; i < rowData." + ADD_ROW_KEY + ".length; i++) {\n" + 
            "\n" + 
            "        var newElem = {};\n" + 
            "        " + ADD_POPULATE_JSON + "\n" + 
            "\n" + 
            "        json[\"" + ADD_COMPONENT_NAME + "\"].push(newElem);\n" + 
            "      }\n" +
            "    }\n" +
            "\n" + 
            "    var yamlop = jsonToYaml(json);\n" + 
            "\n" + 
            "    window.iagyaml = yamlop;\n" + 
            "\n" + 
            "    return true;\n" + 
            "  });\n" + 
            "\n" + 
            "  const get" + ADD_ROW_KEY + " = () => {\n" + 
            "\n" + 
            "    var yamlText = window.iagyaml;\n" + 
            "\n" + 
            "    var json = {};\n" + 
            "\n" + 
            "    if(yamlText !== null && yamlText !== undefined) {\n" + 
            "      json = safeLoad(yamlText);\n" + 
            "      if(json === undefined || json === null) {\n" +
            "        json = {};\n" +
            "      }\n" +
            "    }\n" + 
            "\n" + 
            "    rowData." + ADD_ROW_KEY + " = [];\n" + 
            "\n" + 
            "    if(json." + ADD_COMPONENT_NAME + " !== null && json." + ADD_COMPONENT_NAME + " !== undefined) {\n" + 
            "      for(var i = 0; i < json." + ADD_COMPONENT_NAME + ".length; i++) {\n" +
            "        if(json." + ADD_COMPONENT_NAME + "[i].id === undefined) {\n" +
            "          var tempId = " + CREATE_TEMP_ID_JSON + " + \"\";\n" +
            "          json." + ADD_COMPONENT_NAME + "[i].id = tempId;\n" +
            "        }\n" +
            "        rowData." + ADD_ROW_KEY + ".push(json." + ADD_COMPONENT_NAME + "[i]);\n" + 
            "      }\n" + 
            "    }\n" + 
            "  };\n" + 
            "\n" + 
            "  get" + ADD_ROW_KEY + "();\n" + 
            "\n" +
            ADD_EDIT_STATE_FIELDS + "\n" +
            "\n" +
            "  const " + ADD_ROW_KEY + "handleAdd = () => {\n" +
            ADD_CLEAR_STATE +
            "  };\n" +
            "\n" +
            "  const [fetcheddata, setFetcheddata] = React.useState(false);\n" +
            "  React.useEffect(() => {\n" +
            "    dataLoad();\n" +
            "  }, [fetcheddata]);\n" +
            "  const dataLoad = () => {\n" +
            "    var yamlText = window.iagyaml;\n" +
            "    var json = {};\n" +
            "    if(yamlText !== null && yamlText !== undefined) {\n" +
            "      json = safeLoad(yamlText);\n" +
            "      if(json === undefined || json === null) {\n" +
            "        json = {};\n" +
            "      }\n" +
            "    }\n\n" +
            "    if(json && json." + ADD_NAME + ") {\n" +
            "      for(var i = 0; i < json." + ADD_NAME + ".length; i++) {\n" +
            "        var tempId = " + CREATE_TEMP_ID_JSON + ";\n" +
            "        if(tempId === window.rowId) {\n" +
            ADD_SET_STATE_FIELDS + "\n" +
            "          return true;\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "    return false;\n" +
            "  };\n\n" +
            "\n" +
            "  return (\n" + 
            "    <div className=\"bx--grid--no-gutter bx--grid--full-width landing-page\">\n" + 
            "      <div className=\"bx--row landing-page__banner\" style={{paddingBottom:\"3rem\"}}>\n" + 
            "        <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "          <h1 className=\"landing-page__heading\">\n" + 
            "            " + HEADING_NAME + "\n" + 
            "          </h1>\n" + 
            "        </div>\n" + 
            "        <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "          <h4 className=\"landing-page__desc\" style={{marginTop:\"30px\"}}>" + PAGE_DESC + "</h4>\n" + 
            "        </div>" +
            "        <div id=\"warning_div\" className=\"bx--col-lg-13\" style={{display:'none', color:'red', position:'absolute', bottom:'0', marginBottom: '10px'}}></div>\n" +
            "      </div>\n" + 
            "      <div className=\"bx--row landing-page__r2\" style={{overflow:'auto'}}>\n" + 
            "        <div className=\"bx--col bx--no-gutter\">\n" + 
            "          <Suspense fallback={<div></div>}>\n" +
            "            <" + ADD_ROW_KEY_CAMEL + "Add loadGrid={loadGrid} doAdd={" + ADD_ROW_KEY + "handleAdd} \n" +
            ADD_STATE_ARGS +
            "            />\n" +
            "          </Suspense>\n" +
            "          <Suspense fallback={<div></div>}>\n" +
            "            <" + ADD_ROW_KEY_CAMEL + "Edit loadGrid={loadGrid} dataLoad={dataLoad} idPrefix={idPrefix + \"_edit\"} parentIdPrefix={idPrefix} \n" +
            ADD_EDIT_STATE_ARGS + 
            "            />\n" + 
            "          </Suspense>\n" +
            "          <div id=\"" + ADD_ROW_KEY + "Page\" className=\"bx--col bx--no-gutter\">\n" + 
            "            <DataTable isSortable\n" + 
            "              headers={headerData}\n" + 
            "              rows={" + ADD_ROW_KEY + "}\n" + 
            "              render={({\n" + 
            "                rows,\n" + 
            "                headers,\n" + 
            "                getHeaderProps,\n" + 
            "                getRowProps,\n" + 
            "                getTableProps,\n" + 
            "                getToolbarProps,\n" + 
            "                onInputChange,\n" + 
            "                getTableContainerProps\n" + 
            "          }) => (\n" + 
            "            <TableContainer title=\"" + ADD_GRID_TITLE + "\">\n" + 
            "              <Table size='normal' {...getTableProps()}>\n" + 
            "                <TableHead>\n" + 
            "                  <TableRow>\n" + 
            "                    {headers.map(header => (\n" + 
            "                      <TableHeader {...getHeaderProps({ header })}>\n" + 
            "                        {header.header}\n" + 
            "                      </TableHeader>\n" + 
            "                    ))}\n" + 
            "                    <TableHeader>\n" + 
            "                        Actions\n" + 
            "                    </TableHeader>\n" + 
            "                  </TableRow>\n" + 
            "                </TableHead>\n" + 
            "                <TableBody>\n" + 
            "                  {rows.map(row => (\n" + 
            "                    <TableRow key={row.id}>\n" + 
            "                      {row.cells.map(cell => {\n" +
            "                        if(cell.value === true || cell.value === false) {\n" +
            "                          return (\n" +
            "                            <TableCell key={cell.id}>{cell.value.toString()}</TableCell>\n" +
            "                          );\n" +
            "                        } else {\n" +
            "                          return (\n" +
            "                            <TableCell key={cell.id}>{cell.value}</TableCell>\n" + 
            "                          );\n" +
            "                        }\n" +
            "                      })}\n" + 
            "                      <TableCell>\n" + 
            "                        <Suspense fallback={<div></div>}>\n" +
            "                          <" + ADD_ROW_KEY_CAMEL + "DeleteModal row={row} loadGrid={loadGrid} />\n" +
            "                        </Suspense>\n" +
            "                        <Suspense fallback={<div></div>}>\n" +
            "                          <" + ADD_ROW_KEY_CAMEL + "Edit row={row} loadGrid={loadGrid} dataLoad={dataLoad} editing={true} idPrefix={\"_edit\"} \n" +
            ADD_EDIT_STATE_ARGS + 
            "                          />\n" +
            "                        </Suspense>\n" +
            "                      </TableCell>\n" + 
            "                    </TableRow>\n" + 
            "                  ))}\n" + 
            "                </TableBody>\n" + 
            "              </Table>\n" + 
            "            </TableContainer>)}\n" + 
            "          />\n" + 
            "          </div>\n" + 
            "        </div>\n" + 
            "      </div>\n" + 
            "    </div>\n" + 
            "  );\n" + 
            "};\n" + 
            "\n" + 
            "export default " + PAGENAME_MACRO + ";";
    
    /**
     * A grid add page gets generated to allow new entries to be added to a grid
     */
    public static String GRID_ADD_PAGE = "import React, { useCallback, useState, lazy, Suspense } from 'react';\n" + 
            "import {\n" + 
            "  Button,\n" + 
            "  TextInput,\n" +
            "  NumberInput,\n" +
            "  Select,\n" + 
            "  SelectItem,\n" + 
            "  Checkbox,\n" + 
            "  DataTable,\n" + 
            "  TableRow,\n" + 
            "  TableHead,\n" + 
            "  TableHeader,\n" + 
            "  TableContainer,\n" + 
            "  TableCell,\n" + 
            "  Table,\n" + 
            "  TableBody,\n" + 
            "  TableToolbar,\n" + 
            "  TableToolbarContent,\n" + 
            "} from 'carbon-components-react';\n" + 
            "\n" + 
            "import Collapsible from 'react-collapsible';" +
            "\n" +
            "import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';\n" + 
            "import ReactTooltip from \"react-tooltip\";\n" +
            "\n" + 
            "import { safeLoad, getDivHeight, jsonToYaml, updateStyle, updateStyle2, validateField, toggleDescription } from '../../helpers';\n" +
            "\n\n" +
            ADD_IMPORTS + 
            "\n\n" +
            "  const handleChange = () => {\n" + 
            "  };\n" + 
            "\n" + 
            "  const handleSave = (loadGrid, idPrefix, doClose) => {\n" + 
            "\n" +
            "    if(idPrefix === undefined) idPrefix = \"\";\n" +
            "\n" +
            "    var json = {};\n" + 
            "      \n" +
            ADD_GRID_SAVE_CODE + 
            "      \n" + 
            "    loadGrid(" + LOAD_GRID_PARAMS + " true); \n" + 
            "\n" + 
            "    handleClose(idPrefix, doClose);\n" + 
            "  };\n" + 
            "\n" + 
            "  const handleAdd = (" + HANDLE_ADD_ARGS + "idPrefix, doAdd, doClose) => {\n" +
            "    if(idPrefix === undefined) idPrefix = \"\";\n\n" +
            "\n" + 
            SET_FIELDS_EMPTY +
            "\n" +
            "    if(doAdd) {\n" +
            "      doAdd();\n" +
            "    }\n" +
            "\n" + 
            ADD_HANDLE_ADD +
            "  };\n" + 
            "\n" + 
            "  const handleClose = (idPrefix, doClose) => {\n" + 
            ADD_HANDLE_CLOSE + "\n" +
            "      if(doClose) {\n" +
            "        doClose();\n" +
            "      }\n" +
            "  };\n" + 
            "\n" + 
            "  const closeAdd = (idPrefix) => {\n" + 
            "      if(idPrefix === undefined) idPrefix = \"\";\n\n" +
            "      updateStyle(\"" + ADD_DIV_NAME + "\" + idPrefix, \"display\", \"block\");\n" +
            "      " + ADD_SHOW_TABS + "\n" +
            "  };\n" + 
            "\n" +
            ADDITIONAL_CODE + 
            "\n" + 
            "const " + PAGENAME_MACRO + "Add = (props) => {\n" + 
            "\n" + 
            "    var row = props.row;\n" + 
            "    const loadGrid = props.loadGrid;\n" +
            "    const doClose = props.doClose;\n" +
            "    const idPrefix = (props.idPrefix)?props.idPrefix:\"\";\n" +
            "\n" + 
            ADD_UPDATE_GRID_CODE +
            "\n\n" +
            ADD_FIELD_POPULATE_CODE +
            "\n" +
            ADD_DATALOAD_CODE +
            "\n\n" +
            "    const setDataMain = (functionName, data) => {\n" +
            "      if(functionName && data) {\n" +
            "        eval(functionName)(data);\n" +
            "      }\n" +
            "    };\n" +
            "\n" +
            "    return (\n" + 
            "      <div>\n" + 
            ADD_TOOLBAR +
            "        \n" + 
            "        <div id={'add" + ADD_COMPONENT_NAME + "Page' + idPrefix} style={{display:'none'}} className=\"bx--col bx--no-gutter\">\n" + 
            "\n" +
            ADD_TOP_LEVEL_BREAKS +
            ADD_TABS +
            "        </div>\n" + 
            "        </div>\n" + 
            "    );\n" + 
            "}\n" + 
            "\n" + 
            "export default " + PAGENAME_MACRO + "Add;";
    
    /**
     * A grid edit page gets generated to allow existing grid entries to be edited
     */
    public static String GRID_EDIT_PAGE = "import React, { useCallback, useState, lazy, Suspense } from 'react';\n" + 
            "import {\n" + 
            "  Button,\n" + 
            "  TextInput,\n" +
            "  NumberInput,\n" +
            "  Select,\n" + 
            "  SelectItem,\n" + 
            "  Checkbox,\n" + 
            "  DataTable,\n" + 
            "  TableRow,\n" + 
            "  TableHead,\n" + 
            "  TableHeader,\n" + 
            "  TableContainer,\n" + 
            "  TableCell,\n" + 
            "  Table,\n" + 
            "  TableBody,\n" + 
            "  TableToolbar,\n" + 
            "  TableToolbarContent,\n" + 
            "  Icon,\n" +
            "} from 'carbon-components-react';\n" + 
            "\n" + 
            "import {\n" +
            "    iconEdit, iconEditSolid, iconEditOutline,\n" +
            "  } from 'carbon-icons';\n" +
            "\n" +
            "import Collapsible from 'react-collapsible';" +
            "\n" +
            "import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';\n" + 
            "import ReactTooltip from \"react-tooltip\";\n" +
            "\n" + 
            "import { safeLoad, getDivHeight, jsonToYaml, updateStyle, updateStyle2, editProps, validateField, toggleDescription } from '../../helpers';\n" +
            "\n\n" +
            ADD_IMPORTS + 
            "\n\n" +
            "  const handleChange = () => {\n" + 
            "  };\n\n" + 
            "  const handleSave = (loadGrid, idPrefix, objectName, " + EXTRA_PARAMS + " doClose) => {\n" + 
            "\n" +
            "    if(idPrefix === undefined) idPrefix = \"\";\n" +
            "\n" +
            "    var json = {};\n" + 
            "      \n" +
            ADD_GRID_SAVE_CODE + 
            "      \n" + 
            "    loadGrid(" + LOAD_GRID_PARAMS + " true); \n" + 
            "\n" + 
            "    handleClose(idPrefix, objectName, " + EXTRA_PARAMS + " doClose);\n" + 
            "  };\n" + 
            "\n" + 
            "  const handleAdd = (rowId, dataLoad, idPrefix, objectName, " + EXTRA_PARAMS + " loadGrids, data, setData) => {\n" + 
            "\n" + 
            "    var oName = (objectName)?objectName:\"\";\n" +
            "    window[oName + \"editing\"] = true;\n" +
            "    window[oName + \"rowId\"] = rowId;\n\n" +
            "    if(loadGrids) {\n" +
            "      for(var i = 0; i < loadGrids.length; i++) {\n" +
            "        loadGrids[i](objectName, data, setData);\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            "    dataLoad();\n" +
            "\n" + 
            ADD_HANDLE_ADD +
            "  };\n" + 
            "\n" + 
            "  const handleClose = (idPrefix, objectName, " + EXTRA_PARAMS + " doClose) => {\n" + 
            "\n" +
            "    var oName = (objectName)?objectName:\"\";\n" +
            "    delete(window[oName + \"editing\"]);\n" +
            "    delete(window[oName + \"rowId\"]);\n" +
            "\n" +
            ADD_HANDLE_CLOSE + "\n" +
            "\n" +
            "      if(doClose) {\n" +
            "        doClose();\n" +
            "      }\n" +
            "  };\n" + 
            "\n" + 
            "  const closeAdd = (idPrefix) => {\n" + 
            "\n" +
            "      if(idPrefix === undefined) idPrefix = \"\";\n" +
            "\n" +
            "      updateStyle(\"" + ADD_DIV_NAME + "\" + idPrefix, \"display\", \"block\");\n" +
            "      " + ADD_SHOW_TABS + "\n" +
            "  };\n" + 
            "\n" +
            ADDITIONAL_CODE + 
            "\n" +
            ADD_GET_CODE +
            "\n" +
            "const " + PAGENAME_MACRO + "Edit = (props) => {\n" + 
            "\n" + 
            "    var row = props.row;\n" + 
            "    const loadGrid = props.loadGrid;\n" +
            "    const doClose = props.doClose;\n" +
            "    const idPrefix = (props.idPrefix)?props.idPrefix:\"\";\n" +
            "    const parentIdPrefix = (props.parentIdPrefix)?props.parentIdPrefix:\"\";\n" +
            "    const objectName = (props.name)?props.name:\"\";\n" +
            "    const tbName = (props.toolbarName)?props.toolbarName:\"\";\n" +
            "\n" + 
            "    var rowId = (row !== undefined)?row.id:\"\";\n" +
            "\n" +
            ADD_UPDATE_GRID_CODE +
            "\n" +
            ADD_EDIT_STATE_FIELDS + "\n" +
            "\n" +
            ADD_DATALOAD_CODE +
            "\n\n" +
            "    const setDataMain = (functionName, data) => {\n" +
            "      if(functionName && data) {\n" +
            "        eval(functionName)(data);\n" +
            "      }\n" +
            "    };\n" +
            "\n" +
            "  if(props.editing == true) {\n" +
            "    return (\n" +
            "      <Icon {...editProps.editIcon()} onClick={() => {handleAdd(rowId, props.dataLoad, idPrefix, objectName, " + EXTRA_PARAMS + " [getEditData], props.data, props.setData); }} title={\"TODO\"} />" +
            "    );\n" +
            "  } else {\n" +
            "    return (\n" + 
            "      <div>\n" + 
            "        <div id={'edit" + ADD_COMPONENT_NAME + "Page' + idPrefix} style={{display:'none'}} className=\"bx--col bx--no-gutter\">\n" + 
            "\n" +
            ADD_TOOLBAR +
            "\n" +
            ADD_TOP_LEVEL_BREAKS + 
            ADD_TABS +
            "        </div>\n" + 
            "      </div>\n" + 
            "    );\n" + 
            "  }\n" +
            "}\n" + 
            "\n" + 
            "export default " + PAGENAME_MACRO + "Edit;";
    
    /**
     * A grid add page gets generated to allow existing grid entries to be deleted
     */
    public static String GRID_DELETE_PAGE = "import React, { useState } from 'react';\n" + 
            "import ReactDOM from 'react-dom';\n" + 
            "import {\n" + 
            "  TextInput,\n" +
            "  NumberInput,\n" +
            "  ComposedModal,\n" + 
            "  ModalBody,\n" + 
            "  ModalHeader,\n" + 
            "  ModalFooter,\n" + 
            "  Button,\n" + 
            "  Icon\n" + 
            "} from  'carbon-components-react';\n" + 
            "import { \n" + 
            "  iconDelete, iconDeleteSolid, iconDeleteOutline, \n" + 
            "} from 'carbon-icons';\n" + 
            "\n" + 
            "// This defines a modal controlled by a launcher button. We have one per DataTable row.\n" + 
            "const ModalStateManager = ({\n" + 
            "  renderLauncher: LauncherContent,\n" + 
            "  children: ModalContent,\n" + 
            "}) => {\n" + 
            "  const [open, setOpen] = useState(false);\n" + 
            "  return (\n" + 
            "    <>\n" + 
            "      {!ModalContent || typeof document === 'undefined'\n" + 
            "        ? null\n" + 
            "        : ReactDOM.createPortal(\n" + 
            "            <ModalContent  \n" + 
            "              open={open} \n" + 
            "              setOpen={setOpen} \n" + 
            "            />,\n" + 
            "            document.body\n" + 
            "          )\n" + 
            "      }\n" + 
            "      {LauncherContent && \n" + 
            "      <LauncherContent \n" + 
            "        open={open} \n" + 
            "        setOpen={setOpen} \n" + 
            "      />\n" + 
            "      }\n" + 
            "    </>\n" + 
            "  );\n" + 
            "};\n" + 
            "\n" + 
            "// Modal properties\n" + 
            "const deleteProps = {\n" + 
            "  composedModal: ({ titleOnly } = {}) => ({\n" + 
            "    open: true,\n" + 
            "    danger: true,\n" + 
            "    selectorPrimaryFocus: '[data-modal-primary-focus]',\n" + 
            "  }),\n" + 
            "  modalHeader: ({ titleOnly, name } = {}) => ({\n" + 
            "    label: '" + DELETE_LABEL + "',\n" + 
            "    title: 'Delete " + DELETE_NAME + "?',\n" + 
            "    iconDescription: 'Close',\n" + 
            "  }),\n" + 
            "  modalBody: () => ({\n" + 
            "    hasScrollingContent: false,\n" + 
            "    'aria-label': 'Delete " + DELETE_NAME + "?',\n" + 
            "  }),\n" + 
            "  modalFooter: () => ({\n" + 
            "    primaryButtonText: 'Delete',\n" + 
            "    primaryButtonDisabled: false,\n" + 
            "    secondaryButtonText: 'Cancel',\n" + 
            "    shouldCloseAfterSubmit: true,\n" + 
            "    danger: true,\n" + 
            "  }),\n" + 
            "  menuItem: () => ({\n" + 
            "    closeMenu: (event) => { handleSubmit(event); }\n" + 
            "  }),\n" + 
            "  deleteIcon: () => ({\n" + 
            "    style: {\n" + 
            "      margin: '5px',\n" + 
            "    },\n" + 
            "    icon: iconDelete,\n" + 
            "    name: iconDelete,\n" + 
            "    role: 'img',\n" + 
            "    fill: 'grey',\n" + 
            "    fillRule: '',\n" + 
            "    width: '',\n" + 
            "    height: '',\n" + 
            "    description: 'This is a description of the icon and what it does in context',\n" + 
            "    iconTitle: '',\n" + 
            "    className: 'extra-class',\n" + 
            "  }),\n" + 
            "};\n" + 
            "\n" + 
            "// On submit we should be passed the values, not have to look them up\n" + 
            "const handleSubmit = (" + ADD_LOAD_ARGS + " loadGrid, setOpen) => {\n" + 
            " \n" + 
            "  // Refresh data\n" + 
            "  loadGrid(" + ADD_LOAD_ARGS + " false);\n" + 
            "\n" + 
            "  return true;\n" + 
            "}\n" + 
            "\n" + 
            "// The implementation of the Modal\n" + 
            "class " + PAGENAME_MACRO + "DeleteModal extends React.Component {\n" + 
            "\n" + 
            "  constructor(props) {\n" + 
            "    super(props);\n" + 
            "\n" + 
            "    this.state = {\n" + 
            "      row: props.row,\n" + 
            "      loadGrid: props.loadGrid,\n" + 
            ADD_SET_STATE + 
            "      open: false,\n" + 
            "    }\n" + 
            "  }\n" + 
            "\n" + 
            "  render() {\n" + 
            "    // const { open } = this.state.open;\n" + 
            "    const { size, ...rest } = deleteProps.composedModal();\n" + 
            "    const { hasScrollingContent, ...bodyProps } = deleteProps.modalBody();\n" + 
            "\n" + 
            "    return (\n" + 
            "      <ModalStateManager\n" + 
            "        renderLauncher={({ setOpen }) => (\n" + 
            "          <Icon {...deleteProps.deleteIcon()} onClick={() => setOpen(true)} title={this.state.id} />\n" + 
            "        )}>\n" + 
            "        {({ open, setOpen }) => (\n" + 
            "          <ComposedModal\n" + 
            "            {...rest}\n" + 
            "            open={open}\n" + 
            "            row={this.props.row}\n" + 
            "            loadGrid={this.state.loadGrid}\n" + 
            "            size={size || undefined}\n" + 
            "            onClose={() => setOpen(false)}>\n" + 
            "            <ModalHeader {...deleteProps.modalHeader({ titleOnly: true, name: this.state.code + ' ' + this.state.model })} />\n" + 
            "            <ModalBody />\n" + 
            "            <ModalFooter {...deleteProps.modalFooter()} shouldCloseAfterSubmit={true} onRequestSubmit={() => { handleSubmit(" + SUBMIT_STATE_ARGS + " this.state.loadGrid, setOpen); }} />\n" + 
            "          </ComposedModal>\n" + 
            "        )}\n" + 
            "      </ModalStateManager>\n" + 
            "    );\n" + 
            "  }\n" + 
            "\n" + 
            "  \n" + 
            "}\n" + 
            "\n" + 
            "export default " + PAGENAME_MACRO + "DeleteModal;";

    /**
     * An object page contains top level multi level objects. 
     * Eg: name:
     *       name2:
     *         name3:value
     *         name4:value
     */
    public static String OBJECT_PAGE = "import React, { useCallback, useState, lazy, Suspense } from 'react';\n" + 
            "import {\n" + 
            "  Button,\n" + 
            "  TextInput,\n" +
            "  NumberInput,\n" +
            "  Select,\n" + 
            "  SelectItem,\n" + 
            "  Checkbox,\n" + 
            "  DataTable,\n" + 
            "  TableRow,\n" + 
            "  TableHead,\n" + 
            "  TableHeader,\n" + 
            "  TableContainer,\n" + 
            "  TableCell,\n" + 
            "  Table,\n" + 
            "  TableBody,\n" + 
            "  TableToolbar,\n" + 
            "  TableToolbarContent,\n" + 
            "} from 'carbon-components-react';\n" + 
            "\n" + 
            "import Collapsible from 'react-collapsible';" +
            "\n" +
            "import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';\n" + 
            "import ReactTooltip from \"react-tooltip\";\n" +
            "\n\n" +
            "import { safeLoad, getDivHeight, jsonToYaml, updateStyle, updateStyle2, validateField, toggleDescription } from '../../helpers';\n" +
            "\n" +
            ADD_IMPORTS + 
            "\n\n" +
            "const handleChange = () =>{\n" +
            "    var yamlText = window.iagyaml;\n" +
            "\n" +
            "    var json = {};\n" +
            "\n" +
            "    if(yamlText !== null && yamlText !== undefined) {\n" +
            "        json = safeLoad(yamlText);\n" +
            "        if(json === undefined || json === null) {\n" +
            "          json = {};\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            PAGECHANGE_MACRO +
            "\n" +
            "    var yamlop = jsonToYaml(json);\n" +
            "    window.iagyaml = yamlop;\n" +
            "};\n" +
            "\n" +
            "  const closeAdd = (idPrefix) => {\n" +
            "\n" +
            "      if(idPrefix === undefined) idPrefix = \"\";\n" +
            "\n" +
            "      updateStyle(\"" + ADD_DIV_NAME + "\" + idPrefix, \"display\", \"block\");\n" +
            "      " + ADD_SHOW_TABS + "\n" +
            "  };\n" + 
            "\n" +
            ADDITIONAL_CODE +
            "\n\n" +
            "const " + PAGENAME_MACRO + " = () => {\n" + 
            "\n" +
            "  const idPrefix = \"\";\n" +
            "\n" +
            UPDATE_WINDOW_PAGE +
            "\n" +
            ADD_UPDATE_GRID_CODE +
            "\n\n" +
            ADD_FIELD_POPULATE_CODE +
            "\n" +
            UPDATE_WINDOW_PAGE +
            "\n" +
            ADD_DATALOAD_CODE +
            "\n" +
            ADD_LOAD_PAGE_CODE +
            "\n\n" +
            "    const setDataMain = (functionName, data) => {\n" +
            "      if(functionName && data) {\n" +
            "        eval(functionName)(data);\n" +
            "      }\n" +
            "    };\n" +
            "\n" +
            "    return (\n" + 
            "        <div className=\"bx--grid--no-gutter bx--grid--full-width landing-page\">\n" + 
            "          <div className=\"bx--row landing-page__banner\" style={{paddingBottom:\"3rem\"}}>\n" + 
            "            <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "              <h1 className=\"landing-page__heading\">\n" + 
            "                " + HEADING_NAME + "\n" + 
            "              </h1>\n" + 
            "            </div>\n" + 
            "            <div className=\"bx--col-lg-13 bx--offset-lg-1\">\n" + 
            "              <h4 className=\"landing-page__desc\" style={{marginTop:\"30px\"}}>" + PAGE_DESC + "</h4>\n" + 
            "            </div>" +
            "            <div id=\"warning_div\" className=\"bx--col-lg-13\" style={{display:'none', color:'red', position:'absolute', bottom:'0', marginBottom: '10px'}}></div>\n" +
            "          </div>\n" + 
            "          <div className=\"bx--row landing-page__r2\">\n" + 
            "            <div className=\"bx--col bx--no-gutter\">\n" + 
            "              <div id=\"" + ADD_PAGE_NAME + "\" className=\"bx--col\">\n" +
            "                <br/><br/><br/>\n" + 
            "            <Tabs id={\"" + ADD_TAB_ID + "_tab\" + idPrefix} defaultTab={\"" + ADD_DEFAULT_TAB + "_tab\" + idPrefix} vertical className=\"vertical-tabs\" style={{overflow:'auto'}}>\n" + 
            ADD_TAB_LIST + 
            "            </Tabs>\n" + 
            ADD_GRID_UPDATE_HTML +
            "              </div>\n" + 
            "            </div>\n" + 
            "          </div>\n" + 
            "        </div>\n" + 
            "    );\n" + 
            "};\n" + 
            "export default " + PAGENAME_MACRO + ";"; 
    
    /**
     * The helpers file gets generated and contains methods used by all pages.
     */
    public static String HELPERS_FILE = "import {\n" +
            "    iconEdit, iconEditSolid, iconEditOutline,\n" +
            "} from 'carbon-icons';\n" +
            "import yaml from 'js-yaml';\n" +
            "\n" +
            "import { loadComments } from './yamlComments';\n" +
            "\n" +
            "export const editProps = {\n" +
            "  editIcon: () => ({\n" +
            "    style: {\n" +
            "      margin: '5px',\n" +
            "    },\n" +
            "    icon: iconEdit,\n" +
            "    name: iconEdit,\n" +
            "    role: 'img',\n" +
            "    fill: 'grey',\n" +
            "    fillRule: '',\n" +
            "    width: '',\n" +
            "    height: '',\n" +
            "    description: 'This is a description of the icon and what it does in context',\n" +
            "    iconTitle: '',\n" +
            "    className: 'extra-class',\n" +
            "  }),\n" +
            "};\n" +
            "\n" +
            "export function getComments(key) {\n" + 
            "\n" + 
            "    var retVal = \"\";\n" + 
            "\n" + 
            "    var comments = window[\"iag.comments\"];\n" + 
            "\n" + 
            "    if(comments) {\n" + 
            "\n" + 
            "        var keyParts = key.split(\".\");\n" + 
            "\n" + 
            "        var obj = comments;\n" + 
            "        for(var i = 0; i < keyParts.length; i++) {\n" + 
            "\n" + 
            "            if(keyParts[i].endsWith(\"]\") === true) {\n" + 
            "                var partA = keyParts[i].slice(0, keyParts[i].lastIndexOf(\"[\"));\n" + 
            "                var partB = keyParts[i].slice(keyParts[i].lastIndexOf(\"[\") + 1, keyParts[i].length - 1);\n" + 
            "\n" + 
            "                var arrayIndex = parseInt(partB);\n" + 
            "                if(obj && obj[partA] && obj[partA][\"items\"] && obj[partA][\"items\"].length > arrayIndex) {\n" + 
            "                    obj = obj[partA][\"items\"][arrayIndex];\n" + 
            "                }\n" + 
            "            } else {\n" + 
            "                obj = obj[keyParts[i]];\n" + 
            "            }\n" + 
            "\n" + 
            "            if(obj === undefined || obj === null) {\n" + 
            "                break;\n" + 
            "            }\n" + 
            "        }\n" + 
            "\n" + 
            "        if(obj) {\n" + 
            "\n" + 
            "            if(obj && obj[\"comments\"]) {\n" + 
            "                for(var i = 0; i < obj[\"comments\"].length; i++) {\n" + 
            "                    retVal += obj[\"comments\"][i];\n" + 
            "                }\n" + 
            "            }\n" + 
            "        }\n" + 
            "    }\n" + 
            "\n" + 
            "    return retVal;\n" + 
            "};\n" +
            "\n" +
            "export function safeLoad(input) {\n" + 
            "    var retVal;\n" + 
            "    try {\n" + 
            "        retVal = yaml.load(input);\n" + 
            "        var result = loadComments(input, retVal);\n" +
            "        window[\"iag.comments\"] = result[0];\n" +
            "        window[\"iag.order\"] = result[1];\n" +
            "    } catch (err) {\n" + 
            "        // If there is a parsing error, check to see if its a special character\n" + 
            "        // that needs to be put in quotes.\n" + 
            "        var lines = input.split(\"\\n\");\n" + 
            "        var newInput = \"\";\n" + 
            "        for(var i = 0; i < lines.length; i++) {\n" + 
            "            var parts = lines[i].split(\":\", 2);\n" + 
            "            newInput += parts[0];\n" + 
            "            if(parts.length > 1) {\n" + 
            "                var handled = false;\n" + 
            "                if(typeof input === \"string\") {\n" + 
            "                    for(var i2 = 0; i2 < yamlSpecialChars.length; i2++) {\n" + 
            "                        if(parts[1].includes(yamlSpecialChars[i2])) {\n" + 
            "                            newInput += \": \\\"\" + parts[1].trim() + \"\\\"\";\n" + 
            "                            handled = true;\n" + 
            "                            break;\n" + 
            "                        }\n" + 
            "                    }\n" + 
            "                }\n" + 
            "                if(handled === false) {\n" + 
            "                    newInput += \": \" + parts[1].trim();\n" + 
            "                }\n" + 
            "            }\n" + 
            "            newInput += \"\\n\";\n" + 
            "        }\n" + 
            "        try {\n" + 
            "            // Try again\n" + 
            "            retVal = yaml.load(newInput);\n" + 
            "            console.log(\"Quoted invalid YAML characters.\")\n" + 
            "        } catch(err) {\n" + 
            "            console.error(err);\n" + 
            "        }\n" + 
            "    }\n" + 
            "    return retVal;\n" + 
            "}\n" +
            "\n" +
            "export const yamlSpecialChars = ['{', '}', '[', ']', ',', '&', ':', '*', '#', '?', '|', '-', '<', '>', '=', '!', '%', '@', '\\\\'];\n" +
            "\n" +
            "export function escapeYaml(input, indent) {\n" +
            "    if(typeof input === \"string\") {\n" +
            "        if(input.indexOf(\"\\n\") > -1) {\n" + 
            "            if(indent === undefined || indent === null) {\n" + 
            "                indent = \"\";\n" + 
            "            }\n" +
            "            indent = indent + \"  \";\n" +
            "            input = input.replace(/\\n/g, \"\\n\" + indent);\n" + 
            "            input = \"|\\n\" + indent + input;\n" + 
            "            return input;\n" + 
            "        } else {\n" +
            "            for(var i = 0; i < yamlSpecialChars.length; i++) {\n" +
            "                if(input.includes(yamlSpecialChars[i])) {\n" +
            "                    return \"\\\"\" + input.replace(/\\\"/g, \"\\\\\\\"\") + \"\\\"\";\n" +
            "                }\n" +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "    return input;\n" +
            "};\n" +
            "\n" +
            "export function getDivHeight(divId) {\n" +
            "    var mainDiv = document.getElementById(divId);\n" +
            "    if(mainDiv !== undefined && mainDiv !== null) {\n" +
            "      var hide = false;\n" +
            "      if (window.getComputedStyle(mainDiv).display === \"none\") {\n" +
            "        mainDiv.style.display = \"block\";\n" +
            "        hide = true;\n" +
            "      }\n" +
            "      var oh = mainDiv.offsetHeight;\n" +
            "      if(hide === true) {\n" +
            "        mainDiv.style.display = \"none\";\n" +
            "      }\n" +
            "      var mainHeight = (oh - 86);\n" +
            "      return mainHeight;\n" +
            "    }\n" +
            "};\n" +
            "// Toggle the state of a page description\n" +
            "export function toggleDescription(descId, snippetId, buttonId) {\n" + 
            "    var btn = document.getElementById(buttonId);\n" + 
            "    var desc = document.getElementById(descId);\n" + 
            "    var snippet = document.getElementById(snippetId);\n" + 
            "    if (desc.style.display === \"none\") {\n" + 
            "      desc.style.display = \"block\";\n" + 
            "      snippet.style.display = \"none\";\n" + 
            "      btn.innerHTML = \"Hide Full Description\";\n" + 
            "    } else {\n" + 
            "      desc.style.display = \"none\";\n" + 
            "      btn.innerHTML = \"Show Full Description\";\n" + 
            "      snippet.style.display = \"block\";\n" + 
            "    }\n" + 
            "}\n" +
            "\n" +
            "// Update style of all instances of the class\n" +
            "export function updateStyle(className, prop, value) {\n" + 
            "    var x = document.getElementsByClassName(className);\n" + 
            "    var i;\n" + 
            "    for (i = 0; i < x.length; i++) {\n" + 
            "      x[i].style[prop] = value;\n" + 
            "    }\n" + 
            "}\n" +
            "\n" +
            "export function validateField(dataArray, setValid, setInvalidMessage, component, field, newValue){\n" +
            "    setValid(true);\n" +
            "    for(var i = 0; i < dataArray.length; i++) {\n" +
            "        if(dataArray[i].id == newValue) {\n" +
            "            setValid(false);\n" +
            "            setInvalidMessage(\"An element with the specified \" + field + \" already exists in the \" + component + \" array.\");\n" +
            "        }\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            "// Update style of the first instance of the class found in a given div\n" +
            "export function updateStyle2(divId, className, prop, value) {\n" +
            "    if(divId) {\n" +
            "        var div = document.getElementById(divId);\n" +
            "        var x = div.getElementsByClassName(className);\n" + 
            "        if(x.length > 0) {\n" + 
            "            x[0].style[prop] = value;\n" + 
            "        }\n" +
            "    }\n" + 
            "}\n" +
            "\n" +
            "export function jsonToYaml(json) {\n" + 
            "\n" + 
            "    var retVal = \"\";\n" + 
            "\n" +
            "    var compOrder = window[\"iag.order\"];\n" +
            "\n" + 
            JSONTOYAML_BOOLS +
            "\n" +
            "    if(compOrder) {\n" + 
            "        for(var i = 0; i < compOrder.length; i++) {\n" + 
            "            switch(compOrder[i]) {\n" +
            JSONTOYAML_SWITCH +
            "            }\n" +
            "        }\n" +
            "    }\n" +
            "\n" +
            JSONTOYAML_CHECK +
            "\n" + 
            "    updateLinks(json);\n" +
            "\n" +
            "    return retVal;\n" + 
            "}\n" +
            JSONTOYAML_CODE +
            "\n" +
            "export function updateLinks(json) {\n" +
            REMOVE_POPCLASS +
            "    if(json) {\n" + 
            ADD_POPCLASS +
            "    }\n" + 
            "}";

    
    public static String JSONTOYAML_CREATE_BOOL = "    var done" + ADD_NAME + " = false;\n";
    public static String JSONTOYAML_SWITCH_CASE = "                case \"" + ADD_NAME + "\":\n" + 
            "                    retVal += " + ADD_NAME + "JsonToYaml(json);\n" + 
            "                    done" + ADD_NAME + " = true;\n" + 
            "                    break;\n";
    public static String JSONTOYAML_FINAL_CHECK = "    if(done" + ADD_NAME + " === false) retVal += " + ADD_NAME + "JsonToYaml(json);\n";
    
    public static String JSONTOYAML_ADD_COMMENT = "    retVal += getComments(\"" + ADD_NAME + "\");\n";
    
    /**
     * Skeleton for a single components jsonToYaml function.
     */
    public static String JSONTOYAML_CODE_SKELETON = "export function " + ADD_NAME + "JsonToYaml(json) {\n" + 
            "\n" + 
            "    var retVal = \"\";\n" + 
            "\n" + 
            JSONTOYAML_CODE + 
            "\n" + 
            "    return retVal;\n" + 
            "}\n";
    
    /**
     * The component index page contains the template that is used to generated the index.js file for each YAML component.
     */
    public static String COMPONENT_INDEX_PAGE = "import " + PAGENAME_MACRO + " from './" + PAGENAME_MACRO + "';\n" + 
            "export default " + PAGENAME_MACRO + ";";
    
}
