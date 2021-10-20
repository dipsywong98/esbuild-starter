import express from 'express';
import config from '../common/config';

const app = express();

app.use('/', express.static('build'));
app.get('/api/ping', (req, res) => {
  res.send(config.HELLO_WORLD);
});

export default app;
