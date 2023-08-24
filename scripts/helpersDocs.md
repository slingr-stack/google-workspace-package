# Javascript API

The Javascript API of the googleworkspace package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `POST`,`PUT`,`GET`,`DELETE` requests to the [googleworkspace API](API_URL_HERE) like this:
```javascript
var response = pkg.googleworkspace.functions.post('/directory/v1/groups', body)
var response = pkg.googleworkspace.functions.post('/directory/v1/groups')
var response = pkg.googleworkspace.functions.put('/directory/v1/users/:userKey/photos/thumbnail', body)
var response = pkg.googleworkspace.functions.put('/directory/v1/users/:userKey/photos/thumbnail')
var response = pkg.googleworkspace.functions.get('/directory/v1/users/:userKey')
var response = pkg.googleworkspace.functions.delete('/directory/v1/users/:userKey')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/datatransfer/v1/applications'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.datatransfer.applications.get()
```
---
* API URL: '/datatransfer/v1/transfers'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.datatransfer.transfers.post(body)
```
---
* API URL: '/datatransfer/v1/transfers'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.datatransfer.transfers.get()
```
---
* API URL: '/datatransfer/v1/applications/:applicationId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.datatransfer.applications.get()
```
---
* API URL: '/datatransfer/v1/transfers/:dataTransferId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.datatransfer.transfers.get()
```
---
* API URL: '/directory/v1/groups'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.post(body)
```
---
* API URL: '/directory/v1/users'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.post(body)
```
---
* API URL: '/directory/v1/customers/:customerKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customers.put(customerKey, body)
```
---
* API URL: '/directory/v1/customers/:customerKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customers.get(customerKey)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.put(groupKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.get(groupKey)
```
---
* API URL: '/directory/v1/groups/:groupKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.delete(groupKey)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.put(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.get(userKey)
```
---
* API URL: '/directory/v1/users/:userKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.delete(userKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.orgunits.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/roleassignments'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.roleassignments.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.roles.post(customerKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.roles.get(customerKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.schemas.post(customerKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.aliases.post(groupKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.aliases.get(groupKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/members'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.members.post(groupKey, body)
```
---
* API URL: '/directory/v1/groups/:userKey/:nextPageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.getAllByUser.get(userKey, nextPageToken)
```
---
* API URL: '/directory/v1/users/:costumer/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.getAllByCostumer.get(costumer, pageToken)
```
---
* API URL: '/directory/v1/users/:domain/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.getAllByDomain.get(domain, pageToken)
```
---
* API URL: '/directory/v1/users/:userKey/aliases'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.aliases.post(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/aliases'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.aliases.get(userKey)
```
---
* API URL: '/directory/v1/users/:userKey/makeAdmin'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.makeAdmin.post(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/undelete'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.undelete.post(userKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.devices.mobile.get(customerKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.orgunits.put(customerKey, orgUnitPath, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.orgunits.get(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.orgunits.getAll.get(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/customer/:customerKey/orgunits/:orgUnitPath'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.orgunits.delete(customerKey, orgUnitPath)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas/:schemaKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.schemas.put(customerKey, schemaKey, body)
```
---
* API URL: '/directory/v1/customer/:customerKey/schemas/:schemaKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.schemas.get(customerKey, schemaKey)
```
---
* API URL: '/directory/v1/groups/:domain/:customer/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.getAll.get(domain, customer, pageToken)
```
---
* API URL: '/directory/v1/groups/:groupKey/aliases/:aliasId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.aliases.delete(groupKey, aliasId)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.members.put(groupKey, memberKey, body)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.members.get(groupKey, memberKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:memberKey'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.members.delete(groupKey, memberKey)
```
---
* API URL: '/directory/v1/groups/:groupKey/members/:pageToken'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.groups.members.paged.get(groupKey, pageToken)
```
---
* API URL: '/directory/v1/users/:userKey/aliases/:aliasId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.aliases.delete(userKey, aliasId)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'PUT'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.photos.thumbnail.put(userKey, body)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.photos.thumbnail.get(userKey)
```
---
* API URL: '/directory/v1/users/:userKey/photos/thumbnail'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.users.photos.thumbnail.delete(userKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.devices.mobile.get(customerKey, resourceId)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId'
* HTTP Method: 'DELETE'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.devices.mobile.delete(customerKey, resourceId)
```
---
* API URL: '/directory/v1/customer/:customerKey/roles/ALL/privileges'
* HTTP Method: 'GET'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.roles.ALL.privileges.get(customerKey)
```
---
* API URL: '/directory/v1/customer/:customerKey/devices/mobile/:resourceId/action'
* HTTP Method: 'POST'
* More info: https://developers.google.com/admin-sdk/directory/reference/rest
```javascript
pkg.googleworkspace.functions.directory.customer.devices.mobile.action.post(customerKey, resourceId, body)
```
---

</details>

