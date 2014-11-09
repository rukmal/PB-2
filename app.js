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
var client = require('twilio')('AC6bcdd4b4386163cef2fa8141b6330bf2', '3f5cedbfd376649646600b8548ed0014');

var app = express();

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());

var router = express.Router();

router.get('/', function (req, res) {
	res.send('It\'s working!');
});

app.use('/', router)
var port = process.env.port || 3000;
app.listen(port);
console.log('Express server listening on port ' + port);