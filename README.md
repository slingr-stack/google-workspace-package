# Overview

This package allows direct access to the [Google Admin Console,
specifically Directory API](https://developers.google.com/admin-sdk/directory/reference/rest).
However, it provides shortcuts and helpers for most common use cases.

Some features available in this package are:

- Authentication and authorization
- Direct access to the Google Admin Console Directory API

## Configuration

To use the Google Workspace package, you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Workspace app.
- Enable the Admin SDK API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service account)[Click here for the instructions](https://developers.google.com/admin-sdk/directory/v1/guides/delegation).
- Download the JSON file with the service account credentials to get the service account private key.
  
Otherwise, if you plan to use OAuth 2.0 authentication method:

- Enable the Admin SDK API in your Google Cloud project.
- Create a Client ID OAuth 2.0 account.
- Copy the Client ID and Client Secret of the package.


#### Authentication Method
Allows to choose between Account Service and OAuth 2.0 authorization methods.

**Name**: `authenticationMethod`
**Type**: buttonsGroup
**Mandatory**: true

#### Service Account Email
The email created for the service account, it shows up when Service Account authorization method is enabled.

**Name**: `serviceAccountEmail`
**Type**: text
**Mandatory**: true

#### Private Key
The private key associated to the service account, it shows up when Service Account authorization method is enabled.

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

#### Googleworkspace Api Url
The URL of the Google Admin SDK API where the requests are performed.

**Name**: `GOOGLEWORKSPACE_API_BASE_URL`
**Type**: label

### OAuth Scopes

The scopes the service account have access to.
Take into account
Note that the client must have access to the admin sdk resources. If you try to access to a resource that the user does not own
the request will result in a 404 or 403 unauthorized error.

### Storage Value And Offline Mode

By default, the `Service Account` authorization method is used. When using this method, you can directly call the following method to retrieve the access token, without requiring any additional actions:

`pkg.googleworkspace.api.getAccessToken();`

This will return the access token, which will be securely stored in the application's storage and associated with a user by their ID.

If you have enabled the `OAuth 2.0` authorization method, the same method is used. The difference is that the Google Workspace package includes the `&access_type=offline` parameter, which allows the application to request a refresh token. This happens when calling the UI service (which should run during runtime, for example, by invoking the method within an action) to log in to the application.

The Google service will return an object containing both the access token and the refresh token. Each token will be stored in the app's storage (accessible via the Monitor), where you can view them encrypted and associated with the user by ID.


# Javascript API

## HTTP requests
You can make `POST`,`PUT`,`GET`,`DELETE` requests to the [googleworkspace API](https://admin.googleapis.com/admin) like this:
```javascript
var response = pkg.googleworkspace.api.post('/directory/v1/groups', body)
var response = pkg.googleworkspace.api.post('/directory/v1/groups')
var response = pkg.googleworkspace.api.put('/directory/v1/users/:userKey/photos/thumbnail', body)
var response = pkg.googleworkspace.api.put('/directory/v1/users/:userKey/photos/thumbnail')
var response = pkg.googleworkspace.api.get('/directory/v1/users/:userKey')
var response = pkg.googleworkspace.api.delete('/directory/v1/users/:userKey')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Events

There are no events for this package.

## Dependencies
* HTTP Service (Latest Version)
* Oauth Package

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
