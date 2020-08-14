const Localdoacao = require("../models/localdoacao.model.js");

exports.create = (req, res) => {
  // Valida o request
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar em branco.",
    });
  }

  const localdoacao = new Localdoacao({
    codlocaldoacao: req.body.codlocaldoacao,
    codcampanha: req.body.codcampanha,
    dslocal: req.body.dslocal,
    dsendereco: req.body.dsendereco,
    dscep: req.body.dscep,
    dslinkmaps: req.body.dslinkmaps,
    dtfim: req.body.dtfim,
    dsfone1: req.body.dsfone1,
  });

  Localdoacao.create(localdoacao, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ocorreu erro ao criar o local de doação",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Localdoacao.findById(req.params.campanhaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Instituição não encontrada. Id:  ${req.params.campanhaId}.`,
        });
      } else {
        res.status(500).send({
          message: "Erro ao recuperar instituição Id: " + req.params.campanhaId,
        });
      }
    } else res.send(data);
  });
};
