export = {
  host: 'localhost',
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'mira_api',
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
