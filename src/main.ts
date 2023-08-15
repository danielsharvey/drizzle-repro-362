import { Pool, createConnection, createPool } from 'mysql2';
import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';

import * as schema from './schema';
import { InferModel } from 'drizzle-orm';

// ./node_modules/.bin/drizzle-kit generate:mysql
// RUN_MIGRATIONS=1 nx run drizzle-repro:serve
// nx run drizzle-repro:serve

const connectionProps = {
  user: 'root',
  password: '',
  port: 3306,
  host: 'localhost',
  database: 'tmp',
};

console.log('drizzle-repro');

(async function () {

  if(process.env['RUN_MIGRATIONS']) {
    const connection = createConnection(connectionProps);
    const db = drizzle(connection);
    try {
      console.log('Running migrations...');
      await migrate(db, { migrationsFolder: 'drizzle' });
      console.log('Done');
      process.exit(0);
    } catch(e) {
      console.error('migrate() failed: '+e);
      console.error(e);
      process.exit(1);
    }
  } else {

    const connectionPool = createPool(connectionProps);

    const db = drizzle(connectionPool, { logger: true, schema: schema });

    type theType = InferModel<typeof schema.drizzleRepro, 'insert'>;

    const value: theType = {
      id: '__' + Date.now(),
      someField: 'Some value',
      // fieldThatDoesNotExist: 'Another value',
    };

    value['fieldThatDoesNotExist'] = 'Another value';

    await db.insert(schema.drizzleRepro).values(value);

  }

})();