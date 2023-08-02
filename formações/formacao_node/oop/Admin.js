import User from "./index.js";

class Admin extends User {
  constructor(name, email, birthdate, role = "admin", isActive = true) {
    super(name, email, birthdate, role, isActive);
  }

  createCourse(courseName, vacancies) {
    return `O Curso "${courseName}" foi criado com sucesso!`;
  }
}

const admin = new Admin("admin", "kenaa@example.com", new Date());

console.log(admin.createCourse("Javascript - Orientação a Objetos"));
