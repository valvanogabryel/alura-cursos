import chalk from "chalk";
import fs from "fs";
import fileCatcher, { handleError } from "./index.js";

const path = process.argv;

async function processText(args) {
  const path = args[2];

  if (fs.lstatSync(path).isFile()) {
    const results = await fileCatcher(path);

    if (!results) handleError("Não há links no arquivo.");

    console.log(chalk.bold.yellow("Lista de links:"), results);
  } else if (fs.lstatSync(path).isDirectory()) {
    const files = await fs.promises.readdir(path);

    console.log(files);
  }
}

processText(path);
