# Introduction
The UI generator will take an input Open API schema file(s) and generate a static HTML application for aiding a user in the creation of the YAML configuration represented by the Open API schema.

# Build

## Generator
The first step in generating the application is to build the generator Java application which in turn can be used to generate a react JavaScript application from an OpenAPI specification.

The 'generator' Java application can be compiled using Apache [maven](https://maven.apache.org/).  Once you have installed maven simply execute the following command:

```
mvn package
```

This comand will create the iag-config-generator-1.0.jar jar file in the 'target' sub-directory.

## React Application

The second step is to generate the react application template using the iag-config-generator-1.0.jar jar file.  The command usage is as follows:

```
java -jar iag-config-generator-1.0.jar \
     appName:<appName> \
     openApiDir:<openApiDir> \
     reactTemplateDir:<reactTemplateDir> \
     outputDir:<outputDir>
```

Where:

1. appName is the name of the react application to be generated.
2. openApiDir is the directory that contains the open API documents to parse.
3. reactTemplateDir is the directory that contains the skeleton code for the React UI.
4. outputDir is the directory where the generated UI code will be written. This must be an empty directory.

## Static Pages
In order to generate the static pages the 'yarn' command should be executed from the directory which contains the React application template, as per:

```
yarn install
yarn build
```

Alternatively, if you want to start and access the React application directly:

```
yarn install
yarn start
```
