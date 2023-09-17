const express = require("express");
const exphbs = require("express-handlebars");
const produtos = require("./produtos");

const app = express();

app.use(express.static("public"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


app.get('/', (req, res) => {
    res.render("home", { produtos });
});

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id;

    produtos.forEach(pd => {
        if (pd.id == id)
            res.render("produto", { pd });
    });
});

app.listen(3000);