module.exports = (app) => {
  const instituicao = require("../controllers/instituicao.controller.js");

  app.post("/instituicao", instituicao.create);
  app.get("/instituicao", instituicao.findAll);
  app.get("/instituicao/:instituicaoId", instituicao.findOne);
  app.put("/instituicao/:instituicaoId", instituicao.update);
  app.delete("/instituicao/:instituicaoId", instituicao.delete);
  app.delete("/instituicao", instituicao.deleteAll);
};
