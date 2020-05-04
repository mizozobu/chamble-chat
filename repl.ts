import 'dotenv/config';
import { start } from 'repl';
import { createConnection } from 'typeorm';
import * as globby from 'globby';
import * as camelcase from 'camelcase';

/**
 * Rails like console for typeorm.
 * Type ".editor" to enter multi-line mode and "ctrl + D" to exit.
 */
(async (): Promise<void> => {
  const connection = await createConnection({
    type: process.env.DB_TYPE as 'mysql' | 'mariadb',
    host: process.env.DATABASE_USER,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/src/**/*.entity{.ts,.js}`],
    synchronize: true,
  });

  const replServer = start({
    prompt: `${process.env.DB_NAME} > `,
    ignoreUndefined: true,
  });

  const entities = await globby(`${__dirname}/src/**/*.entity{.ts,.js}`);
  // eslint-disable-next-line no-restricted-syntax
  for (const path of entities) {
    // eslint-disable-next-line no-await-in-loop
    const exported = await import(path);
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const name in exported) {
      const repositoryName = `${camelcase(name)}Repository`;
      const Entitiy = exported[name];
      replServer.context[repositoryName] = connection.getRepository(Entitiy);
    }
  }
})();
