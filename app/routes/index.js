module.exports = function (app) {
	const db 		= app.db;
	const bcrypt 	= app.bcrypt;


	/** middleware session handling **/
	app.use ((request, response, next) => {
		request.session.user = request.session.user || {authenticated: false, user:{}};
		next ();
	});
	app.get ('/api/session', (request, response, next) => {
		response.status(200).json ({
			session : request.session.user
		});
	});
	app.post ('/api/signout', (request, response, next) => {
		request.session.destroy ();
		response.status(200).json ({
			done: true
		});
	});
	app.post('/api/authenticate', app.logos, (request, response) => {
		response.json({req : request.body});
	});
	app.post('/api/verifyemail', (request, response) => {
	});
	app.post('/api/verifyusername', (request, response) => {
	});
	app.post('/api/signup', app.logos, (request, response, next) =>{
		
		console.log(request.body, request.file);

		var post = request.body;
		response.status(200).json({data:post});
	});
	/** middleware session handling **/

	app.post('/api/fetch/sexes', (request, response) => {
		//db.any("SELECT")
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/locations', (request, response) => {
		//db.any("SELECT")
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/countries', (request, response) => {
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/fashion_houses', (request, response) => {
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/products', (request, response) => {
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/user_categories', (request, response) => {
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/persons', (request, response) => {
		response.status(200).json({data: []});
	});
	app.post('/api/fetch/designers', (request, response) => {
		response.status(200).json({data: []});
	});

	app.post('/api/set/location', (request, response) => {
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/country', app.logos, (request, response) => {
		console.log(request.body);
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/fashion_house', (request, response) => {
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/product', (request, response) => {
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/user_category', (request, response) => {
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/designer', (request, response) => {
		response.status(200).json({data: request.body});
	});
	app.post('/api/set/person', (request, response) => {
		response.status(200).json({data: request.body});
	});

	app.post('/api/drop/location', (request, response) => {
	});
	app.post('/api/drop/country', (request, response) => {
	});
	app.post('/api/drop/fashion_house', (request, response) => {
	});
	app.post('/api/drop/product', (request, response) => {
	});
	app.post('/api/drop/user_category', (request, response) => {
	});
	app.post('/api/drop/designer', (request, response) => {
	});
	app.post('/api/drop/person', (request, response) => {
	});
}