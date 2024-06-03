var database = require("../database/config");

function ultimas() {

    var instrucaoSql = `select count(nomeInstrumento) as quantidade from questionario 
    group by nomeInstrumento order by nomeInstrumento;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ultimas,
 
}
