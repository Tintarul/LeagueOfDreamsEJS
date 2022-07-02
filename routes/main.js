var router = require('express').Router();  
var Lobby = require('../models/Lobby');
var fs = require("fs");
var path = require("path");

//PAGINATE USERS PLS
function paginate(req, res, next, adress, params) {
	var data = {};
	if(typeof params === 'undefined'){
		console.log("Params undefined");
		params = "Empty";
	}
	if(params == null){
		params = "Empty";
	}
	data['functions'] = 'join';
	data['params'] = params;
	console.log(data['functions']);
	console.log(data['params']);
	Lobby.find({}, function (err, results) {
		if (err) return next(err);
		res.render(adress, {
					user: req.user,
					lobbies: results,
					data: data
		});
	});
}

router.post('/search', function(req, res, next){
	res.redirect('/search?q=' + req.body.q);
});

router.get('/search', function(req, res, next){
	if (req.query.q){
		Lobby.find({$text: {$search: req.query.q}}, function (err, results) {
			if (err) return next(err);
			var DataAboutSearch = {
				results: results,
				query: req.query.q,
			}
			if(results.length == 0){
				res.redirect("/gameNotFound");
			} else {
				res.render('main/search-result',{
					data: DataAboutSearch
				});
			}
		});
	}
});
	
router.get("/", function(req, res, next){
	if(req.user){
		res.render('main/home', {user: req.user	});
	} else {
		res.redirect('/login');
	}
});

router.get('/js/jquery.min.js', function(req, res, next){
	res.redirect("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js");
});

router.get("/img", function (req, res, next){
	var name = req.query.file;
	let reqPath = path.join(__dirname, '../public/img/');
	let exists = fs.existsSync(reqPath + name + ".png");
	if(exists){
		res.sendFile(reqPath + name + ".png");
	} else {
		let reqPath = path.join(__dirname, '../public/img/');
		let exists = fs.existsSync(reqPath + name + ".jpg");
		if(exists){
			res.sendFile(reqPath + name + ".jpg");
		} else {
			res.send("404 NOT FOUND");
		}
	}
});
 
router.get("/js", function (req, res, next){
	var name = req.query.file;
	let reqPath = path.join(__dirname, '../public/js/');
	let exists = fs.existsSync(reqPath + name + ".js");
	if(exists){
		res.sendFile(reqPath + name + ".js");
	} else {
		let reqPath = path.join(__dirname, '../public/js/');
		let exists = fs.existsSync(reqPath + name + ".js");
		if(exists){
			res.sendFile(reqPath + name + ".js");
		} else {
			res.send("404 NOT FOUND");
		}
	}
});

router.get("/css", function (req, res, next){
	var name = req.query.file;
	let reqPath = path.join(__dirname, '../public/css/');
	let exists = fs.existsSync(reqPath + name + ".css");
	if(exists){
		res.sendFile(reqPath + name + ".css");
	} else {
		let reqPath = path.join(__dirname, '../public/css/');
		let exists = fs.existsSync(reqPath + name + ".css");
		if(exists){
			res.sendFile(reqPath + name + ".css");
		} else {
			res.send("404 NOT FOUND");
		}
	}
});

router.get("/file", function (req, res, next){
	var name = req.query.file;
	let reqPath = path.join(__dirname, '../public/resources/');
	let exists = fs.existsSync(reqPath + name);
	if(exists){
		res.sendFile(reqPath + name);
	} else {
		let reqPath = path.join(__dirname, '../public/resources/');
		let exists = fs.existsSync(reqPath + name);
		if(exists){
			res.sendFile(reqPath + name);
		} else {
			res.send("404 NOT FOUND");
		}
	}
});

module.exports = router;