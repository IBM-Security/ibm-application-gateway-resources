/**
 * Copyright contributors to the Application Gateway project.
 */
package com.ibm.iag.ui;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;

/**
 * This is the main class for generating a React UI from open api files.
 * It will parse the open api files and for each component generate the UI files.
 */
public class GenerateReactUI 
{
    public static String HEADER_FILE = "components/IAGHeader/IAGHeader.js";
    public static String APP_FILE = "App.js";
    public static String CUSTOM_VALIDATION_FILE = "/public/yaml_linter/worker-yaml.js";
    public static String LANDING_PAGE_FILE = "/src/content/landingPage/landingPage.js";
    public static String INDEX_HTML_FILE = "/public/index.html";
    public static String MANIFEST_FILE = "/public/manifest.json";
    public static String PACKAGE_FILE = "/package.json";


    private static List<String> ROUTES = new ArrayList<String>();
    private static List<String> IMPORTS = new ArrayList<String>();
    private static List<String> LINKS = new ArrayList<String>();
    private static List<String> LINKNAMES = new ArrayList<String>();
    private static List<String> JSONTOYAML = new ArrayList<String>();
    private static Map<String, String> PAGES = new HashMap<String, String>();
    private static List<ValidationEntry> VALIDATIONS = new ArrayList<ValidationEntry>();
    private static StringBuffer VALIDATION_SCHEMA = new StringBuffer();
    
    private static String _applicationName = "";
    private static String _openApiDir = "";
    private static String _outputDir = "";
    private static String _templateDir = "";
    
    private static void printUsage()
    {
        System.out.println("");
        System.out.println("java com.ibm.iag.ui.GenerateReactUI appName:<appName> openApiDir:<openApiDir> reactTemplateDir:<reactTemplateDir> outputDir:<outputDir>");
        System.out.println("");
        System.out.println("appName is the name of the react application to be generated.");
        System.out.println("openApiDir is the directory that contains the open API documents to parse.");
        System.out.println("reactTemplateDir is the directory that contains the skeleton code for the React UI.");
        System.out.println("outputDir is the directory where the generated UI code will be written. This must be an empty directory.");
    }
    
    public static void main(String[] args) 
    {
        if(args.length < 1)
        {
            System.err.println("Incorrect usage!");
            
            printUsage();
            System.exit(1);
        }
        
        parseArgs(args);
        
        try
        {
            File file = new File(_openApiDir + "/openapi.yaml");
            
            if(!file.exists())
            {
                System.err.println("Error: openapi.yaml file does not exist!");
                
                printUsage();
                System.exit(1);
            }
    
            // Instantiating a new ObjectMapper as a YAMLFactory
            YAMLFactory yFact = new YAMLFactory();
            ObjectMapper om = new ObjectMapper(yFact);
            om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            
            // Mapping the employee from the YAML file to the Employee class
            Openapi components = om.readValue(file, Openapi.class);
            
            Map<String, Map<String, Component>> parts = components.getComponents();
            
            // Need to handle all of the references also
            for(String key: parts.keySet())
            {
                if(key.equals("schemas"))
                {
                    Map<String, Component> schemas = parts.get(key);
                    
                    for(String skey: schemas.keySet())
                    {
                        Component currComp = schemas.get(skey);
                        
                        // First handle the direct references
                        handleReference(om, currComp);
                            
                        // Next handle the items references
                        Component itemsComp = currComp.getItems();
                        if(itemsComp != null)
                        {
                            handleReference(om, itemsComp);
                        }
                        
                        // Finally handle the properties references
                        Map<String, Component> props = currComp.getProperties();
                        if(props != null)
                        {
                            for(String key2: props.keySet())
                            {
                                Component currComp2 = props.get(key2);
                                
                                // First handle the direct references
                                handleReference(om, currComp2);
                                
                                // Next handle the items references
                                Component itemsComp2 = currComp2.getItems();
                                if(itemsComp2 != null)
                                {
                                    handleReference(om, itemsComp2);
                                }
                            }
                        }
                    }
                }
            }
            
            // Update the parsed objects with any additional info required in the generation
            updateComponents(components);

            // generate the UI code
            generateUI(components);
        }
        catch(Exception e)
        {
            System.err.println("Error: An error was encountered while attempting to parse the open API files and generated the UI code : " + e.toString());
            e.printStackTrace();
            System.exit(1);
        }
    }
    
    /**
     * Method parses the command arguments.
     * 
     * @param args
     */
    private static void parseArgs(String[] args)
    {
        for(String arg: args)
        {
            String[] argSplit = arg.split(":", 2);
            
            if(argSplit.length == 2)
            {
                switch(argSplit[0])
                {
                    case "appName":
                        _applicationName = argSplit[1].trim();
                        break;
                    case "openApiDir":
                        _openApiDir = argSplit[1].trim();
                        break;
                        
                    case "outputDir":
                        _outputDir = argSplit[1].trim();
                        
                        File oDir = new File(_outputDir);
                        if(!oDir.exists() || !oDir.isDirectory())
                        {
                            System.err.println("Error: The output directory is not valid!");
                            
                            printUsage();
                            System.exit(1);
                        }
                        
                        Path path = Paths.get(_outputDir);
                        try (DirectoryStream<Path> directory = Files.newDirectoryStream(path)) 
                        {
                            if(directory.iterator().hasNext())
                            {
                                System.err.println("Error: The output directory is not empty!");
                                
                                printUsage();
                                System.exit(1);
                            }
                        }
                        catch(Exception e)
                        {
                            System.err.println("Error: The output directory could not be read : " + e.toString());
                            
                            printUsage();
                            System.exit(1);
                        }
                        
                        break;
                        
                    case "reactTemplateDir":
                        
                        _templateDir = argSplit[1].trim();
                        
                        File tDir = new File(_templateDir);
                        if(!tDir.exists() || !tDir.isDirectory())
                        {
                            System.err.println("Error: The react template directory is not valid!");
                            
                            printUsage();
                            System.exit(1);
                        }
                        
                        break;
                }
            }
        }
        
        // Check the required fields have been set
        checkStringExists(_applicationName, "The application name is not set");
        checkStringExists(_openApiDir, "The Open API directory is not set");
        checkStringExists(_outputDir, "The output directory is not set");
        checkStringExists(_templateDir, "The react template directory is not set");
        
        // Copy the template UI to the output directory
        try
        {
            copyDirectory(new File(_templateDir), new File(_outputDir));
        }
        catch(IOException e)
        {
            System.err.println("Error: An error was encountered while attempting to copy the template files to the output directory : " + e.toString());
            
            printUsage();
            System.exit(1);
        }
        
        // Make sure the landing page exists
        checkFileExists(_outputDir + CUSTOM_VALIDATION_FILE, "The react custom ACE validation file does not exist");
        
        // Make sure the react app.js file exists
        checkFileExists(_outputDir + "/src/" + APP_FILE, "The react application file does not exist");
        
        // Make sure the react header file exists
        checkFileExists(_outputDir + "/src/" + HEADER_FILE, "The react header file does not exist");
    }
    
    /**
     * Method loops through all of the YAML schema components and sets any additional fields 
     * required by the generator. Eg: jsonPath.
     * 
     * @param components
     */
    private static void updateComponents(Openapi components)
    {
        Map<String, Map<String, Component>> parts = components.getComponents();
        
        // Need to handle all of the references also
        for(String key: parts.keySet())
        {
            if(key.equals("schemas"))
            {
                Map<String, Component> schemas = parts.get(key);
                
                for(String skey: schemas.keySet())
                {
                    Component currComp = schemas.get(skey);

                    // Recursively set the full path for each component
                    currComp.updatePath("", "", skey, "", currComp.getXName());
                }
            }
        }
    }
    
    /**
     * Method handles any open api file references.
     * 
     * @param om
     * @param comp
     * @return
     * @throws Exception
     */
    private static RefComponent handleReference(ObjectMapper om, Component comp) throws Exception
    {
        RefComponent component = null;
        
        String ref = comp.get$ref();
        
        if(ref != null && !ref.trim().isEmpty())
        {
            String[] refParts = ref.split("#", 2);
            String fileName = _openApiDir + "/" + refParts[0];
            
            File file = new File(fileName);
            
            if(!file.exists())
            {
                System.err.println("Error: A referenced open API file does not exist : " + fileName);
                System.exit(1);
            }
            
            // Convert the YAML file into a RefComponent object
            component = om.readValue(file, RefComponent.class);
            
            // Replace the original component file reference with the new component object.
            if(component != null && refParts.length == 2)
            {
                Map<String, Component> refs = component.getComponents();
                
                for(String key: refs.keySet())
                {
                    if(key.equals(refParts[1]) || key.equals(refParts[1].substring(1)))
                    {
                        Component currComp = refs.get(key);
                        comp.copy(currComp);
                    }
                }
            }
        }
        
        return component;
    }
    
    /**
     * Method loops through all of the top level components and generates React UI code for each.
     * 
     * @param components
     * @throws Exception
     */
    private static void generateUI(Openapi components) throws Exception
    {
        // Get all of the top level components. This should just be a single schemas component
        Map<String, Map<String, Component>> topComps = components.getComponents();
        
        List<String> compNames = new ArrayList<String>();
        
        // Need to handle all of the references also
        for(String key: topComps.keySet())
        {
            // Just looking for the schemas which is the container for the real components.
            if(key.equals("schemas"))
            {
                Map<String, Component> schemas = topComps.get(key);
                
                // Loop through each real component and generate the UI code.
                for(String skey: schemas.keySet())
                {
                    // These are the UI components/tabs
                    // Eg: Advanced, Servers, Resource Servers, etc
                    
                    Component currComp = schemas.get(skey);
                    
                    // Generate the code for this component
                    currComp.generateUI(skey);
                    
                    compNames.add(skey);
                    
                    // Add the generated common code to the relevant lists/maps
                    ROUTES.addAll(currComp.getRoutes());
                    IMPORTS.addAll(currComp.getImports());
                    LINKS.addAll(currComp.getLinks());
                    LINKNAMES.addAll(currComp.getLinkNames());
                    JSONTOYAML.addAll(currComp.getJsonToYaml());
                    VALIDATIONS.addAll(currComp.getValidations());
                    VALIDATION_SCHEMA.append(currComp.getValidationSchema(skey, "    "));
                    
                    // Add the required pages to create
                    PAGES.putAll(currComp.getPagesMap());
                }
            }
        }
        
        // Update the YAML editor validation
        updateYamlValidation();
        
        // Update the global routes and menu links
        updateRoutes();
        updateHeaderMenu();
        createHelper(compNames);
        updateApplicationName(_outputDir + INDEX_HTML_FILE);
        updateApplicationName(_outputDir + MANIFEST_FILE);
        updateApplicationName(_outputDir + PACKAGE_FILE);
        createPages();
    }

    /**
     * Method loops through all of the required pages and creates the files for each.
     * @throws Exception
     */
    private static void createPages() throws Exception
    {
        for(String fileName: PAGES.keySet())
        {
            String data = PAGES.get(fileName);
            
            String realFileName = _outputDir + "/src/" + fileName;
            
            // Create the directory
            int lastIndex = realFileName.lastIndexOf("/");
            String contentDir = realFileName.substring(0, lastIndex);
            String fileShort = realFileName.substring(lastIndex + 1);
            String[] parts = fileShort.split(".js");
            
            Path path = Paths.get(contentDir);
            Files.createDirectories(path);
            
            // Create the page
            updateFile(realFileName, data);
            
            // Create the index.js file but only for the actual Page
            if(parts[0].endsWith("Page"))
            {
                // Create the index
                String indexContent = Constants.COMPONENT_INDEX_PAGE.replaceAll(Constants.PAGENAME_MACRO, parts[0]);
                
                realFileName = contentDir + "/index.js";
                updateFile(realFileName, indexContent);
            }
        }
    }
    
    /**
     * Method updates the validation code for the Ace Editor in the Custom validator extension.
     * 
     * @throws Exception
     */
    private static void updateYamlValidation() throws Exception
    {
        String fileName = _outputDir + CUSTOM_VALIDATION_FILE;
        File file = new File(fileName);
        if(file.exists())
        {
            // First create the validation code
            StringBuffer validateStr = new StringBuffer();
            for(int index = 0; index < VALIDATIONS.size(); index++)
            {
                ValidationEntry validateEntry = VALIDATIONS.get(index);
                
                StringBuffer validVals = new StringBuffer();
                validVals.append("[");
                boolean first = true;
                if(validateEntry.getValues() != null)
                {
                    for(String value: validateEntry.getValues())
                    {
                        if(!first)
                        {
                            validVals.append(",");
                        }

                        first = false;
                        if("string".equalsIgnoreCase(validateEntry.getType()) || "stringarray".equalsIgnoreCase(validateEntry.getType()))
                        {
                            validVals.append("\"" + value + "\"");
                        }
                        else
                        {
                            validVals.append(value);
                        }
                    }
                }
                validVals.append("]");
                
                validateStr.append("          validateEntry(op, \"" + validateEntry.getPath() + "\", \"" + 
                        validateEntry.getType() + "\", editorText, " + validVals.toString() + ", " +
                        validateEntry.getMin() + ", " + validateEntry.isMinSet() + ", " + 
                        validateEntry.getMax() + ", " + validateEntry.isMaxSet() + ", annots);\n");
            }
            
            // Now replace the MACRO in the template file with the validation code
            List<String> content = readFile(file);
            
            content = replaceMacro(content, Constants.ADD_VALIDATE_HERE, validateStr.toString());
            
            // Replace the schema macro while here
            content = replaceMacro(content, Constants.ADD_SCHEMA_HERE, VALIDATION_SCHEMA.toString());

            StringBuffer contents = new StringBuffer();
            for(String line: content)
            {
                contents.append(line);
                contents.append("\n");
            }

            // Update the template file with the new contents
            updateFile(fileName, contents.toString());
        }
        else
        {
            // Should never happen as we already validate this
            System.err.println("Error: The react custom validation file does not exist : " + fileName);
            System.exit(1);
        }
    }
    
    /**
     * Method updates the Landing Page macros.
     * 
     * @throws Exception
     */
    private static void updateApplicationName(String fileName) throws Exception
    {
        File file = new File(fileName);
        if(file.exists())
        {
            // Now replace the MACROs in the template file with the code
            List<String> content = readFile(file);
            
            content = replaceMacro(content, Constants.APPLICATION_NAME, _applicationName);

            StringBuffer contents = new StringBuffer();
            for(String line: content)
            {
                contents.append(line);
                contents.append("\n");
            }

            // Update the template file with the new contents
            updateFile(fileName, contents.toString());
        }
        else
        {
            // Should never happen as we already validate this
            System.err.println("Error: The file does not exist : " + fileName);
            System.exit(1);
        }
    }
    
    /**
     * Method updates the Landing Page macros.
     * 
     * @throws Exception
     */
    private static void updateLandingPage(String addClassCode, String removeClassCode) throws Exception
    {
        String fileName = _outputDir + LANDING_PAGE_FILE;
        File file = new File(fileName);
        if(file.exists())
        {
            // Now replace the MACROs in the template file with the code
            List<String> content = readFile(file);
            
            content = replaceMacro(content, Constants.ADD_POPCLASS, addClassCode);
            content = replaceMacro(content, Constants.REMOVE_POPCLASS, removeClassCode);
            
            // Add the application name while here
            content = replaceMacro(content, Constants.APPLICATION_NAME, _applicationName);

            StringBuffer contents = new StringBuffer();
            for(String line: content)
            {
                contents.append(line);
                contents.append("\n");
            }

            // Update the template file with the new contents
            updateFile(fileName, contents.toString());
        }
        else
        {
            // Should never happen as we already validate this
            System.err.println("Error: The react landing page file does not exist : " + fileName);
            System.exit(1);
        }
    }

    /**
     * Method updates the helpers javascript file with the generated JSON to YAML code.
     * 
     * @throws Exception
     */
    private static void createHelper(List<String> compNames) throws Exception
    {
        String fileName = _outputDir + "/src/helpers.js";
        
        // Update the jsonToYaml macro
        StringBuffer helperStr = new StringBuffer();
        for(String jsonToYaml: JSONTOYAML)
        {
            helperStr.append(jsonToYaml);
            helperStr.append("\n");
        }

        // Update the component jsonToYaml
        StringBuffer jsonToYamlBools = new StringBuffer();
        StringBuffer jsonToYamlSwitch = new StringBuffer();
        StringBuffer jsonToYamlCheck = new StringBuffer();
        for(String name: compNames)
        {
            jsonToYamlBools.append(Constants.JSONTOYAML_CREATE_BOOL.replaceAll(Constants.ADD_NAME, name));
            jsonToYamlSwitch.append(Constants.JSONTOYAML_SWITCH_CASE.replaceAll(Constants.ADD_NAME, name));
            jsonToYamlCheck.append(Constants.JSONTOYAML_FINAL_CHECK.replaceAll(Constants.ADD_NAME, name));
        }
        
        // Update the add/remove populatedLink className macros
        StringBuffer removeLinks = new StringBuffer();
        StringBuffer addLinks = new StringBuffer();
        for(String linkName: LINKNAMES)
        {
            removeLinks.append(Constants.REMOVE_LINK_TEMPLATE.replaceAll(Constants.LINKNAME, linkName));
            addLinks.append(Constants.ADD_LINK_TEMPLATE.replaceAll(Constants.LINKNAME, linkName));
        }
        
        String helpContent = Constants.HELPERS_FILE.replaceAll(Constants.JSONTOYAML_CODE, helperStr.toString())
                .replaceAll(Constants.REMOVE_POPCLASS, removeLinks.toString())
                .replaceAll(Constants.ADD_POPCLASS, addLinks.toString())
                .replaceAll(Constants.JSONTOYAML_BOOLS, jsonToYamlBools.toString())
                .replaceAll(Constants.JSONTOYAML_SWITCH, jsonToYamlSwitch.toString())
                .replaceAll(Constants.JSONTOYAML_CHECK, jsonToYamlCheck.toString());
        
        updateFile(fileName, helpContent);
        
        // Update the same function in the landing page
        updateLandingPage(addLinks.toString(), removeLinks.toString());
    }
    
    /**
     * Method updates the react App.js file with the new imports and routes for the 
     * generated code.
     * 
     * @throws Exception
     */
    private static void updateRoutes() throws Exception
    {
        String fileName = _outputDir + "/src/" + APP_FILE;
        File file = new File(fileName);
        if(file.exists())
        {
            // First create the route string
            StringBuffer routeStr = new StringBuffer();
            for(int index = 0; index < ROUTES.size(); index++)
            {
                String route = ROUTES.get(index);
                
                if(index > 0)
                {
                    routeStr.append("            ");
                }
                routeStr.append(route);
                routeStr.append("\n");
            }
            
            // Next replace the routes macro with the new string
            List<String> content = readFile(file);
            
            content = replaceMacro(content, Constants.ROUTES_MACRO, routeStr.toString());

            // Handle the imports while we are here
            // Create the imprt string
            StringBuffer impStr = new StringBuffer();
            for(String imp: IMPORTS)
            {
                impStr.append(imp);
                impStr.append("\n");
            }
            
            // Replace the import macro with the new string
            content = replaceMacro(content, Constants.IMPORT_MACRO, impStr.toString());
            
            StringBuffer contents = new StringBuffer();
            for(String line: content)
            {
                contents.append(line);
                contents.append("\n");
            }

            // Update the file
            updateFile(fileName, contents.toString());
        }
        else
        {
            // Should never happen
            System.err.println("Error: The react application file does not exist : " + fileName);
            System.exit(1);
        }

    }
    
    /**
     * Method updates the existing react header file with the new menu links that
     * have been generated by the generateUI call.
     * @throws Exception
     */
    private static void updateHeaderMenu() throws Exception 
    {
        String fileName = _outputDir + "/src/" + HEADER_FILE;
        File file = new File(fileName);
        if(file.exists())
        {
            List<String> content = readFile(file);
            
            StringBuffer linkStr = new StringBuffer();
            for(int index = 0; index < LINKS.size(); index++)
            {
                String link = LINKS.get(index);
                
                if(index > 0)
                {
                    linkStr.append("                ");
                }
                linkStr.append(link);
                linkStr.append("\n");
            }
            content = replaceMacro(content, Constants.LINKS_MACRO, linkStr.toString());
            content = replaceMacro(content, Constants.APPLICATION_NAME, _applicationName);
            
            StringBuffer contents = new StringBuffer();
            
            for(String line: content)
            {
                contents.append(line);
                contents.append("\n");
            }
            
            updateFile(fileName, contents.toString());
        }
        else
        {
            // Should never happen
            System.err.println("Error: The react header file does not exist : " + fileName);
            System.exit(1);
        }
    }
    
    
    // ------------------------ HELPER METHODS -------------------------------
    
    /**
     * Method replaces the contents of a file with the specified new contents.
     * 
     * @param fileName The name of the file to update
     * @param contents The new file contents
     * @throws Exception
     */
    private static void updateFile(String fileName, String contents) throws Exception
    {
        File file = new File(fileName);
            
        FileWriter fw = new FileWriter(file);
        PrintWriter out = new PrintWriter(fw);
        
        out.println(contents);
        out.flush();
        out.close();
    }
    
    /**
     * Method searches for and replaces all the occurences on a given MACRO in a List of strings
     * with the specified replacement string.
     * 
     * @param content The input list of strings
     * @param macro The macro to replace
     * @param newStr The replacement string
     * @return
     */
    private static List<String> replaceMacro(List<String> content, String macro, String newStr)
    {
        List<String> retVal = new ArrayList<String>();
        
        for(String line: content)
        {
            if(line.indexOf(macro) > -1)
            {
                line = line.replaceAll(macro,  newStr);
            }
            
            retVal.add(line);
        }
        
        return retVal;
    }
    
    /**
     * Method reads a file and returns all of the lines in the file as a List.
     * 
     * @param file
     * @return List<String>
     * @throws Exception
     */
    private static List<String> readFile(File file) throws Exception
    {
        List<String> retVal = new ArrayList<String>();
        BufferedReader buffReader = null;
   
        try
        {
            FileReader fileReader = new FileReader(file);
            buffReader = new BufferedReader(fileReader);
            String line = "";
            
            while((line = buffReader.readLine()) != null)
            {
                retVal.add(line);
            }
        }
        finally
        {
            if(buffReader != null)
            {
                buffReader.close();
            }
        }
        
        return retVal;
    }
     
    /**
     * Method recursively copies a directory to another.
     * 
     * @param source
     * @param destination
     * @throws IOException
     */
    public static void copyDirectory(File source, File destination) throws IOException 
    {
        // If its a file then just copy it
        if(source.isFile())
        {
            copyFile(source, destination);
        }
        else
        {
            // Create the new dest directory if not exists
            if (!destination.exists()) 
            {
                destination.mkdir();
            }
            
            // For each file in the source directory recursively copy it.
            for(String file: source.list())
            {
                copyDirectory(new File(source, file), new File(destination, file));
            }
        }
        
    }
    
    /**
     * Method copies one file to a new location
     * 
     * @param sourceFile
     * @param destinationFile
     * @throws IOException
     */
    private static void copyFile(File sourceFile, File destFile) throws IOException 
    {
        BufferedWriter buffWriter = null;
        BufferedReader buffReader = null;
        
        try
        {
            FileWriter fileWriter = new FileWriter(destFile);
            buffWriter = new BufferedWriter(fileWriter);
            
            FileReader fileReader = new FileReader(sourceFile);
            buffReader = new BufferedReader(fileReader);
            String line = "";
            
            while((line = buffReader.readLine()) != null)
            {
                buffWriter.write(line + "\n");
            }
        }
        catch(Exception e)
        {
            System.err.println("Error: Could not copy the template file to the output directory : " + sourceFile.getName() + " : " + e.toString());
            System.exit(1);
        }
        finally
        {
            if(buffReader != null)
            {
                buffReader.close();
            }
            
            if(buffWriter != null)
            {
                buffWriter.close();
            }
        }
    }

    
    /**
     * Method ensures that a given string is not empty.
     * 
     * @param input
     * @param error
     */
    private static void checkStringExists(String input, String error)
    {
        if(input.trim().isEmpty())
        {
            System.err.println("Error: " + error + "!");
            
            printUsage();
            System.exit(1);
        }
    }
    
    /**
     * Method ensures that a given file exists.
     * 
     * @param fileName
     * @param error
     */
    private static void checkFileExists(String fileName, String error)
    {
        File file = new File(fileName);
        if(!file.exists())
        {
            System.err.println("Error: " + error + " : " + fileName);
            
            printUsage();
            System.exit(1);
        }
    }
}
