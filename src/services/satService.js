// src/services/satService.js
const usbHandler = require("../utils/usbHandler");
const xmlGenerator = require("../utils/xmlGenerator");
const logger = require("../utils/logger");

exports.gerarCupomFiscal = async (dadosVenda) => {
  try {
    // Enviar dados para o SAT via USB
    const respostaSat = await usbHandler.enviarDados(dadosVenda);

    // Gerar XML a partir da resposta do SAT
    const xml = xmlGenerator.criarXml(respostaSat);

    return xml;
  } catch (error) {
    logger.error(`Erro ao gerar cupom fiscal: ${error.message}`);
    throw error;
  }
};
