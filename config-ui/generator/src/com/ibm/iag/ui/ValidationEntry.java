/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.List;

/**
 * This class is a container for the generated validation code.
 * It contains the required values for the validation of a single entry.
 */
public class ValidationEntry 
{
    private String _path;
    private String _type;
    private List<String> _values;
    private int _min;
    private boolean _minSet = false;
    private int _max;
    private boolean _maxSet = false;
    
    
    ValidationEntry(String path, String type, List<String> values, int min, boolean minSet, int max, boolean maxSet)
    {
        _path = path;
        _type = type;
        _values = values;
        _min = min;
        _minSet = minSet;
        _max = max;
        _maxSet = maxSet;
    }
    
    public String getPath()
    {
        return _path;
    }
    
    public String getType()
    {
        return _type;
    }
    
    public List<String> getValues()
    {
        return _values;
    }
    
    public int getMin()
    {
        return _min;
    }
    
    public boolean isMinSet()
    {
        return _minSet;
    }
    
    public int getMax()
    {
        return _max;
    }
    
    public boolean isMaxSet()
    {
        return _maxSet;
    }
}
