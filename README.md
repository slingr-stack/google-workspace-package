# Overview

This package allows direct access to the [Google Admin Console,
specifically Directory API](https://developers.google.com/admin-sdk/directory/reference/rest)
by impersonating a workspace admin user through a service account.
However, it provides shortcuts and helpers for most common use cases.

Some features available in this package are:

- Authentication and authorization
- Direct access to the Google Admin Console Directory API
- Helpers for API methods
- Flow Steps for common use cases

## Configuration

To use the Google Workspace package, you must create an app in the [Google Developer Console](https://console.developers.google.com)
by following these instructions:

- Create a Google Cloud project for your Google Workspace app.
- Enable the Admin SDK API in your Google Cloud project.
- Create a service account and credentials and delegate domain-wide authority to it (assign ONLY the necessary scopes to your service account)[Click here for the instructions](https://developers.google.com/admin-sdk/directory/v1/guides/delegation).
- Download the JSON file with the service account credentials to get the service account private key.

### Service account email

As explained above, this value comes from the credential file.

### OAuth Scopes

The scopes the service account have access to.
Take into account
if any scope is selected to which the service account does not have access, the package will fail
to be authorized to make any requests.

### Private Key

As explained above, this value also comes from the credential file.

# Javascript API

The Javascript API of the googleworkspace package has two pieces:

- **HTTP requests**
- **Flow steps**

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

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
