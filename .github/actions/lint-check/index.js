const fs = require("fs");

const file = "README.md";

if (!fs.existsSync(file)) {
  console.error(`Erro: Arquivo obrigatório ${file} está ausente.`);
  process.exit(1);
} else {
  console.log(`${file} verificado com sucesso.`);
}
