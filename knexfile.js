require("dotenv").config({ path: "./.env.local" });

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./backend/db/migrations",
    },
    seeds: {
      directory: "./backend/db/seeds",
    },
  },
};
