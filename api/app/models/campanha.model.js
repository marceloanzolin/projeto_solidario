const sql = require("./db.js");

// constructor
const Campanha = function (campanha) {
  this.codinstituicao = campanha.codinstituicao;
  this.dscampanha = campanha.dscampanha;
  this.dsdescricao = campanha.dsdescricao;
  this.dsstatus = campanha.dsstatus;
  this.dtinicio = campanha.dtinicio;
  this.dtfim = campanha.dtfim;
  this.dsitemdoar = campanha.dsitemdoar;
};

Campanha.create = (newCampanha, result) => {
  //console.log(newInstituicao);
  sql.query("INSERT INTO tblcampanha SET ?", newCampanha, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Criado campanha: ", {
      id: res.insertId,
      ...newCampanha,
    });

    result(null, { id: res.insertId, ...newCampanha });
  });
};

Campanha.findById = (instituicaoId, result) => {
  sql.query(
    `SELECT * FROM tblcampanha WHERE codinstituicao = ${instituicaoId}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("Campanha encontrada: ", res);
        result(null, res);
        return;
      }

      // not found Customer with the id
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = Campanha;
