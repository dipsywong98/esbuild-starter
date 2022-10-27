import express from 'express';
import morgan from 'morgan';
import config from '../common/config';
import logger from './logger';
import { Sample } from './models/Sample';

const app = express();

app.use('/', express.static('client'));
app.use(morgan('tiny', {
  stream: {
    write: (message) => logger.http(message),
  },
}));
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
app.get('/404', (req, res) => {
  res.status(404).send('not found');
});
app.get('/api/sample', async (req, res) => {
  const sample = await Sample.findOne({});
  res.send(sample);
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Error when handling ${req.path} ${err.stack ?? ''}`);
  res.sendStatus(500);
  next();
});

export default app;
