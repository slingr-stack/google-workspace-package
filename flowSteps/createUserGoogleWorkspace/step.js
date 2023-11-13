/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 * {object} body, This is used to send body request.
 */
step.createUserGoogleWorkspace = function (inputs) {

	var inputsLogic = {
		body: inputs.body || {}
	};

	inputsLogic.body = isObject(inputsLogic.body) ? inputsLogic.body : JSON.parse(inputsLogic.body);

	var options = {
		body: inputsLogic.body,
		path: "/directory/users"
	}

	options= setApiUri(options);
	options= setRequestHeaders(options);

	return httpService.post(options);
};

function parse (url, pathVariables){
	var regex = /{([^}]*)}/g;
	if (!url.match(regex)){
		return url;
	}
	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}
	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})
	return url;
}

function isObject (obj) {
	return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString);
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
	var result = {};
	var key;
	for (key in json1) {
		if(json1.hasOwnProperty(key)) result[key] = json1[key];
	}
	for (key in json2) {
		if(json2.hasOwnProperty(key)) result[key] = json2[key];
	}
	return result;
}
