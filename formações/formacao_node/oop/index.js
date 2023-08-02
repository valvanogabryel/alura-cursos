class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello ${this.name}!`);
  }
}

const user = new User("John", 20);

console.log(`${user.name} has ${user.age} years of age!`);
user.sayHello();
