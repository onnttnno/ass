var express =require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('ResultConlections', ['ResultConlections']);
//when url is / we will show a index page
router.get('/',function(req,res,next){

    db.ResultCollections.find(function (err, docs) {
    // docs is an array of all the documents in mycollection 
    if (err) throw err;
    
    //show json file 
    res.json(docs);

});

});

module.exports = router;