import fs from "fs";
import chalk from "chalk";

function fileCatcher(path) {
  fs.promises
    .readFile(path, "utf-8")
    .then((data) => {
      console.log(chalk.green(data));
    })
    .catch((err) => {
      if (err)
        throw new Error(
          chalk.bold.bgRedBright(
            `${err.code}: não há arquivo no diretório especificado.`
          )
        );
    });
}

// function fileCatcher(path) {
//   const encoding = "utf-8";

//   const fileContent = fs.readFile(path, encoding, (err, data) => {
//     if (err)
//       throw new Error(
//         chalk.bold.bgRedBright(
//           `${err.code}: Não há arquivo no diretório especificado.`
//         )
//       );
//     console.log(chalk.green(data));
//   });

//   return fileContent;
// }

fileCatcher("./arquivos/texto.md");
