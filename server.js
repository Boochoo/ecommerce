/**
 * Created by boochoo on 06/06/16.
 */

var express = require('express');

var app = express();

app.listen(0000, function(err){
    if(err){
        throw err;
    }

    console.log('Your server is at your service on port 0000');
})