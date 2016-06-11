var express = require('express');
var http = require('http');
var router = express.Router();

function routeRequest(path, callback) {
	var options = {
		"protocol": "http:",
		"host": "www.roblox.com",
		"path": path
	};

	var req = http.get(options, function(res) {
		var bodyChunks = [];
		res.on("data", function(chunk) {
			bodyChunks.push(chunk);
		}).on("end", function() {
			var body = Buffer.concat(bodyChunks);
			console.log("BODY: " + body);
			callback(body);
		});
	});

	req.on("error", function(e) {
		console.log("ERROR: " + e.message);
		callback(e);
	});
}

router.get('/Asset/AvatarAccoutrements', function(req, res, next) {
	var userId = req.query.userId;
	routeRequest("/Asset/AvatarAccoutrements.ashx?userId=" + userId, function(result) {
		res.send(result);
	});
});

module.exports = router;
