// src/routes/satRoutes.js
const express = require("express");
const satController = require("../controllers/satController");

const router = express.Router();

// Rota para gerar e enviar cupom fiscal
router.post("/enviar-cupom", satController.enviarCupom);

// Outras rotas relacionadas ao SAT podem ser adicionadas aqui

module.exports = router;
