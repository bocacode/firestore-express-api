import functions from 'firebase-functions';
import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.send('This is actually working!');
});

app.get('/', (req, res) => {
  res.send('This is HOME');
});

export const api = functions.https.onRequest(app);
