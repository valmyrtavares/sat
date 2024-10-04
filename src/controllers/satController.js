// src/controllers/satController.js
const satService = require("../services/satService");
const sefazService = require("../services/sefazService");
const logger = require("../utils/logger");

exports.enviarCupom = async (req, res) => {
  try {
    const dadosVenda = req.body;

    // Comunicação com o SAT para gerar o cupom
    const xmlCupom = await satService.gerarCupomFiscal(dadosVenda);

    // Enviar o XML para a SEFAZ
    const resposta = await sefazService.enviarParaSefaz(xmlCupom);

    res.status(200).json({ mensagem: "Cupom enviado com sucesso", resposta });
  } catch (error) {
    logger.error(`Erro ao enviar cupom: ${error.message}`);
    res
      .status(500)
      .json({ mensagem: "Erro ao enviar cupom", erro: error.message });
  }
};
