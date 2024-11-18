const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const knex = require("./db/knex");

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

// JSON
app.use(express.json());

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

// GET /api/guess_records
app.post("/api/guess_records", async (req, res) => {
  try {
    const guess_records = await knex("guess_records").insert({
      user_name: req.body.user_name,
      guess: req.body.guess,
    });
    res.status(200).json(guess_records);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to insert record into guess_records" });
  }
});

module.exports = app;
