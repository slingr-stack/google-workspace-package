/****************************************************
 Dependencies
 ****************************************************/

var httpService = dependencies.http;

/**
 * This flow step will send a request to list all users.
 *
 */
step.listUsersGoogleWorkspace = function (inputs) {

	return endpoint.directory.users.getAllByCostumer.get();
};