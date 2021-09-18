export = {
  host: 'localhost',
  type: 'postgres',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'mira_api',
  entities: ['./dist/models/*.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    migrationsDir: './dist/database/migrations',
  },
};
