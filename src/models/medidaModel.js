var database = require("../database/config");

function ultimas() {
    var instrucaoSql = `
    select NomeInstrumento from questionario 

    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ultimas
};
