'use strict';

var express = require('express');
var Week = require('../models/week'); // eller vad vår model-fil heter

var router = express.Router();

//router.get...
router.get('/', function (req, res) {
	// hämta ifrån mongoose
  //var car = mongoose.model('Week', weekSchema);	
  Week.find(function(err, weeks){
  	if(err){
  		return console.error('Error' + err);
  	} else {
  		//console.log('Weeks:'+weeks);
 		res.json({'weeks':weeks});
  	}
  });
});

router.get('/search/:s', function(req, res){
	var search = req.params.s;
	console.log(s);
	Week.find(function(err, weeks){
		if(err){
			return console.error('Error' + err)
		} else {
			res.json({'weeks':weeks});
		}
	});
});






//router.post...

//router.put...

//router.delete...

module.exports = router;

