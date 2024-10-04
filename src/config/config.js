// src/config/config.mjs
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Exporta as configurações para serem usadas em outros módulos
export const config = {
  // Configurações do Servidor
  port: process.env.PORT || 3000,

  // Configurações do SAT
  sat: {
    vendorId: process.env.SAT_VENDOR_ID,
    productId: process.env.SAT_PRODUCT_ID,
    devicePath: process.env.SAT_DEVICE_PATH || "/dev/ttyUSB0", // Exemplo para sistemas Unix
    // Adicione outras configurações relacionadas ao SAT aqui
  },

  // Configurações da SEFAZ
  sefaz: {
    endpoint: process.env.SEFAZ_ENDPOINT,
    // Adicione outras configurações relacionadas à SEFAZ aqui
  },

  // Configurações de Logging
  logger: {
    level: process.env.LOG_LEVEL || "info",
    file: process.env.LOG_FILE || "logs/combined.log",
    errorFile: process.env.LOG_ERROR_FILE || "logs/error.log",
  },

  // Outras configurações gerais
  // ...
};
