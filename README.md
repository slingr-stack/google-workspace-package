<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Google Workspace package</td>
        <td>November 13, 2023</td>
        <td>Detailed description of the API of the Google Workspace Admin Console package.</td>
    </tr>
    </tbody>
</table>

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
You can make `POST`,`PUT`,`GET`,`DELETE` requests to the [googleworkspace API](API_URL_HERE) like this:
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

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,PUT,GET,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/directory/v1/groups<br>/directory/v1/groups/{groupKey}/aliases<br>/directory/v1/groups/{groupKey}/members<br>/directory/v1/customer/{customerKey}/orgunits<br>/directory/v1/customer/{customerKey}/roles<br>/directory/v1/customer/{customerKey}/roleassignments<br>/directory/v1/users<br>/directory/v1/users/{userKey}/makeAdmin<br>/directory/v1/users/{userKey}/undelete<br>/directory/v1/users/{userKey}/aliases<br>/directory/v1/customer/{customerKey}/schemas<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}/action<br>/datatransfer/v1/transfers<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/customers/{customerKey}<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/customer/{customerKey}/schemas/{schemaKey}<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/aliases<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/customer/{customerKey}/roles/ALL/privileges<br>/directory/v1/customer/{customerKey}/roles<br>/directory/v1/customers/{customerKey}<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/users/{userKey}/aliases<br>/directory/v1/customer/{customerKey}/schemas/{schemaKey}<br>/directory/v1/customer/{customerKey}/devices/mobile<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}<br>/datatransfer/v1/applications<br>/datatransfer/v1/applications/{applicationId}<br>/datatransfer/v1/applications/{applicationId}<br>/datatransfer/v1/transfers<br>/datatransfer/v1/transfers/{dataTransferId}<br>/datatransfer/v1/transfers/{dataTransferId}<br>/directory/v1/groups/{domain}/{customer}/{pageToken}<br>/directory/v1/groups/{userKey}/{nextPageToken}<br>/directory/v1/groups/{groupKey}/members/{pageToken}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/users/{domain}/{pageToken}<br>/directory/v1/users/{costumer}/{pageToken}<br>/directory/v1/groups/{groupKey}/aliases/{aliasId}<br>/directory/v1/groups/{groupKey}<br>/directory/v1/groups/{groupKey}/members/{memberKey}<br>/directory/v1/customer/{customerKey}/orgunits/{orgUnitPath}<br>/directory/v1/users/{userKey}/photos/thumbnail<br>/directory/v1/users/{userKey}<br>/directory/v1/users/{userKey}/aliases/{aliasId}<br>/directory/v1/customer/{customerKey}/devices/mobile/{resourceId}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### List all users Flow Step

This flow step allows you to list all users from a project in Google Workspace.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Create a user Flow Step

This flow step allows you to create a user in Google Workspace. The User object must follow the [Google Workspace User Schema](https://developers.google.com/admin-sdk/directory/v1/reference/users#resource-representation).

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>



</details>

## Events

There are no events for this package.

## Dependencies
* HTTP Service (Latest Version)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
