angular.module('models.User', [])
.service('User', function () {
	var svc 			= this;

	svc.error 			= {message, available:false};
	svc.data			= {username, password};


	svc.authenticate 	= function () {

	};
	svc.setError 		= function () {

	};
	return svc;
});