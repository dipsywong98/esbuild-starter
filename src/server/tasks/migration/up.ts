import { database, up } from 'migrate-mongo';
import './config';

async function migrateUp() {
  console.log('connecting to MongoDB...');
  const { db, client } = await database.connect();
  console.log('migrating up');
  await up(db, client);
  console.log('migrated up, closing connection');
  await client.close();
  console.log('migration done');
}

export default migrateUp;
