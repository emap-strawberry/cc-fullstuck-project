const express = require("express");
const morgan = require("morgan");
const app = express();
// const healthCheckRoutes = require("./routes/healthCheckRoutes");
// const todoRoutes = require("./routes/todoRoutes");
// const logger = require("./middleware/logger");

// app.use(morgan('dev'))
// app.use(logger)

// /api/health
// app.use("/api/health", healthCheckRoutes);

// /api/todos
// app.use("/api/todos", todoRoutes);

//server.jsの中にすべて書く場合
const knex = require("./db/knex");
app.get("/api/guess_records", async (req, res) => {
  try {
    const guess_records = await knex("guess_records").select("*");
    res.status(200).json(guess_records);
  } catch (err) {
    res.status(500).json({ error: "Failed to get guess_records" });
  }
});

module.exports = app;
