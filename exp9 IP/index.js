var express = require('express');
var app = express();
var PORT = 3000;

// Single routing
var router = express.Router();

router.get('/', function (req, res, next) {
	console.log("Router Working");
	res.end();
})

app.use(router);

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
