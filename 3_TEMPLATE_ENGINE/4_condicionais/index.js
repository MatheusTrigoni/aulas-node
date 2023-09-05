const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Configurar o handlebars como template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

app.get('/', (req, res) => {
    const user = {
        name: "Matheus Trigoni",
        age: 20
    }

    const auth = false;

    res.render("home", { user, auth });
});


app.listen(3000);