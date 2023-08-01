import path from "path";

// ? Nome do arquivo atual (com extensão)
console.log(path.basename(import.meta.url));

// ? Nome do diretório atual
console.log(path.dirname(import.meta.url));

// ? Nome da extensão do arquivo atual (.js, .ts, ...)
console.log(path.extname(import.meta.url));

//? Criar um objeto Path
console.log(path.parse(import.meta.url));
const currentPath = path.parse(import.meta.url);
console.log(currentPath.name);

//? Juntar caminhos de arquivos
console.log(path.join(currentPath.dir, "oioi", "index.html"));
