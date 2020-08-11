const Instituicao = require("../models/instituicao.model.js");

exports.create = (req, res) => {
  // Valida o request
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar em branco.",
    });
  }

  const instituicao = new Instituicao({
    dsemail: req.body.dsemail,
    dssenha: req.body.dssenha,
    nminstituicao: req.body.nminstituicao,
    dsendereco: req.body.dsendereco,
    dsdescricao: req.body.dsdescricao,
    dscep: req.body.dscep,
    dsfone1: req.body.dsfone1,
    dsfone2: req.body.dsfone2,
    dslinkmaps: req.body.dslinkmaps,
    dsstatus: req.body.dsstatus,
    logo: req.body.logo,
  });

  Instituicao.create(instituicao, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ocorreu erro ao criar a instituicao",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Instituicao.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ocorreu erro ao buscar as instituções.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Instituicao.findById(req.params.instituicaoId, (err, data) => {
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

exports.update = (req, res) => {
  // Valida request
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo não pode estar em branco.",
    });
  }

  console.log(req.body);

  Instituicao.updateById(
    req.params.instituicaoId,
    new Instituicao(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Instituição não encontrada. Id:  ${req.params.instituicaoId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Erro ao atualizar a institução. Id: " + req.params.instituicaoId,
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Instituicao.remove(req.params.instituicaoId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Instutuição não encontrada. Id: ${req.params.instituicaoId}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Não foi possível excluir a instituição. Id: " +
            req.params.instituicaoId,
        });
      }
    } else res.send({ message: `Instituição excluída com sucesso!` });
  });
};

exports.deleteAll = (req, res) => {
  Instituicao.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao excluir todas as isntituições",
      });
    else
      res.send({
        message: `Todas as instituições foram excluídas com sucesso!`,
      });
  });
};
