'use strict';

const axios = require('axios');
const url = require('url');
const commandHandler = require("./src/chatbot/utils/command_handler");

const line = require('@line/bot-sdk');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const defaultAccessToken = '8rt2fP+mPZc8HyWUcAmboT6QxcxrLxOukxtXYNLGr1lqX/es75bH1CE6HPo0bA+583gSe16srUzxTwZoRnfWo7azEkhwd4HmE2GWggUmRR+9Wn+JvxLcXQ5Psd5vUFFHBKC5V7IzsP0olLP8n8qOsgdB04t89/1O/w1cDnyilFU=';
const defaultChannelSecret = '312c6a06e69bc8ffe0aec3bb9b98a22e';

// create LINE SDK config from env variables
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || defaultAccessToken,
  channelSecret: process.env.CHANNEL_SECRET || defaultChannelSecret,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require API routes into the application.
require('./src/server/routes')(app);

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // // put message processing HERE
  // // params: event.message.text
  // // return: message object
  // const message = commandHandler.handleCommand(event.message.text);

  // // use reply API
  // if(message) {
  //   return client.replyMessage(event.replyToken, message);
  // }
  commandHandler.handleCommand(event.message.text).then(message => {
    if(message) {
      return Promise.resolve(client.replyMessage(event.replyToken, message));
    }
  });
}

// Debugging function
// async function debug(text) {
//   let result;

//   // // put message processing HERE
//   // // params: event.message.text
//   // // return: message object
//   // const message = commandHandler.handleCommand(event.message.text);

//   // // use reply API
//   // if(message) {
//   //   return client.replyMessage(event.replyToken, message);
//   // }
//   let message = await commandHandler.handleCommand(text);
//   return message;
// }

// listen on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
  // debug('!role list').then(message => console.log(JSON.stringify(message)));

  // For debugging purpose
  // console.log(JSON.stringify(commandHandler.handleCommand("!company bukalapak")));
  // commandHandler.handleCommand("!company list").then(response => {
  //   console.log(JSON.stringify(response));
  // });

});
