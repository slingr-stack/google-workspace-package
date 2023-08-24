/****************************************************
 Dependencies
 ****************************************************/

var httpReference = dependencies.http;

var httpDependency = {
    get: httpReference.get,
    post: httpReference.post,
    put: httpReference.put,
    patch: httpReference.patch,
    delete: httpReference.delete,
    head: httpReference.head,
    options: httpReference.options
};
var httpService = {};

function handleRequestWithRetry(requestFn, options, callbackData, callbacks) {
    try {
        return requestFn(options, callbackData, callbacks);
    } catch (error) {
        sys.logs.info("[googleworkspace] Handling request "+JSON.stringify(error));
    }
}

function createWrapperFunction(requestFn) {
    return function(options, callbackData, callbacks) {
        return handleRequestWithRetry(requestFn, options, callbackData, callbacks);
    };
}

for (var key in httpDependency) {
    if (typeof httpDependency[key] === 'function') httpService[key] = createWrapperFunction(httpDependency[key]);
}

/****************************************************
 Helpers
 ****************************************************/

exports.directory = {};

exports.directory.groups = {};

exports.directory.groups.aliases = {};

exports.directory.groups.members = {};

exports.directory.customer = {};

exports.directory.customer.orgunits = {};

exports.directory.customer.roles = {};

exports.directory.customer.roles.ALL = {};

exports.directory.customer.roles.ALL.privileges = {};

exports.directory.customer.roleassignments = {};

exports.directory.customers = {};

exports.directory.users = {};

exports.directory.users.makeAdmin = {};

exports.directory.users.photos = {};

exports.directory.users.photos.thumbnail = {};

exports.directory.users.undelete = {};

exports.directory.users.aliases = {};

exports.directory.customer.schemas = {};

exports.directory.customer.devices = {};

exports.directory.customer.devices.mobile = {};

exports.directory.customer.devices.mobile.action = {};

exports.datatransfer = {};

exports.datatransfer.applications = {};

exports.datatransfer.transfers = {};

exports.directory.groups.getAll = {};

exports.directory.groups.getAllByUser = {};

exports.directory.groups.members.paged = {};

exports.directory.customer.orgunits.getAll = {};

exports.directory.users.getAllByDomain = {};

exports.directory.users.getAllByCostumer = {};

exports.directory.groups.post = function(httpOptions) {
    var url = parse('/directory/v1/groups');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.groups.put = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.groups.aliases.post = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.groups.get = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.groups.aliases.get = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases', [groupKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.groups.aliases.delete = function(groupKey, aliasId, httpOptions) {
    if (!groupKey || !aliasId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,aliasId].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/aliases/:aliasId', [groupKey, aliasId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.groups.delete = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey', [groupKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.groups.members.post = function(groupKey, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members', [groupKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.groups.members.put = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.groups.members.get = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.groups.members.delete = function(groupKey, memberKey, httpOptions) {
    if (!groupKey || !memberKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey,memberKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members/:memberKey', [groupKey, memberKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.customer.orgunits.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.customer.orgunits.put = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.customer.orgunits.get = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.orgunits.delete = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey || !orgUnitPath) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,orgUnitPath].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits/:orgUnitPath', [customerKey, orgUnitPath]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.customer.roles.ALL.privileges.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles/ALL/privileges', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.roles.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.roles.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roles', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.customer.roleassignments.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/roleassignments', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.customers.get = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customers.put = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customers/:customerKey', [customerKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.users.post = function(httpOptions) {
    var url = parse('/directory/v1/users');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.users.put = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.users.makeAdmin.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/makeAdmin', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.users.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.users.photos.thumbnail.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.users.photos.thumbnail.put = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.users.photos.thumbnail.delete = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/photos/thumbnail', [userKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.users.delete = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey', [userKey]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.users.undelete.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/undelete', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.users.aliases.post = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.users.aliases.get = function(userKey, httpOptions) {
    if (!userKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases', [userKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.users.aliases.delete = function(userKey, aliasId, httpOptions) {
    if (!userKey || !aliasId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [userKey,aliasId].');
        return;
    }
    var url = parse('/directory/v1/users/:userKey/aliases/:aliasId', [userKey, aliasId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.directory.customer.schemas.post = function(customerKey, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas', [customerKey]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.customer.schemas.put = function(customerKey, schemaKey, httpOptions) {
    if (!customerKey || !schemaKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
    sys.logs.debug('[googleworkspace] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options));
};

exports.directory.customer.schemas.get = function(customerKey, schemaKey, httpOptions) {
    if (!customerKey || !schemaKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,schemaKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/schemas/:schemaKey', [customerKey, schemaKey]);
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.devices.mobile.get = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || arguments.length === 0) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile', [customerKey]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        case 1:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey, resourceId]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        case 2:
            url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey,resourceId]);
            url = concatQuery(url, 'projection', 'FULL');
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.devices.mobile.action.post = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId/action', [customerKey, resourceId]);
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.customer.devices.mobile.delete = function(customerKey, resourceId, httpOptions) {
    if (!customerKey || !resourceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey,resourceId].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/devices/mobile/:resourceId', [customerKey, resourceId]);
    sys.logs.debug('[googleworkspace] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options));
};

exports.datatransfer.applications.get = function(applicationId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/datatransfer/v1/applications');
			break;
		case 1:
			url = parse('/datatransfer/v1/applications/:applicationId', [applicationId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(GoogleWorkspace(options));
};

exports.datatransfer.transfers.get = function(dataTransferId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/datatransfer/v1/transfers');
			break;
		case 1:
			url = parse('/datatransfer/v1/transfers/:dataTransferId', [dataTransferId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[googleworkspace] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return httpService.get(GoogleWorkspace(options));
};

exports.datatransfer.transfers.post = function(httpOptions) {
    var url = parse('/datatransfer/v1/transfers');
    sys.logs.debug('[googleworkspace] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options));
};

exports.directory.groups.getAll.get = function(domain, customer, pageToken, httpOptions) {
    var url = parse('/directory/v1/groups');
    if (!!domain) {
        url = concatQuery(url, 'domain', encodeURIComponent(domain));
    }
    if (!!customer) {
        url = concatQuery(url, 'customer', encodeURIComponent(customer));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.groups.getAllByUser.get = function(userKey, nextPageToken, httpOptions) {
    var url = parse('/directory/v1/groups');
    if (!!userKey) {
        url = concatQuery(url, 'userKey', encodeURIComponent(userKey));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(nextPageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.groups.members.paged.get = function(groupKey, pageToken, httpOptions) {
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members');
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.customer.orgunits.getAll.get = function(customerKey, orgUnitPath, httpOptions) {
    if (!customerKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [customerKey].');
        return;
    }
    var url = parse('/directory/v1/customer/:customerKey/orgunits');
    if (!!orgUnitPath) {
        url = concatQuery(url, 'orgUnitPath', encodeURIComponent(orgUnitPath));
    }
    url = concatQuery(url, 'type', "all");
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.users.getAllByDomain.get = function(domain, pageToken, httpOptions) {
    var url = parse('/directory/v1/users');
    if (!!domain) {
        url = concatQuery(url, 'domain', encodeURIComponent(domain));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

exports.directory.users.getAllByCostumer.get = function(costumer, pageToken, httpOptions) {
    var url = parse('/directory/v1/users');
    if (!!costumer) {
        url = concatQuery(url, 'costumer', encodeURIComponent(costumer));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options));
};

/****************************************************
 Public API - Generic Functions
 ****************************************************/

exports.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.get(GoogleWorkspace(options), callbackData, callbacks);
};

exports.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.post(GoogleWorkspace(options), callbackData, callbacks);
};

exports.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.put(GoogleWorkspace(options), callbackData, callbacks);
};

exports.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.patch(GoogleWorkspace(options), callbackData, callbacks);
};

exports.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.delete(GoogleWorkspace(options), callbackData, callbacks);
};

exports.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.head(GoogleWorkspace(options), callbackData, callbacks);
};

exports.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return httpService.options(GoogleWorkspace(options), callbackData, callbacks);
};

exports.utils = {};

exports.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

exports.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

exports.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

exports.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

exports.utils.getConfiguration = function (property) {
    sys.logs.debug('[googleworkspace] Get property: '+property);
    return config.get(property);
};


/****************************************************
 Private helpers
 ****************************************************/

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contain the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string' && typeof (args[i]) != 'number') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

/****************************************************
 Constants
 ****************************************************/

var GOOGLEWORKSPACE_API_AUTH_URL = "https://oauth2.googleapis.com/token";

/****************************************************
 Configurator
 ****************************************************/

var GoogleWorkspace = function (options) {
    options = options || {};
    options= setApiUri(options);
    options= setRequestHeaders(options);
    return options;
}

/****************************************************
 Private API
 ****************************************************/

function setApiUri(options) {
    var API_URL = config.get("GOOGLEWORKSPACE_API_BASE_URL");
    var url = options.path || "";
    options.url = API_URL + url;
    sys.logs.debug('[googleworkspace] Set url: ' + options.path + "->" + options.url);
    return options;
}

function setRequestHeaders(options) {
    var headers = options.headers || {};

    sys.logs.debug('[googleworkspace] Setting header bearer');
    headers = mergeJSON(headers, {"Content-Type": "application/json"});
    headers = mergeJSON(headers, {"Authorization": "Bearer "+getAccessTokenForAccount()});

    if (headers.Accept === undefined || headers.Accept === null || headers.Accept === "") {
        sys.logs.debug('[googleworkspace] Set header accept');
        headers = mergeJSON(headers, {"Accept": "application/json"});
    }

    options.headers = headers;
    return options;
}

function getAccessTokenForAccount(account) {
    account = account || "account";
    sys.logs.info('[googleworkspace] Getting access token for account: '+account);
    var installationJson = sys.storage.get('installationInfo-GoogleWorkspace---'+account) || {id: null};
    var token = installationJson.token || null;
    var expiration = installationJson.expiration || 0;
    if (!!token || expiration < new Date()) {
        sys.logs.info('[googleworkspace] Access token is expired or not found. Getting new token');
        var res = httpService.post(
            {
                url: "https://oauth2.googleapis.com/token",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: {
                    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                    assertion: getJsonWebToken()
                }
            });
        token = res.access_token;
        var expires_at = res.expires_in;
        expiration = new Date(new Date(expires_at) - 1 * 60 * 1000).getTime();
        installationJson = mergeJSON(installationJson, {"token": token, "expiration": expiration});
        sys.logs.info('[googleworkspace] Saving new token for account: ' + account);
        sys.storage.replace('installationInfo-GoogleWorkspace---'+account, installationJson);
    }
    return token;
}

function getJsonWebToken() {
    var currentTime = new Date().getTime();
    var futureTime = new Date(currentTime + ( 10 * 60 * 1000)).getTime();
    var scopeProp= config.get("scope");
    var scopes;
    if (!!scopeProp) {
        scopes = scopeProp.map(function (s) {
            return "https://www.googleapis.com/auth/admin." + s;
        });
    }
    var scopesGlobal = scopes.join(" ");
    return sys.utils.crypto.jwt.generate(
        {
            iss: config.get("serviceAccountEmail"),
            aud: GOOGLEWORKSPACE_API_AUTH_URL,
            scope: scopesGlobal,
            iat: currentTime,
            exp: futureTime
        },
        config.get("privateKey"),
        "RS256"
    )
}

function mergeJSON (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}
