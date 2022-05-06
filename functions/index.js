import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import { getCars } from './src/cars.js';

const app = express();
app.use(cors());

app.get('/test', (req, res) => {
  res.send('This is actually working!');
});

app.get('/cars', getCars);

export const api = functions.https.onRequest(app);
