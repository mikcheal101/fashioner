angular
.module('app', [
	'ngRoute', 'ngAnimate', 'ngFileUpload',  'ngSanitize',
	'angularUtils.directives.dirPagination', 'angular-loading-bar', 'checklist-model',
	'app.controller', 
	'app.route',
	'app.service', 
	'app.directives'
])

.run (function ($rootScope, AppService) {
	
	$rootScope.api 			= {};
	$rootScope.api.security	= {};
	$rootScope.api.fetch	= {};
	$rootScope.api.set		= {};
	$rootScope.api.drop		= {};
	$rootScope.sessions 	= {};

	// general routes
	$rootScope.api.fetch.locations			= '/api/fetch/locations';
	$rootScope.api.fetch.countries			= '/api/fetch/countries';
	$rootScope.api.fetch.fashion_houses		= '/api/fetch/fashion_houses';
	$rootScope.api.fetch.products			= '/api/fetch/products';
	$rootScope.api.fetch.user_categories	= '/api/fetch/user_categories';
	$rootScope.api.fetch.persons			= '/api/fetch/persons';
	$rootScope.api.fetch.designers			= '/api/fetch/designers';
	$rootScope.api.fetch.sexes				= '/api/fetch/sexes';
	
	$rootScope.api.set.location				= '/api/set/location';
	$rootScope.api.set.country				= '/api/set/country';
	$rootScope.api.set.fashion_house		= '/api/set/fashion_house';
	$rootScope.api.set.product				= '/api/set/product';
	$rootScope.api.set.user_category		= '/api/set/user_category';
	$rootScope.api.set.designer				= '/api/set/designer';
	$rootScope.api.set.person				= '/api/set/person';

	$rootScope.api.drop.location			= '/api/drop/location';
	$rootScope.api.drop.country				= '/api/drop/country';
	$rootScope.api.drop.fashion_house		= '/api/drop/fashion_house';
	$rootScope.api.drop.product				= '/api/drop/product';
	$rootScope.api.drop.user_category		= '/api/drop/user_category';
	$rootScope.api.drop.designer 			= '/api/drop/designer';
	$rootScope.api.drop.person 				= '/api/drop/person';
	
	$rootScope.api.security.login 			= '/api/authenticate';
	$rootScope.api.security.sessions		= '/api/session';
	$rootScope.api.security.signout			= '/api/signout';
	$rootScope.api.security.verifyEmail		= '/api/verifyemail';
	$rootScope.api.security.verifyUsername	= '/api/verifyusername';
	$rootScope.api.security.signUp			= '/api/signup';

	// headers
	$rootScope.templates = {
		header  		:'templates/headers/nav.html',
	};

	// check the user session
	AppService
	.security
	.sessions ()
	.then (data => {
		angular.copy (data, $rootScope.sessions);
	});
})

.filter ('underline', () => {
	return (x, y) => {
		return x.replace (/ /g, '_');
	};
})

.filter ('gender', () => {
	return (x)  => {
		return (x === 1)? 'Male':'Female';
	}
})

.filter('htmlToPlaintextTruncate', function() {
	return function(text, length, end) {
		var htmlToPlaintext;
		if (isNaN(length))
			length = 10;
 
		if (end === undefined)
			end = "  ...";
 
		if (text.length <= length || text.length - end.length <= length) {
			return String(text).replace(/<[^>]+>/gm, '');
		} else {
			htmlToPlaintext = String(text).replace(/<[^>]+>/gm, '');
			return String(htmlToPlaintext).substring(0, length-end.length) + end;
		}
	};
})

.filter ('textarea', function () {
	return function (text, length, end) {
		return String (text).replace(/\r?\n/g, '<br />');
	}
})
