const express = require("express");
const app = express();
const PORT = 3000;

// Permite interpretar JSON no corpo das requisições
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API CRUD rodando! 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
