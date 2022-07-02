var router = require('express').Router();
var Lobby = require('../models/Lobby');


router.get('/api', function(req, res, next){
	console.log('Api call');
});

module.exports = router;