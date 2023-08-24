import { createHash } from "crypto";

function hash(password) {
  return createHash("sha256").update(password).digest("hex");
}

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = hash(password);
  }

  showInfo() {
    console.log(`Exibindo informações do usuário: {
      NOME DE USUÁRIO: ${this.name}
      HASH: ${this.hash}
    }
      `);
  }

  auth(name, password) {
    try {
      if (!name || !password) {
        throw new Error("Insira informações");
      }

      if (this.name === name && this.hash === hash(password)) {
        console.log("Usuário autenticado com sucesso!");
        return true;
      }

      console.log("Usuário ou senha inválido(s)...");
      return false;
    } catch (err) {
      console.log(err);
    }
  }
}

const user = new User("Gabryel Valvano", "gabryelval123");

user.showInfo();

console.log("Caso de sucesso:");
user.auth("Gabryel Valvano", "gabryelval123");

console.log("Caso de fracasso:");
user.auth("Gabryel Valvano", "gabryelval12");
