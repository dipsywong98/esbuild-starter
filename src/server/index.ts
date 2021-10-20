import config from '../common/config';
import app from './app';

app.listen(config.PORT, () => {
  console.log(`listening at ${config.PORT}`);
});

export default '1';
