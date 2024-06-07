var database = require("../database/config");

function ultimas() {

    var instrucaoSql = `select count(nomeInstrumento) as quantidade from questionario 
    group by nomeInstrumento order by nomeInstrumento;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimasaulas() {

    var instrucaoSql = `SELECT COUNT(indice) AS qtd_assistidas 
FROM visualizacao 
GROUP BY indice 
ORDER BY indice;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ultimas,
    ultimasaulas
}
