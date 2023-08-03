export default class User {
  #name;
  #email;
  #birthdate;
  #role;
  #isActive;
  constructor(name, email, birthdate, role, isActive = true) {
    this.#name = name;
    this.#email = email;
    this.#birthdate = birthdate;
    this.#role = role || "estudante";
    this.#isActive = isActive;
  }

  showInfo() {
    return `Nome: ${this.name}, Email: ${this.email}, Data de nascimento: ${this.birthdate}, Role: ${this.role}, Ativo: ${this.isActive}`;
  }

  subscribeOnCourse(course, vacancies) {
    const isProfessor = this.#role === "docente";
    vacancies--;
    if (isProfessor)
      return `O professor ${
        this.#name
      } se inscreveu no curso "${course}". Restam ${vacancies} vagas`;
    return `O aluno ${
      this.#name
    } se inscreveu no curso "${course}". Restam ${vacancies} vagas`;
  }

  #createUserObject() {
    return {
      name: this.#name,
      email: this.#email,
      birthdate: this.#birthdate,
      role: this.#role,
      isActive: this.#isActive,
    };
  }

  get name() {
    return this.#name;
  }
  get email() {
    return this.#email;
  }
  get birthdate() {
    return this.#birthdate;
  }
  get role() {
    return this.#role;
  }

  get isActive() {
    return this.#isActive;
  }

  set name(newName) {
    if (newName === "") throw new Error("name must not be empty");
    this.#name = newName;
  }
}

const user = new User("Gabryel", "valvanogabryel@gmail.com", "2003-07-08");

console.log(user);
console.log(user.showInfo());
// user.#name = "José"; Error: private property

// console.log(user.#name); Error: private property

console.log(user.subscribeOnCourse("Javascript - Orientação a Objetos", 20));
