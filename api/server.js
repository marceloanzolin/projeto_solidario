const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// rota raiz
app.get("/", (req, res) => {
  res.json({ message: "Olá, seja bem vindo a aplicação" });
});

require("./app/routes/instituicao.routes.js")(app);

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
