var aquarioModel = require("../models/aquarioModel");

function buscarAquariosPorEmpresa(req, res) {
  var id = req.params.id;

  aquarioModel.buscarAquariosPorEmpresa(id).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar as pontuações: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var pontuacao = req.body.pontuacaoServer;
  var instrumento = req.body.instrumentoServer;
  var id_usuario = req.body.idServer;
  console.log("cadastrando pontuacao: " + pontuacao + " e instrumento: " + instrumento + "fkuser" + id_usuario)

  if (pontuacao == undefined) {
    res.status(400).send("pontuacao está undefined!");
  } else if (instrumento == undefined) {
    res.status(400).send("instrumento está undefined!");
  } else if (id_usuario == undefined) {
    res.status(400).send("instrumento está undefined!");
  } else {


    aquarioModel.cadastrar(id_usuario, pontuacao, instrumento)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o questionário! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}