/**
 * Created by boochoo on 06/06/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Your server is at your service on port 4000');
    }
});