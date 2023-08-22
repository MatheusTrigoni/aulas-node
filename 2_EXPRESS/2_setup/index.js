const express = require("express");
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja bem-vindo ao meu backend.");
});

app.listen(3000, () => {
    console.log("App rodando na porta 3000.");
});