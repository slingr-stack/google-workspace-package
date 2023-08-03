directoryCustomerDevicesMobileGet = () => {
    //INIT_INJECTION
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
    return endpoint._get(options);
    //END_INJECTION
}

directoryGroupsGetAllGet = () => {
    //INIT_INJECTION
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
    return endpoint._get(options);
    //END_INJECTION
}

directoryGroupsGetAllByUserGet = () => {
    //INIT_INJECTION
    var url = parse('/directory/v1/groups');
    if (!!userKey) {
        url = concatQuery(url, 'userKey', encodeURIComponent(userKey));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(nextPageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

directoryGroupsMembersPagedGet = () => {
    //INIT_INJECTION
    if (!groupKey) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [groupKey].');
        return;
    }
    var url = parse('/directory/v1/groups/:groupKey/members');
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

directoryCustomerOrgunitsGetAllGet = () => {
    //INIT_INJECTION
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
    return endpoint._get(options);
    //END_INJECTION
}

directoryUsersGetAllByDomainGet = () => {
    //INIT_INJECTION
    var url = parse('/directory/v1/users');
    if (!!domain) {
        url = concatQuery(url, 'domain', encodeURIComponent(domain));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

directoryUsersGetAllByCostumerGet = () => {
    //INIT_INJECTION
    var url = parse('/directory/v1/users');
    if (!!costumer) {
        url = concatQuery(url, 'costumer', encodeURIComponent(costumer));
    }
    url = concatQuery(url, 'pageToken', encodeURIComponent(pageToken || ""));
    sys.logs.debug('[googleworkspace] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

module.exports = {
    directoryCustomerDevicesMobileGet,
    directoryGroupsGetAllGet,
    directoryGroupsGetAllByUserGet,
    directoryGroupsMembersPagedGet,
    directoryCustomerOrgunitsGetAllGet,
    directoryUsersGetAllByDomainGet,
    directoryUsersGetAllByCostumerGet
};