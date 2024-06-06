var medidaModel = require("../models/medidaModel");

function ultimas(req, res) {


    medidaModel.ultimas().then(function (instrumento) {
        if (instrumento.length > 0) {
            res.status(200).json(instrumento);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimasaulas(req, res) {


    medidaModel.ultimasaulas().then(function (indice) {
        if (indice.length > 0) {
            res.status(200).json(indice);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    ultimas,
    ultimasaulas

}