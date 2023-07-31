import chalk from "chalk";
import fs from "fs";
import fileCatcher, { handleError } from "./index.js";

const path = process.argv;

function printResults(results) {
  console.log(chalk.bold.yellow("Lista de links:"), results);
}

async function processText(args) {
  const path = args[2];

  if (fs.lstatSync(path).isFile()) {
    const results = await fileCatcher(path);

    if (!results) handleError("Não há links no arquivo.");

    printResults(results);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);
    console.log(files);

    if (files.length < 1)
      handleError("Não há arquivos no diretório especificado.");

    files.forEach(async (filename) => {
      const file = await fileCatcher(`${path}/${filename}`);

      printResults(file);
    });
  }
}

processText(path);
