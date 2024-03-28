# Authorization

## Description

The `authorization` node defines the authorization rules.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**list[AuthorizationRules]**](AuthorizationRules.md) | The gateway can apply authorization rules to incoming requests. These rules can be either:   * Defined directly in a policies:authorization entry.   * Defined here in the authorization section and reference by name in a policies:authorization entry.  This entry defines authorization rules which can be referred to by name in a policies/authorization entry.  This entry is an array and can be used to specify multiple rules.  ### Rule Format  Authorization rules are composed of credential attributes and the following operators:  Name | Values ---- | ------ logical operators | and, or, not multi-valued operators | any, all relational operators | &#x3D;, !&#x3D;, matches, &gt;, &gt;&#x3D;, &lt;, &lt;&#x3D;, exists  Parenthesis can be used for controlling the order of evaluation.  Examples:  Rule | Description ---- | ----------- (any groupIds &#x3D; \&quot;administrator\&quot;) | Match when the user is in the administrator group. (all authenticationLevels &gt;&#x3D; \&quot;2\&quot;) | Match when all credential authenticationLevels are at least level 2. (attribute_a matches \&quot;a(?:bc)*\&quot;) | Match when the value of the credential attribute \&quot;attribute_a\&quot; matches the regular expression. (level &gt;&#x3D; \&quot;2\&quot;) and (any groupIds &#x3D; \&quot;forbidden\&quot;) | Match when the credential attribute \&quot;level\&quot; is at least level 2 and the user is in the forbidden group. (not exists attribute_c) | Match when the credential does not have an attribute named \&quot;attribute_c\&quot;. (AZN_CRED_PRINCIPAL_NAME &#x3D; \&quot;user_a\&quot;) | Match when the credential attribute \&quot;AZN_CRED_PRINCIPAL_NAME\&quot; is equal to \&quot;user_a\&quot;.  | [optional] 

[[Back to README]](../README.md)



