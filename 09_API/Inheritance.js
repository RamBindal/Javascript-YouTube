class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME IS: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course is added by: ${this.username}`);
  }
}
const chai = new Teacher("chai", "chai@Teacher.com", "123");
const chai2 = new Teacher("chai", "chai@Teacher.com", "123");
//chai.addCourse();
//chai2.addCourse();
////////////////////////////////////////////////////////////////////////////////////////
class Users {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`USERNAME: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const ram = new Users("ram");
console.log(ram.createId());
