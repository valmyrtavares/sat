// src/app.js
const express = require("express");
const cors = require("cors");
const satRoutes = require("./routes/satRoutes");
const logger = require("./utils/logger");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/sat", satRoutes);

// Erro 404
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint não encontrado" });
});

// Middleware de erro
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ message: "Erro interno do servidor" });
});

module.exports = app;
