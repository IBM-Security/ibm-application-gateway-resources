/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.Map;

/**
 * This is the top level object that gets created when the jackson YAML parser 
 * parses the open api yaml file.
 * It will consist of one or more name --> Component mappings.
 * Example:
 * 
 * openapi: '3.0'
 * info:
 *   version: 20.12
 *   title: IBM Application Gateway Configuration Specification (OpenAPI)
 *
 * components:
 *   schemas:
 *     version:
 *       type: string
 *       
 * because we only have a setter for the top level components this will result 
 * in a single mapping:
 *     "schemas" --> Schema component.  
 */
public class Openapi {

    // Without a default constructor, Jackson will throw an exception
    public Openapi() {}

    private Map<String, Map<String, Component>> components;

    // Getters and setters

    @Override
    public String toString() 
    {
        return "\nComponents: " + components + "\n";
    }

    public Map<String, Map<String, Component>> getComponents() 
    {
        return components;
    }

    public void setComponents(Map<String, Map<String, Component>> components) 
    {
        this.components = components;
    }
}
