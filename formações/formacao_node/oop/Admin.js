import User from "./index.js";

class Admin extends User {
  constructor(name, email, birthdate, role = "admin", isActive = true) {
    super(name, email, birthdate, role, isActive);
  }
  isAdmin() {
    return this.role === "admin";
  }

  createCourse(courseName, vacancies) {
    return this.isAdmin()
      ? `O Curso "${courseName}" foi criado com sucesso! Restam ${vacancies} vagas!`
      : "Você não tem permissão para criar um curso!";
  }
}

const admin = new Admin("admin", "kenaa@example.com", new Date());

console.log(admin.createCourse("Javascript - Orientação a Objetos", 20));

console.log(admin.subscribeOnCourse("Javascript - Orientação a Objetos", 10));

console.log(admin.name);
admin.name = "";
console.log(admin.name);
