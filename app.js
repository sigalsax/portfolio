var express = require('express');

var app = express();

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/projects', function(req, res){
  res.render('projects');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact');
});

app.get('/kosher-wanderer', function(req, res){
  res.render('kosher-wanderer');
});

app.listen(3000);
