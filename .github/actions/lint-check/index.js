const fs = require("fs");

const files = ["README.md", "package.json", "dist/index.html"];

let allExist = true;

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`Erro: Arquivo obrigatório ${file} está ausente.`);
    allExist = false;
  } else {
    console.log(`${file} verificado com sucesso.`);
  }
});

if (!allExist) process.exit(1);

console.log("Todos os arquivos obrigatórios foram verificados com sucesso.");
