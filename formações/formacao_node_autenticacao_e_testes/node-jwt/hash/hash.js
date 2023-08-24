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
    if (this.name === name && this.hash === hash(password)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }

    console.log("Usuário ou senha inválidos...");
    return false;
  }
}

const user = new User("Gabryel Valvano", "gabryelval123");

user.showInfo();
