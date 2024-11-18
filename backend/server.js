const express = require("express");
const morgan = require("morgan");
const app = express();
const knex = require("./db/knex");

// GET /api/health
app.get("/api/health", async (req, res) => {
  res.status(200).send("OK");
});

// GET /api/guess_records
app.get("/api/guess_records", async (req, res) => {
  try {
    const guess_records = await knex("guess_records").select("*");
    res.status(200).json(guess_records);
  } catch (err) {
    res.status(500).json({ error: "Failed to get guess_records" });
  }
});

module.exports = app;
