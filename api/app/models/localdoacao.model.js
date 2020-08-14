const sql = require("./db.js");

// constructor
const Localdoacao = function (localdoacao) {
  //this.codlocaldoacao = localdoacao.codlocaldoacao;
  this.codcampanha = localdoacao.codcampanha;
  this.dslocal = localdoacao.dslocal;
  this.dsendereco = localdoacao.dsendereco;
  this.dscep = localdoacao.dscep;
  this.dslinkmaps = localdoacao.dslinkmaps;
  this.dsfone1 = localdoacao.dsfone1;
};

Localdoacao.create = (newLocaldoacao, result) => {
  //console.log(newInstituicao);
  sql.query("INSERT INTO tbllocaldoacao SET ?", newLocaldoacao, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Criado Local: ", {
      id: res.insertId,
      ...newLocaldoacao,
    });

    result(null, { id: res.insertId, ...newLocaldoacao });
  });
};

Localdoacao.findById = (campanhaId, result) => {
  sql.query(
    `SELECT * FROM tbllocaldoacao WHERE codcampanha = ${campanhaId}`,
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

module.exports = Localdoacao;
