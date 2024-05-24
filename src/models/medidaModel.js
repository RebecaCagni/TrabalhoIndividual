var database = require("../database/config");

function buscarUltimasMedidas(nomeInstrumento) {
    var instrucaoSql = `
        SELECT nomeInstrumento, COUNT(*) as quantidade
        FROM instrumento
        GROUP BY '${nomeInstrumento}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas
};
