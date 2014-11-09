/**
 * @author Rukmal Weerawarana
 *
 * @description API functions for the Rendezvous App
 */

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var bcrypt = require('bcrypt');

var twilio_config = JSON.parse(fs.readFileSync('./config.json'));

var client = require('twilio')(twilio_config.account_sid, twilio_config.auth_token);

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
	for (var i = 1; i < 99; i++) {
		console.log(i);
		client.messages.create({
			body: "",
			to: "+14254952195",
			from: "+13609306560"
		}, function(err, message) {
			console.log(message);
			console.log(err);
		});
	}
});

app.use('/', router)
var port = process.env.port || 3000;
app.listen(port);
console.log('Express server listening on port ' + port);