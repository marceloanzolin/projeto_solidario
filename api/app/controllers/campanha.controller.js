const Campanha = require("../models/campanha.model.js");

exports.create = (req, res) => {
  // Valida o request
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar em branco.",
    });
  }

  const campanha = new Campanha({
    codcampanha: req.body.codcampanha,
    codinstituicao: req.body.codinstituicao,
    dscampanha: req.body.dscampanha,
    dsdescricao: req.body.dsdescricao,
    dsstatus: req.body.dsstatus,
    dtinicio: req.body.dtinicio,
    dtfim: req.body.dtfim,
    dsitemdoar: req.body.dsitemdoar,
  });

  Campanha.create(campanha, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ocorreu erro ao criar a campanha",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Campanha.findById(req.params.instituicaoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Instituição não encontrada. Id:  ${req.params.instituicaoId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Erro ao recuperar instituição Id: " + req.params.instituicaoId,
        });
      }
    } else res.send(data);
  });
};
