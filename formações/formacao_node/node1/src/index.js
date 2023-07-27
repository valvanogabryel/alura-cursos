import chalk from "chalk";
import fs from "fs";

function extractLink(text = "") {
  if (typeof text !== "string") throw new Error("texto deve ser uma string");

  const regExp = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;

  const allMatches = [...text.matchAll(regExp)];

  const links = allMatches.map((match) => ({ [match[1]]: match[2] }));

  return links.length !== 0 ? links : null;
}

// ! com async/await
async function fileCatcher(path) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(path, encoding);
    return extractLink(text);
  } catch (err) {
    handleError(`${err.code}: Não há arquivo no diretório especificado.`);
  }
}

export function handleError(errorMessage = "") {
  throw new Error(chalk.bold.bgRedBright(errorMessage));
}

export default fileCatcher;

// ! com promises
// function fileCatcher(path) {
//   fs.promises
//     .readFile(path, "utf-8")
//     .then((data) => {
//       console.log(chalk.green(data));
//     })
//     .catch((err) => {
//       if (err)
//         throw new Error(
//           chalk.bold.bgRedBright(
//             `${err.code}: não há arquivo no diretório especificado.`
//           )
//         );
//     });
// }

// ! sem promises
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
