var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.json({ msg: 'API is running' });
});

router.post('/', function(req, res, next) {
	console.log('req',req.body);

	 // TODO: validate the actual user user
	var profile = {
	first_name: 'John',
	last_name: 'Doe',
	email: 'john@doe.com',
	id: 123
	};

	// we are sending the profile in the token
	var token = jwt.sign(profile, 'supersecret', { expiresInMinutes: 60*5 });

	res.json({token: token});

});

module.exports = router;