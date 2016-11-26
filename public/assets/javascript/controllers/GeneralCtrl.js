var app = angular
.module('app.controller', [])
.controller('AppController', function ($scope, AppService) {
	$scope.authentication 			= {};
	$scope.registration				= {};
	$scope.country					= {};
	$scope.designer					= {};
	$scope.location					= {};
	$scope.fashion_house			= {};
	$scope.person 					= {};
	$scope.product					= {};
	$scope.user_cat					= {};
	$scope.profile 					= {};

	// other scope variables
	$scope._state					= {};

	// authentication 
	var authentication 				= $scope.authentication;
	authentication.data				= {username:'', password:''};
	authentication.error			= {available:false, message:''};
	authentication.auth 			= function (form) {
		// test form validation
		if(form.$valid) {
			AppService.security.login(authentication.data).then(data => {
				console.log(data);
			});
		} else {
			console.error(form.$error);
		}
	};

	// registration
	var registration				= $scope.registration;
	registration.files				= {
		logo: {}
	};
	registration.actions			= {};
	registration.data				= {
		_uname			:'', 
		_pwd 			:'', 
		repwd 			:'', 
		_email 			:'', 
		_tel 			:'', 
		_sex			: {},
		fashion_house	: {
			_name			:'',
			_registered 	: false,
			pobox 			:'',
			address 		:'',
			state 			: {},
			_location 		: {},
			contact_person	: '',
			rc_number		: ''
		}
	}
	registration.error				= {
		available 		:false, 
		message 		:'',
		fashion_house	: {
			index 		: 0,
			msgs 		: [
				{
					link 	: "register " + registration.data.fashion_house._name + " as a new fashion house",
					exists  : registration.data.fashion_house._name + ' Does Not Exist'
				},
				{
					link 	: 'click here to cancel',
					exists  : 'Not interested in creating ' + $scope.registration.data.fashion_house._name
				}
			]
		}
	};
	registration.check					= {fashion_house:false};
	registration.actions.fashion_house	= function () {
		registration.check.fashion_house 		= !registration.check.fashion_house;
		registration.error.fashion_house.index 	= (registration.check.fashion_house) ? 1:0;
	};
	registration.actions.selectLogo 	= function (file) {
		registration.files.logo 		= file;
	};
	registration.actions.submit 		= function (form) {
		if (form.$valid) {
			AppService.security.signUp(registration).then(
				(data) => {
					console.log(data);
					registration.files.logo = {};
					registration.data = {};
					// figure out how to clear the form
				}
			);
		} else {
			console.error('form invalid!');
		}
	};


	// countries
	var country 				= $scope.country;
	country.data 				= {_name: '', _abbrv: ''};
	country.list 				= [];
	country.actions				= {};
	country.actions.select 		= function(param) {
		country.data 			= param;
	};
	country.actions.drop 		= function() {
		if(country.data._id != undefined){
			AppService.drop.countries(country).then(function(x){
				console.log(x);
			});
		}
	};
	country.actions.commit 		= function(form) {
		if(form.$valid){
			// send the data to the server
			AppService.set.countries(country).then(
				(x) => {
					console.log(x.data);
				}, (y) => {
					console.warn(y);
				}
			);
		} else {
			console.warn('error');
		} 
	};
	country.actions.init 		= function(){
		// fetch data from the server
		AppService.fetch.countries().then(function(x){
			angular.copy(x, country.list);
		});
	};


});
