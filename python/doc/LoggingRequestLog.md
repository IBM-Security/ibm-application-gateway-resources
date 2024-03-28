# LoggingRequestLog

## Description

Defines and enables request logging.

### Log Format
The following directives can be added to the format property to customize the log format:

Directive | Description
--------- | -----------
%a | Client IP Address.
%A | Local IP Address.
%b | Bytes in the response excluding HTTP headers in CLF format: `-` instead of 0 when no bytes are returned.
%B | Bytes in the response excluding HTTP headers.
%{attribute}C | Attribute from the credential named `attribute`.
%{cookie}e | Contents of the Cookie `cookie` in the request.
%{cookie}E | Contents of the Cookie `cookie` in the response.
%d | Transaction identifier, or session sequence number.
%F | Time taken to serve the request in microseconds.
%h | Client host.
%H | Request protocol.
%{header}i | Contents of the Header `header` in the request.
%j | The name of the resource server servicing the request.
%J | The length of time, in microseconds, that the resource server server spent processing the request. This will include the time that it took to send the request to the server, the length of time that it took the server to process the request, and the length of time that it took to read and process the response header.
%l | Client logname (RFC 1314) (default -).
%m | Request method (i.e. GET, POST, HEAD).
%{header}o | Contents of the Header `header` in the response.
%M | The time, in Common Log Format, at which the request was received with millisecond precision.
%p | Port over which the request was received.
%q | The decoded query string (prepended with `?` or empty).
%Q | The raw query string (prepended with `?` or empty).
%r | First line of the request with decoded URL.
%R | First line of the request with decoded URL including HTTP://HOSTNAME.
%s | Response status.
%S | The hostname of the backend server which serviced this request.
%t | Time in Common Log Format format.
%{format}t | The time in the given format.
%T | Time taken to serve the request in seconds, or part thereof.
%u | Remote user.
%U | The URL requested.
%v | Canonical ServerName of the server servicing the request.
%z | The decoded path string.
%Z | The raw path string.


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**LoggingRequestLogFile**](LoggingRequestLogFile.md) |  | [optional] 
**format** | **str** | The format of the events written to the request log. See the [Log Format](#log-format) table above for the available directives.  | [optional] [default to '"%h %u %t %r %s %b"']

[[Back to README]](../README.md)



