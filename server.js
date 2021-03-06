/**
 * Created by boochoo on 06/06/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(config.database, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Database connected');
    }
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
//files in the public folder will be render
app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('*', function(req,res){
    res.sendFile(__dirname + '/public/app/views/index.html');

    console.log(__dirname);

});

app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Your server is at your service on port 4000');
    }
});