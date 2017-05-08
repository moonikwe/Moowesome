var express = require('express');
var consolidate = require('consolidate');
var app  = express();

app.set('views', './templates');
app.engine('html', consolidate.nunjucks);
app.use('/static', express.static('./static'));
app.get('/', function(request, response){
	response.render('index.html');
});

app.listen(3000, function(request, response){
	console.log('Server Listening');
});