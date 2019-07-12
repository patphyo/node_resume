const express = require('express');
const app = express();
const path = require('path');


const favicon = require('serve-favicon');

app.use(favicon(__dirname + '/images/favicon.ico'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, 'test.html'));
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});