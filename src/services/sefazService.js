// src/services/sefazService.js
const axios = require("axios");
const logger = require("../utils/logger");

exports.enviarParaSefaz = async (xml) => {
  try {
    const response = await axios.post(process.env.SEFAZ_ENDPOINT, { xml });
    return response.data;
  } catch (error) {
    logger.error(`Erro ao enviar para a SEFAZ: ${error.message}`);
    throw error;
  }
};
