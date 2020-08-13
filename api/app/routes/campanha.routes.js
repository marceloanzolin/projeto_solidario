module.exports = (app) => {
  const campanha = require("../controllers/campanha.controller.js");

  //Rotas campanha
  //criar nova campanha vinvulada a instituição
  app.post("/campanha", campanha.create);

  //listar dados das campanhas da instituição
  app.get("/campanha/:instituicaoId", campanha.findAll);
};
