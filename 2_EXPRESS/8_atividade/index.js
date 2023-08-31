const express = require("express");
const app = express();

const path = require("path");
const caminho = path.join(__dirname, "templates");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/home.html`);
});

app.get("/cadastro", (req, res) => {
    res.sendFile(`${caminho}/cadastro.html`);
});

app.post("/cadastro/salvar", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    console.log(`Email: ${email}\nSenha: ${senha}`);

    res.redirect('/');
});

app.listen(3000);