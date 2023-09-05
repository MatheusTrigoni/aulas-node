const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configurar o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.render("home", { layout: false });
});

app.listen(3000);