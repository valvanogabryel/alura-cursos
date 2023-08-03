import User from "./index.js";

export default class Docent extends User {
  constructor(name, email, birthdate, role = "docente", isActive = true) {
    super(name, email, birthdate, role, isActive);
  }

  approveStudent(student, course) {
    return `Estudante ${student} foi aprovado no curso ${course}! :D`;
  }
}

const professor = new Docent("Naldo", "ychag@example.com", "1990-01-01");

console.log(
  professor.approveStudent("Gabryel", "Javascript - Orientação a Objetos")
);

console.log(professor.showInfo());
console.log(professor.subscribeOnCourse("C#", 10));
