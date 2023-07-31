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
		body: inputsLogic.body
	}

	return endpoint.directory.users.post(options);
};

var isObject = function (obj) {
	return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);