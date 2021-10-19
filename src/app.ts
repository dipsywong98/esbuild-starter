import express from 'express';
import config from './config';

const app = express();

app.get('/', (req, res) => {
  res.send(config.HELLO_WORLD);
});

export default app;
