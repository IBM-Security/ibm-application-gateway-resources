export function loadComments(input, json) {

	var retVal = [];
	var comments = [];
	var commentMap = {};

	// First map comments
    var strParts = input.split("\n");
	for(var i = 0; i < strParts.length; i++) {
		var currLine = strParts[i];

		if(currLine.trim().startsWith("#") || currLine.trim().length == 0) {
			comments.push(currLine + "\n");
		} else {
			if(comments.length > 0) {
				commentMap[i] = comments;
			}
			comments = [];
		}
    }

	retVal = mapComments(input, json, commentMap, retVal, 0);

	return retVal;
};

export function mapComments(input, json, commentMap, respMap, startIndex) {

	var index = 0;

	var compOrder = [];

	// Loop through all of the keys in the json hashmap
	for (var key in json) {
	    // Check if the property/key is defined in the object itself, not in parent
	    if (json.hasOwnProperty(key)) {
			if(respMap[key] === undefined || respMap[key] === null) {
				respMap[key] = {};
			}

			compOrder.push(key);

			// For each key need to find where it exists in the YAML text
			var yamlIndex = -1;
	        var strParts = input.split("\n");
			for(index = startIndex; index < strParts.length; index++) {
				var currLine = strParts[index].trim();
				var keyIndex = currLine.indexOf(key + ":");

				// Its been trimmed so the index should be 0 if it exists
				if(keyIndex == 0) {
					// Check to see if a comment exists for the current YAML index
					if(commentMap[index]) {
						// These is a comment so add it to the comment object 
						respMap[key]["comments"] = commentMap[index];
					}

					// It exists so set Yaml index
					yamlIndex = index;
					break;
				}
			}

			// If this key exists and is a hash then recursively check
			if(yamlIndex > -1) {
				var type = (typeof json[key]);
				if(type === "object") {
					// Arrays are not supported
					if((json[key] instanceof Array) !== true) {
						// Call back in with the child json
						respMap[key] = mapComments(input, json[key], commentMap, respMap[key], yamlIndex)[0];
					}
				}
			}
	    }
	}

	return [respMap, compOrder];
}
