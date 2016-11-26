angular.module ('app.route', [])

.config (function ($routeProvider, $locationProvider) {

	$routeProvider

	.when ('/', {
		templateUrl		: '../templates/index.html',
		controller 		: 'AppController'
	})
	.when ('/sign-in', {
		templateUrl		: '../templates/login.html',
		controller 		: 'AppController'
	})	
	.when ('/sign-up', {
		templateUrl		: '../templates/sign-up.html',
		controller 		: 'AppController'
	})
	.when ('/forgot-password', {
		templateUrl		: '../templates/forgot-password.html',
		controller 		: 'AppController'
	})
	.when ('/countries', {
		templateUrl		: '../templates/countries.html',
		controller 		: 'AppController'
	})
	.when ('/designers', {
		templateUrl		: '../templates/designers.html',
		controller 		: 'AppController'
	})
	.when ('/fashion_houses', {
		templateUrl		: '../templates/fashion_houses.html',
		controller 		: 'AppController'
	})
	.when ('/locations', {
		templateUrl		: '../templates/locations.html',
		controller 		: 'AppController'
	})
	.when ('/persons', {
		templateUrl		: '../templates/persons.html',
		controller 		: 'AppController'
	})
	.when ('/products', {
		templateUrl		: '../templates/products.html',
		controller 		: 'AppController'
	})
	.when ('/product/:id', {
		templateUrl		: '../templates/product.html',
		controller 		: 'AppController'
	})
	.when ('/userCategories', {
		templateUrl		: '../templates/user_categories.html',
		controller 		: 'AppController'
	})
	.when ('/profile', {
		templateUrl		: '../templates/profile.html',
		controller 		: 'AppController'
	})
	.when ('/my-products', {
		templateUrl		: '../templates/my-products.html',
		controller 		: 'AppController'
	})


	.when ('/404', {
		template : `
			error no such page`
	})

	.otherwise ('/404');

	$locationProvider.html5Mode(true);
});