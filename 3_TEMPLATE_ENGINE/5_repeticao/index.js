const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configurar o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    itens = ["item1", "item2", "item3"];

    res.render("dashboard", { itens });
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