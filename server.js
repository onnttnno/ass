//this is local server file for manage event which request form server



var express =require('express');
var path = require('path');
var bodyPasser = require('body-parser');


var index = require('./routes/index');
var result = require('./routes/result');

var app = express();

//this is server port
var port = 2692;


//set UI file and directory
app.set('view',path.join(__dirname,'view'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set client file is static folder
app.use(express.static(path.join(__dirname,'client')));


//Body parser midleware(it handerler event in this program)
app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extended: false}));   


//rount for trafix event which request

//home page 
app.use('/',index);
// Result page for Retrived datas frome MongoDB
app.use('/result',result);

app.listen(port,function(){

    console.log('Hi I am your server .I am stay at '+port);
});
