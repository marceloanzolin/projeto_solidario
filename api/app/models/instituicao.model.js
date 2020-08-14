const sql = require("./db.js");

// constructor
const Instituicao = function (instituicao) {
  this.dsemail = instituicao.dsemail;
  this.dssenha = instituicao.dssenha;
  this.nminstituicao = instituicao.nminstituicao;
  this.dsendereco = instituicao.dsendereco;
  this.dsdescricao = instituicao.dsdescricao;
  this.dscep = instituicao.dscep;
  this.dsfone1 = instituicao.dsfone1;
  this.dsfone2 = instituicao.dsfone2;
  this.dslinkmaps = instituicao.dslinkmaps;
  this.dsstatus = instituicao.dsstatus;
  this.logo = instituicao.logo;
};

Instituicao.create = (newInstituicao, result) => {
  //console.log(newInstituicao);
  sql.query("INSERT INTO tblinstituicao SET ?", newInstituicao, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Criado instituicao: ", {
      id: res.insertId,
      ...newInstituicao,
    });

    result(null, { id: res.insertId, ...newInstituicao });
  });
};

Instituicao.findById = (instituicaoId, result) => {
  sql.query(
    `SELECT * FROM tblinstituicao WHERE codinstituicao = ${instituicaoId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Instituição encontrada: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Instituicao.getAll = (result) => {
  sql.query("SELECT * FROM tblinstituicao", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tblnstituicoes: ", res);
    result(null, res);
  });
};

Instituicao.updateById = (instituicaoId, instituicao, result) => {
  sql.query(
    "UPDATE tblinstituicao SET dsemail = ?, dssenha = ?, nminstituicao = ?, dsendereco = ?, dsdescricao = ?, dscep = ?, dsfone1 = ?, dsfone2 = ?, dslinkmaps = ?, dsstatus = ?, logo = ? WHERE codinstituicao = ?",

    [
      instituicao.email,
      instituicao.dssenha,
      instituicao.nminstituicao,
      instituicao.dsendereco,
      instituicao.dsdescricao,
      instituicao.dscep,
      instituicao.dsfone1,
      instituicao.dsfone2,
      instituicao.dslinkmaps,
      instituicao.dsstatus,
      instituicao.logo,
      instituicaoId,
    ],

    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Instituicao atualizada: ", {
        codinstituicao: instituicaoId,
        ...instituicao,
      });
      result(null, { codinstituicao: instituicaoId, ...instituicao });
    }
  );
};

Instituicao.remove = (id, result) => {
  sql.query(
    "DELETE FROM tblinstituicao WHERE codinstituicao = ?",
    id,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Id instituicao excluída: ", id);
      result(null, res);
    }
  );
};

Instituicao.removeAll = (result) => {
  sql.query("DELETE FROM tblinstituicao", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deletados ${res.affectedRows} instituicoes`);
    result(null, res);
  });
};

Instituicao.login = ({ dsemail, dssenha }, result) => {
  sql.query(
    "SELECT * FROM tblinstituicao WHERE dsemail like '" +
      dsemail +
      "' and dssenha like '" +
      dssenha +
      "'",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Usuário ou senha incorreta: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Instituicao;
