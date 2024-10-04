// src/utils/xmlGenerator.js
const { create } = require("xmlbuilder2");
const logger = require("./logger");

exports.criarXml = (dados) => {
  try {
    const doc = create({ version: "1.0", encoding: "UTF-8" })
      .ele("CupomFiscal")
      .ele("DadosVenda")
      .ele("Item")
      .ele("Descricao")
      .txt(dados.descricao)
      .up()
      .ele("Quantidade")
      .txt(dados.quantidade)
      .up()
      .ele("Preco")
      .txt(dados.preco)
      .up()
      .up()
      .up()
      .up()
      .end({ prettyPrint: true });

    return doc;
  } catch (error) {
    logger.error(`Erro ao criar XML: ${error.message}`);
    throw error;
  }
};
