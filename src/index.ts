import config from './config';
import app from './app';

app.listen(config.PORT, () => {
  console.log(`listening at ${config.PORT}`);
});
