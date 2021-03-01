/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonAnySetter;

/**
 * This class represents a YAML open api component that has been referenced in the open api file
 * rather than included directly.
 * 
 * Eg: $ref: "resource_server.yaml#/resource_server"
 */
public class RefComponent {

    // Without a default constructor, Jackson will throw an exception
    public RefComponent() {}

    private Map<String, Component> components;

    // Getters and setters

    @Override
    public String toString() {
        return "\nComponents: " + components + "\n";
    }

    @JsonAnySetter
    public void setMap(String key, Component value) 
    {
        if(components == null)
        {
            components = new HashMap<String, Component>();
        }
        components.put(key, value);
    }
    
    public Map<String, Component> getComponents() 
    {
        return this.components;
    }
}
