const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configurar pasta public para arquivos estáticos
app.use(express.static("public"));

// Configurar o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const itens = ["item1", "item2", "item3"];

    res.render("dashboard", { itens });
});

app.get("/post", (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }

    res.render("blogpost", { post });
});

app.get('/', (req, res) => {
    const user = {
        name: "Matheus Trigoni",
        age: 20
    }

    const auth = true;

    res.render("home", { user, auth });
});


app.listen(3000);