# ServerFailover

## Description

Specifies the configuration related to failover support for the IBM Application Gateway. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key which is used to protect the failover JWE cookie. This key should be 512 bits in length. If the key is greater than this size it will be truncated, and if it is less than this size it will be right-padded with 0&#39;s. An example openssl command to create this key is: &#39;openssl rand -out oct-512-bit.bin 64&#39;  | [optional] 
**cookie\_name** | **str** | The name of the cookie which will be used to store the failover JWE.  | [optional] 
**domain\_cookie** | **bool** | A boolean flag indicating whether or not the failover cookie should include a domain. By including a domain the failover cookie will be sent to any server within the same DNS domain. For example, a failover cookie which is generated by server\_a.ibm.com will also be sent to server\_b.ibm.com. The name of the domain which is used in the failover cookie is derived from the Host header in the HTTP request.  | [optional] [default to False]

[[Back to README]](../README.md)


