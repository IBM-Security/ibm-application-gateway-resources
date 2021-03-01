/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.Collection;

/**
 * This class represents a simplistic view of a component. It has some fields set 
 * that are needed by the UI generation.
 */
public class SimpleComponent 
{
    private String _jsonPath = "";
    private Collection<String> _shortIdFields;
    private Collection<String> _requiredFields;
    private Collection<String> _requiredOneOfFields;
    private String _name = "";
    private boolean _isSimpleGrid = false;
    private String _type = "";
    private String _default = "";
    private boolean _isIdField = false;
    private String _shortName = "";
    private String _rowDataName = "";
    private String _rowDataArrayName = "";
    
    SimpleComponent(String jsonPath, Collection<String> shortIdFields, Collection<String> requiredFields, Collection<String> requiredOneOfFields, String name, boolean isSimpleGrid, String type, String defaultVal, 
            boolean isIdField, String shortName, String rowDataName, String rowDataArrayName)
    {
        _jsonPath = jsonPath;
        _shortIdFields = shortIdFields;
        _requiredFields = requiredFields;
        _requiredOneOfFields = requiredOneOfFields;
        _name = name;
        _isSimpleGrid = isSimpleGrid;
        _type = type;
        _default = defaultVal;
        _isIdField = isIdField;
        _shortName = shortName;
        _rowDataName = rowDataName;
        _rowDataArrayName = rowDataArrayName;
    }
    
    public String getJsonPath()
    {
        return _jsonPath;
    }
    
    public Collection<String> getShortIdFields()
    {
        return _shortIdFields;
    }
    
    public Collection<String> getRequiredFields()
    {
        return _requiredFields;
    }
    
    public Collection<String> getRequiredOneOfFields()
    {
        return _requiredOneOfFields;
    }
    
    public String getName()
    {
        return _name;
    }
    
    public boolean isSimpleGrid()
    {
        return _isSimpleGrid;
    }
    
    public String getType()
    {
        return _type;
    }
    
    public String getDefault()
    {
        return _default;
    }
    
    public boolean isIdField()
    {
        return _isIdField;
    }
    
    public String getShortName()
    {
        return _shortName;
    }
    
    public String getRowDataName()
    {
        return _rowDataName;
    }
    
    public String getRowDataArrayName()
    {
        return _rowDataArrayName;
    }
}
