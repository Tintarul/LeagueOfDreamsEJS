var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var ejs_mate = require('ejs-mate');// page format EJS
var cookieParser = require('cookie-parser');
var flash = require('express-flash');
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const { Server } = require("socket.io");
var http = require('http');
 
var secret = require('./config/secret');

var app = module.exports.app = express();

mongoose.connect(secret.database, function(err){
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to the database")
	}
});

// Middleware

app.use(express.static(__dirname + '/public'));
// For Morgan Logger
// var morgan = require('morgan');
// app.use(morgan('dev'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: secret.secretKey,
	cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

app.engine('ejs', ejs_mate);
app.set('view engine', 'ejs');
var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');
var apiRoutes = require('./api/api');

app.use(mainRoutes);
app.use(userRoutes);
app.use('/api', apiRoutes);
app.get('*', function (req, res, next){
	res.redirect('/');
});

var server = http.createServer(app);

server.listen(secret.port, function(err) {
	if (err) throw err;
	console.log("Server is Running" + secret.port);
});

const io = new Server(server);
var ioFramework = require('./middlewares/io.js')(io);

process.on('SIGTERM', () => {
	console.info('SIGTERM signal received.');
});

process.on('beforeExit', (code) => {
	console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
	console.info('Process exit event with code: ', code);
});

