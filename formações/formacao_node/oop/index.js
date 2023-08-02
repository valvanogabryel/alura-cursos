export default class User {
  constructor(name, email, birthdate, role, isActive = true) {
    this.name = name;
    this.email = email;
    this.birthdate = birthdate;
    this.role = role || "estudante";
    this.isActive = isActive;
  }

  showInfo() {
    return `Nome: ${this.name}, Email: ${this.email}, Data de nascimento: ${this.birthdate}, Role: ${this.role}, Ativo: ${this.isActive}`;
  }
}

const user = new User("Gabryel", "valvanogabryel@gmail.com", "2003-07-08");

console.log(user);
console.log(user.showInfo());
