'use strict';

const commandHandler = require("./src/command_handler");

const line = require('@line/bot-sdk');
const express = require('express');

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

  // put message processing HERE
  // params: event.message.text
  // return: text
  const echo = { type: 'text', text: command_handler.handleCommand(event.message.text) };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
