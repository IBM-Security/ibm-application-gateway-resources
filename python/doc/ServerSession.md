# ServerSession

## Description

Specifies the configuration for client sessions.

Example:
server:
  session:
    cookie_name: sess_cookie
    max_sessions: 20
    timeout: 600
    inactive_timeout: 100
    redis:
      key_prefix: "iag-"
      default_collection: test-collection
      client_list_cache_lifetime: 10

      concurrent_sessions:
        enabled: true
        prompt_for_displacement: true
        max_user_sessions: 15
        user_identity_attribute_name: AZN_CRED_PRINCIPAL_NAME

      collections:
        - name: "test-collection"
          matching_host: "www.webseal.ibm.com"
          max_pooled_connections: 50
          idle_timeout: 10
          connect_timeout: 2
          io_timeout: 30
          health_check_interval: 15
          cross_domain_support:
            master_authn_server_url: "https://mas.ibm.com"
            master_session_code_lifetime: 30
          servers:
            - name: "redis-a"
              host: "redis-a.ibm.com"
              port: 6379
              username: "testuser"
              password: "passw0rd"
              ssl:
                trust_certificates:
                  - "@redis-ca.crt"
                client_certificate:
                  - "@cert.crt"
                  - "@cert.key"
                sni: "redis-a.ibm.com"


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie\_name** | **str** | The name of the session cookie presented to clients.  | [optional] [default to 'PD-S-SESSION-ID']
**max\_sessions** | **float** | The maximum number of concurrent sessions.  | [optional] [default to 4096]
**timeout** | **float** | The maximum lifetime (in seconds) for a session. If set to &#x60;0&#x60; the sessions will not have a maximum lifetime, however once &#x60;max\_sessions&#x60; is reached sessions will be reaped using a least recently used algorithm.  | [optional] [default to 3600]
**inactive\_timeout** | **float** | The maximum lifetime (in seconds) a session can remain inactive before it is expired. If set to &#x60;0&#x60; the sessions will not have a maximum inactive lifetime.  | [optional] [default to 600]
**permit\_user\_switching** | **bool** | During an obligated re-authentication, depending on the policy and identity provider a different user credential may be returned to the application gateway. By default, the application gateway will not accept a credential if the user name does not match the user which the session was originally established for. Use this entry to change the behaviour and allow the application gateway to accept a credential containing a different user name during re-authentication.  | [optional] [default to False]
**redis** | [**ServerSessionRedis**](ServerSessionRedis.md) |  | [optional] 

[[Back to README]](../README.md)



