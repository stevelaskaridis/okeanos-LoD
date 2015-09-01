---
title: API | lambda instance stop
description: Stops a specified lambda instance
---

# API - lambda instance stop - Description

Lambda instance stop call, given an authentication token through the header x-api-key, will firstly check the validity of the token. If the token is invalid, the API will reply with a "401 Unauthorized" code. If the token is valid, the API will search for the specified lambda instance. If the specified lambda instance does not exist, the API will reply with a "404 Not Found" code. If the specified lambda instance exists, the API will reply with a "202 ACCEPTED" code and will also shutdown the VMs on ~okeanos and the lambda services for the specified lambda instance.


## Basic Parameters
Type | Description |
-------|-----------------|
**Description** | lambda instance stop
**URL**         | backend/lambda-instances/[uuid]/stop
**HTTP Method** | POST
**Security**    | Basic Authentication


### Headers

Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
x-api-key | ~okeanos authentication token. If you have an account you may find the authentication token at (Dashboad-> API Access) https://accounts.okeanos.grnet.gr/ui/api_access. | `Yes` |None| tJ3b3f32f23ceuqdoS_TH7m0d6yxmlWL1r2ralKcttY


### Parameters

Name | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
uuid  | The uuid of the specified lambda instance. For more information see LambdaInstanceList page. |`Yes` |None| 3


## Example

In this example we are going to start the lambda instance with uuid 3

The request in curl

```
curl -X POST -H "x-api-key: tJ3b3f32f23ceuqdoS_TH7m0d6yxmlWL1r2ralKcttY" 'http://<url>/backend/lambda-instances/3/stop'
```

### Response body

If the authentication is correct the response will be

```
{
  "result": "Success"
}
```

For the case where the authentication token is not correct, refer to Authentication page.

### Response messages

The main response messages are:

- HTTP/1.1 202 ACCEPTED : (Success)
- HTTP/1.1 401 UNAUTHORIZED : (Fail)