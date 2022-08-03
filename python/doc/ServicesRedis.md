# ServicesRedis

## Description

Used to define the global configuration and server collections for  Redis.

Example:
services:
  redis:
    default_collection: redis-a
    key_prefix: iag-test-
    collections:
      - connect_timeout: 20
        cross_domain_support:
          master_authn_server_url: https://mas.ibm.com
          master_session_code_lifetime: 150
        health_check_interval: 200
        idle_timeout: 100
        io_timeout: 300
        matching_host: www.webseal.ibm.com
        max_pooled_connections: 200
        name: test-collection-session
        servers:
        - host: redis-a.ibm.com
          name: redis-a
          password: passw0rd
          username: testuser
          port: 6380
          ssl:
            client_certificate: "@redis-a-client.pem"
            sni: redis-a.ibm.com
            trust_certificates: "@redis-a-ca.pem"
      - connect_timeout: 10
        health_check_interval: 200
        idle_timeout: 100
        io_timeout: 300
        max_pooled_connections: 200
        name: test-collection-ratelimiting
        servers:
        - host: redis-b.ibm.com
          name: redis-b
          password: passw0rd
          username: user
          port: 6380
          ssl:
            trust_certificates: "@redis-b-ca.pem"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key\_prefix** | **str** | The key prefix for all data which is stored on the Redis server.  | [optional] 
**default\_collection** | **str** | The name of the default collection of Redis servers to be used.  | [optional] 
**collections** | [**list[ServicesRedisCollections]**](ServicesRedisCollections.md) | Used to define the configuration for a collection of replicated Redis servers.  | [optional] 

[[Back to README]](../README.md)



