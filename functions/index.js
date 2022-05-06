const functions = require("firebase-functions");
const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('This is actually working!');
});

app.get('/', (req, res) => {
  res.send('This is HOME');
});

exports.app = functions.https.onRequest(app);
