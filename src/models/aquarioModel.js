var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM instrumento a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(instrumento, pontuacao) {
  
  var instrucaoSql = `INSERT INTO (idInstrumento, fkUsuario, fkQuestionario, pontuacao, nomeInstrumento) instrumento VALUES (${instrumento}, ${pontuacao})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
