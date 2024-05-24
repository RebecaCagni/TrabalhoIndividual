var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM instrumento a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(id_usuario, pontuacao, instrumento) {
  
  var instrucaoSql = `INSERT INTO questionario (fkUsuario, pontuacao, nomeInstrumento)  VALUES (${id_usuario}, ${pontuacao},  '${instrumento}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
