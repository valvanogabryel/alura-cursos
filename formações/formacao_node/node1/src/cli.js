import chalk from "chalk";
import fs from "fs";
import fileCatcher, { handleError } from "./index.js";
import validateList from "./http-validate.js";

const args = process.argv;

async function printResults(validate, results, filename = "") {
  const realResults =
    results !== null
      ? results
      : `Não há links no arquivo [${chalk.blue.bold(filename)}]`;

  if (validate && results !== null) {
    console.log(
      chalk.bold.yellow(
        filename !== ""
          ? `Lista validada no arquivo [${chalk.blue.bold(filename)}]:`
          : "Lista validada:"
      ),
      await validateList(realResults)
    );
  } else if (filename) {
    console.log(
      chalk.bold.yellow(
        `Lista de links no arquivo [${chalk.blue.bold(filename)}]:`
      ),
      realResults
    );
  } else {
    console.log(chalk.bold.yellow(`Lista de links:`), realResults);
  }
}

async function processText(args) {
  const path = args[2];
  const validate = args[3] === "validate";

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

    printResults(validate, results);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);

    if (files.length < 1)
      handleError("Não há arquivos no diretório especificado.");

    files.forEach(async (filename) => {
      const file = await fileCatcher(`${path}/${filename}`);

      printResults(validate, file, filename);
    });
  }
}

processText(args);
