const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");
require("dotenv-safe").config();

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "A conexão com o banco de dados falhou \n Erro : " +
        JSON.stringify(err, undefined, 2)
    );
});

app.listen(3000, () => console.log("Servidor em andamento na porta : 3000"));

//Buscar todas as instituições cadastradas
app.get("/instituicoes", (req, res) => {
  mysqlConnection.query("SELECT * FROM tblinstituicao", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

/*
//Get an employees
app.get("/employees/:id", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Employee WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

//Delete an employees
app.delete("/employees/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM Employee WHERE EmpID = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Deleted successfully.");
      else console.log(err);
    }
  );
});

//Insert an employees
app.post("/employees", (req, res) => {
  let emp = req.body;
  var sql =
    "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
  mysqlConnection.query(
    sql,
    [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
    (err, rows, fields) => {
      if (!err)
        rows.forEach((element) => {
          if (element.constructor == Array)
            res.send("Inserted employee id : " + element[0].EmpID);
        });
      else console.log(err);
    }
  );
});

//Update an employees
app.put("/employees", (req, res) => {
  let emp = req.body;
  var sql =
    "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
    CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
  mysqlConnection.query(
    sql,
    [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary],
    (err, rows, fields) => {
      if (!err) res.send("Updated successfully");
      else console.log(err);
    }
  );
});
*/
