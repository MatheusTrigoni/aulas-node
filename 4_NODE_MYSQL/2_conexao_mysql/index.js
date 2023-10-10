const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

// Definindo o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Pasta de arquivos estáticos como CSS, imagens...
app.use(express.static("public"));

// Trabalhar com dados no formato JSON
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.render("home");
});

// Conexão com MySQL
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3307
});

conn.connect((error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("Conectado ao MySQL");

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
});