const path = require("path");
const express = require("express");
const cors = require("cors");
const legoSetsRouter = require("./routes/legoSets/legoSets.router");
const missingPiecesRouter = require("./routes/missingPieces/missingPieces.router.js");
const db = require("./database/dbconfig");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

db.connect((error, connection) => {
  if (error) {
    throw error;
  } else {
    console.log("db connected");
  }
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api", legoSetsRouter);
app.use("/api", missingPiecesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
