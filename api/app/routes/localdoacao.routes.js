module.exports = (app) => {
  const localdoacao = require("../controllers/localdoacao.controller.js");

  //Rotas campanha
  //criar nova campanha vinvulada a instituição
  app.post("/localdoacao", localdoacao.create);

  //listar dados das campanhas da instituição
  app.get("/localdoacao/:campanhaId", localdoacao.findAll);
};
