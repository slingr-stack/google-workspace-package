# Overview

Repo: [https://github.com/slingr-stack/google-workspace-package](https://github.com/slingr-stack/google-workspace-package)


This package allows direct access to the [Google Admin Console,
specifically Directory API](https://developers.google.com/admin-sdk/directory/reference/rest).
However, it provides shortcuts and helpers for most common use cases.

Some features available in this package are:

- Authentication and authorization
- Direct access to the Google Admin Console Directory API
- Listener that catch incoming webhooks from Google Admin Console

## Configuration

To use the Google Workspace package, you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Workspace app.
- Enable the Admin SDK API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service account) [Click here for the instructions](https://developers.google.com/admin-sdk/directory/v1/guides/delegation).
- Download the JSON file with the service account credentials to get the service account private key.
  
Otherwise, if you plan to use OAuth 2.0 authentication method:

- Enable the Admin SDK API in your Google Cloud project.
- Create a Client ID OAuth 2.0 account.
- Copy the Client ID and Client Secret of the package.


#### Authentication Method
Allows you to choose between Account Service and OAuth 2.0 authorization methods.

**Name**: `authenticationMethod`
**Type**: buttonsGroup
**Mandatory**: true

#### Service Account Email
The email created for the service account, it shows up when Service Account authorization method is enabled.

**Name**: `serviceAccountEmail`
**Type**: text
**Mandatory**: true

#### Private Key
The private key associated with the service account, it shows up when Service Account authorization method is enabled.

**Name**: `privateKey`
**Type**: password
**Mandatory**: true

#### Client ID
The ID for your client application registered with the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientId`
**Type**: text
**Mandatory**: true

#### Client Secret
The client secret given to you by the API provider, it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `clientSecret`
**Type**: password
**Mandatory**: true

#### OAuth Callback
The OAuth callback to configure in your Google Admin SDK App. it shows up when OAuth 2.0 authorization method is enabled.

**Name**: `oauthCallback`
**Type**: label

#### Webhooks URL
The URL to configure in webhooks of your Google Drive App.

**Name**: `webhooksUrl`
**Type**: label

#### Google Workspace API URL
The URL of the Google Admin SDK API where the requests are performed.

**Name**: `GOOGLEWORKSPACE_API_BASE_URL`
**Type**: label

### OAuth Scopes

The scopes the service account has access to.
Note that the client must have access to the admin sdk resources. If you try to access to a resource that the user does not own,
the request will result in a 404 or 403 unauthorized error.

### Storage Value And Offline Mode

By default, the `Service Account` authorization method is used. When using this method, you can directly call the following method to retrieve the access token, without requiring any additional actions:

`pkg.googleworkspace.api.getAccessToken();`

This will return the access token, which will be securely stored in the application's storage and associated with a user by their ID.

If you have enabled the `OAuth 2.0` authorization method, the same method is used. The difference is that the Google Workspace package includes the `&access_type=offline` parameter, which allows the application to request a refresh token. This happens when calling the UI service (which should run during runtime, for example, by invoking the method within an action) to log in to the application.

The Google service will return an object containing both the access token and the refresh token. Each token will be stored in the app's storage (accessible via the Monitor), where you can view them encrypted and associated with the user by ID.


# JavaScript API

## HTTP requests
You can make `POST`,`PUT`,`GET`, `PATCH` and `DELETE` requests to the [Google Workspace API](https://developers.google.com/admin-sdk/overview?hl=es-419) like this:
```javascript
var response = pkg.googleworkspace.api.post('/directory/v1/groups', {"email": "newgroup@slingr.io"})
var response = pkg.googleworkspace.api.get('/directory/v1/groups')
var response = pkg.googleworkspace.api.put('/directory/v1/users/:userKey/photos/thumbnail', {"photoData": "Base64EncodedData"})
var response = pkg.googleworkspace.api.patch('/directory/v1/users/:userKey/photos/thumbnail', {"etag": "eTag","photoData": "Base64EncodedData"})
var response = pkg.googleworkspace.api.get('/directory/v1/users/:userKey')
var response = pkg.googleworkspace.api.delete('/directory/v1/users/:userKey')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Events

### Webhook

Incoming webhook events are automatically captured by the default listener named `Catch HTTP Google Workspace events`, which can be found below the `Scripts` section.
Alternatively, you have the option to create a new package listener. For more information, please refer to the [Listeners Documentation](https://platform-docs.slingr.io/dev-reference/data-model-and-logic/listeners/).
Please take a look at the Google Workspace documentation of the [Webhooks](https://developers.google.com/admin-sdk/directory/v1/guides/push?hl=es-419) for more information.

### Subscribes to users changes to receive webhooks

```javascript
let body = {
    "id": "01234567-89ab-cdef-0123456789ab", // Your channel ID.
        "type": "web_hook",
        "address": "https://mydomain.com/notifications", // Your receiving URL.
...
    "token": "target=myApp-myFilesChannelDest", // (Optional) Your channel token.
        "params": {
        "ttl": 3600 // (Optional) Your requested time-to-live for this channel.
    }
}
const response = pkg.googledrive.api.post('/directory/v1/users/watch', body);
```
Once you make this request you will start to receive webhooks when your organization users are modified.

## Dependencies
* HTTP Service
* Oauth Package

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
