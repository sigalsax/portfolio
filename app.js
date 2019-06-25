var express = require('express');

var bodyParser= require('body-parser');
var nodemailer = require('nodemailer');
var connDetails = require('./connectionDeets');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

app.set('view engine', 'ejs');

// app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res){
  res.render('index');
});

app.get('/projects', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  // uses gmail as transport service
  var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
          user: connDetails.username,
          pass: connDetails.password
      }
  });

  const mailOptionsToContact = {
    from: connDetails.username, // sender address
    to: req.body.email, // list of receivers
    subject: 'Confirmation of retrieval from Sigal!', // Subject line
    html: 'Hi ' + req.body.firstname + ', <br><br> Thank you for reaching out! Talk soon! <br><br>Sigal'// plain text body
  };

  const mailOptionsToMe = {
    from: connDetails.username, // sender address
    to: connDetails.username, // list of receivers
    subject: 'New email from site!', // Subject line
    html: 'From: ' + req.body.firstname + '<br>Message: ' + req.body.message// plain text body
  };

  // handles the actual sending of the email to client
  transporter.sendMail(mailOptionsToContact, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  });

  // handles the actual sending of the email to me
  transporter.sendMail(mailOptionsToMe, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  });
});

app.get('/kosher-wanderer', function(req, res){
  res.render('kosher-wanderer');
});

app.get('/impact', function(req, res){
  res.render('impact');
});

app.get('/site', function(req, res){
  res.render('site');
});

app.get('/resume', function(req, res){
  res.render('resume');
});

// app.listen(3000);
app.listen(5000, () => console.log('SERVER RUNNING ON PORT 5000'));
