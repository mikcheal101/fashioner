// modules =======================================================
var express 		= require ('express');
var app 			= express ();
var server 			= require ('http').createServer(app);
var bodyParser		= require ('body-parser');
var path			= require ('path');
var favicon 		= require ('serve-favicon');
var cookieParser 	= require ('cookie-parser');
var socket			= require ('socket.io')(server);
var multer          = require ('multer');
var flash			= require ('connect-flash');
var session			= require ('express-session');
var fs 				= require ('fs');
var excel 			= require("xlsx-to-json-lc");


// configuation ===================================================
// 
var tmp 				= multer.diskStorage ({
	destination : function (req, file, cb) {
		cb (null, 'public/uploads/tmp')
	}, 
	filename : function (req, file, cb) {
		cb (null, 'tmp_file')
	}
});
var logos 				= multer.diskStorage ({
	destination : function (req, file, cb) {
		cb (null, 'public/uploads/logos')
	}, 
	filename : function (req, file, cb) {
		cb (null, file.originalname)
	}
});
var products			= multer.diskStorage ({ 
	destination : function (req, file, cb) {
		cb (null, 'public/uploads/products/')	
	}, 
	filename : function (req, file, cb) {
		cb (null, file.originalname)
	}
});
var passports			= multer.diskStorage ({ 
	destination : function (req, file, cb) {
		cb (null, 'public/uploads/passports/')	
	}, 
	filename : function (req, file, cb) {
		cb (null, file.originalname)
	}
});

app.io 					= socket;
app.path 				= path;
app.fs 					= fs;
app.pgp					= require ('pg-promise')();

app.conn 				= process.env.DATABASE_URL || 'postgres://mikkytrionze:mikkytrionze@127.0.0.1:5432/needles.com';
app.db 					= app.pgp (app.conn);
app.bcrypt 				= require ('bcryptjs');

app.tmp_storage 		= multer ({ storage: tmp}).single ('file');
app.logos	 			= multer ({ storage: logos}).single ('file');
app.products 			= multer ({ storage: products}).fields ([{name:'main_image' ,maxCount:1}, {name:'_images'}]);
app.passports 			= multer ({ storage: passports }).single ('file');	 

// port details  ==================================================
var port 	= process.env.PORT || 9090;

// get post return as json  =======================================
app.use (bodyParser.json ());
app.use (bodyParser.json ({ type: 'application/vnd.api+json' }));
app.use (bodyParser.urlencoded ({ extended: true }));


// access angular dir =============================================
app.use (express.static (path.join (__dirname, 'public'))); 

// session and flash setting ======================================
app.use (session ({
	secret 				: 'th1sisd53cretk3y4thew3bAppl1cationNeedl3s.com', 
	resave				:true, 
	saveUninitialized	:true,
	cookie : {
		maxAge: 86400000,
		resave : true
	}
}));
app.use (flash ());

// enable cors ====================================================
/*
app.use (function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

// access routing dir =============================================
require ('./app/routes')(app);

// not existant
app.get ('*', function (request, response, next) {
	var p = app.path.join (__dirname, './public/index.html');
	response.sendFile (p);
});

// start running server ===========================================
app.listen (port);
