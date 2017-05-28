'use strict';

var restify = require('restify');
var builder = require('botbuilder');
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url); 
});

// setup bot credentials
var connector = new builder.ChatConnector({
  appId: '{YOURAPPID}',
  appPassword: '{YOURAPPPWD}'
});

var bot = new builder.UniversalBot(connector);

// send simple notification
function sendProactiveMessage(address,message) {
  var msg = new builder.Message().address(address);
  msg.text(message);
  msg.textLocale('en-US');
  bot.send(msg);
}

var savedAddress;
server.post('/api/messages', connector.listen());

// Do GET this endpoint to delivey a notification
server.post('/api/notify', (req, res, next) => {
   
    sendProactiveMessage(req.body.address,req.body.message);
    res.send('triggered');
    next();
  }
);

// root dialog
// bot.dialog('/', function(session, args) {

//   savedAddress = session.message.address;

//   var message = 'Hello! In a few seconds I\'ll send you a message proactively to demonstrate how bots can initiate messages.';
//   session.send(message);
  
//   message = 'You can also make me send a message by accessing: ';
//   message += 'http://localhost:' + server.address().port + '/api/CustomWebApi';
//   session.send(message);

//   setTimeout(() => {
//    sendProactiveMessage(savedAddress);
//   }, 5000);
// });