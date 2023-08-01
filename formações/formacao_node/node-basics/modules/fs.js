import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//? Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (err) => {
//   if (err) {
//     return console.log(`Erro: ${err}`);
//   }
//   console.log("Pasta criada!");
// });

//? Criar/Substituir um arquivo
fs.writeFile(
  path.join(__dirname, "/test/teste.html"),
  "<button>oi</button>",
  (err) => {
    if (err) {
      return console.log(`Erro: ${err}`);
    }

    console.log("Arquivo criado!");

    //? Adicionar a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test/teste.html"),
      "<div>oi</div>",
      (err) => {
        if (err) {
          return console.log(`Erro: ${err}`);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );
    //? Ler um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "teste.html"),
      "utf-8",
      (err, data) => {
        if (err) {
          return console.log(`Erro: ${err}`);
        }
        console.log(data.toString());
      }
    );
  }
);
