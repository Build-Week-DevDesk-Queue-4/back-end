const dbConnection = process.env.DATABASE_URL

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/devdesk.db3' },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    migrations: {
      directory: './data/migrations'
    },
  }


}; 

