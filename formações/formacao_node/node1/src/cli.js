import chalk from "chalk";
import fileCatcher, { handleError } from "./index.js";

const path = process.argv;

async function processText(path) {
  const results = await fileCatcher(path[2]);

  if (!results) handleError("Não há links no arquivo.");

  console.log(chalk.bold.yellow("Lista de links:"), results);
}

processText(path);
