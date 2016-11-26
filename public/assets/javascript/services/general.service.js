angular
.module ('app.service', [])
.service ('AppService', function ($q, Upload, $rootScope, $http) {
	var svc 		= this;
	svc.security 	= {};
	svc.fetch		= {};
	svc.set 		= {};
	svc.drop 		= {};

	// check session details
	svc.security.sessions 			= function () {
		var defer = $q.defer ();
		$http
		.get ($rootScope.api.security.sessions)
		.then (
			data => {
				defer.resolve (data.data.session);
			}, err => {
				defer.reject (err);
			}
		);
		return defer.promise;
	};
	svc.security.login				= function (user) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.security.login,
			data: {user}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.security.signout			= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.security.signout,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.security.verifyEmail		= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.security.verifyEmail,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.security.verifyUsername		= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.security.verifuyUsername,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.security.signUp 			= function (param) {
		var q = $q.defer();
		Upload.upload({
			url: $rootScope.api.security.signUp,
			data: {
				file 	: (param.files.logo) ? Upload.rename(param.files.logo, param.data.fashion_house._name.replace(/ /g, '_')) : null,
				reg 	: param.data
			}
		})
		.then(
			x => {
				q.resolve(x.data);
			}, y => {
				q.reject(y);
			}, z =>{
				q.notify(z);
			}
		);

		return q.promise;
	};

	svc.fetch.sexes					= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.sexes,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.locations				= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.locations,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.countries				= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.countries,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.fashion_houses		= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.fashion_houses,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.products				= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.products,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.user_categories		= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.user_categories,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.persons				= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.persons,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.fetch.designers				= function () {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.fetch.designers,
			data: {}
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};

	svc.set.locations				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.locations,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.countries				= function (param) {
		var q = $q.defer();	
		console.log(param.data);
		Upload.upload({
			url	: $rootScope.api.set.country,
			data: param.data
		})
		.then(
			(x) => {
				console.log(x.data);
				q.resolve(x.data);
			}, (y) => {
				console.error(y);
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.fashion_houses			= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.fashion_houses,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.product					= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.product,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.user_categories			= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.user_categories,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.persons					= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.persons,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.set.designers				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.designers,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};

	svc.drop.locations				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.locations,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.countries				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.countries,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.fashion_houses			= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.fashion_houses,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.product				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.set.product,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.user_categories		= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.user_categories,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.persons				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.persons,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};
	svc.drop.designers				= function (param) {
		var q = $q.defer();	
		Upload
		.upload({
			url: $rootScope.api.drop.designers,
			data: param
		})
		.then(
			(x) => {
				q.resolve(x.data);
			}, (y) => {
				q.reject(y);
			}, (z) => {
				q.notify(z);
			}
		);
		return q.promise;
	};

	return svc;
});