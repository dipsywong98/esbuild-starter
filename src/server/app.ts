import express from 'express';
import config from '../common/config';

const app = express();

app.use('/', express.static('client'));
app.get('/api/ping', (req, res) => {
  res.send(config.HELLO_WORLD);
});
app.get('/api/releaseInfo', (req, res) => {
  res.json({
    app: config.APP_NAME,
    version: config.APP_VERSION,
    hash: config.APP_HASH,
  });
});

export default app;
