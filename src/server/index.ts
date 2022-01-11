import { connect } from 'mongoose';
import config from '../common/config';
import app from './app';
import migrateUp from './tasks/migration/up';

const init = async () => {
  console.log('starting application');
  await migrateUp();
  await connect(config.MONGO_URL);

  app.listen(config.PORT, () => {
    console.log(`Application is listening on port ${config.PORT}`);
  });
};

init().catch(console.error);
