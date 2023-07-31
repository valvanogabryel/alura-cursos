import chalk from "chalk";
import fs from "fs";
import fileCatcher, { handleError } from "./index.js";

const path = process.argv;

function printResults(results, filename) {
  const realResults =
    results !== null
      ? results
      : `Não há links no arquivo [${chalk.blue.bold(filename)}]`;

  console.log(
    chalk.bold.yellow(
      `Lista de links no arquivo [${chalk.blue.bold(filename)}]:`
    ),
    realResults
  );
}

async function processText(args) {
  const path = args[2];

  try {
    fs.lstatSync(path);
  } catch (err) {
    if (err.code === "ENOENT")
      handleError(
        `${err.code}: O arquivo ou diretório especificado (${path}) não existe.`
      );
    return;
  }

  if (fs.lstatSync(path).isFile()) {
    const results = await fileCatcher(path);

    if (!results)
      handleError(`Não há links no arquivo [${chalk.blue.bold(path)}].`);

    printResults(results, path);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);

    if (files.length < 1)
      handleError("Não há arquivos no diretório especificado.");

    files.forEach(async (filename) => {
      const file = await fileCatcher(`${path}/${filename}`);

      printResults(file, filename);
    });
  }
}

processText(path);
