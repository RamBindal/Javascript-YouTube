function setUserName(username) {
  console.log("called");
  this.username = username;
}

function CreateUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}
const ram = new CreateUser("Ram", "ram0@example.com", "12345");
console.log(ram);
