const express = require("express");
const missingPiecesController = require("./missingPieces.controller");
const missingPiecesRouter = express.Router();

const { index } = missingPiecesController;

missingPiecesRouter.get("/missing-pieces", index);

module.exports = missingPiecesRouter;
