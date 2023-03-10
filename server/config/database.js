const path = require('path');


//postgres://admin:PKFlwTNqaTG9UQtsabc7GU6WqZaj1Kpd@dpg-cg55keseoogsv95evc90-a.oregon-postgres.render.com/maindb_n6wp

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true)
    },
    useNullAsDefault: true,
  },
});
