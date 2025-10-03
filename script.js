// const user = {
//   name: 'jane',
//   age: 25,
//   'eye color': 'broun'
// };
// console.log(user);
// console.log(user.name);
// console.log(user['eye color']);


// user.age = 30
// console.log(user);

// for (let key in user) {
//   console.log(`${key} = ${user[key]}`);
// }

// const user2 = user;
// user.age = 40;
// console.log(user2.age);

// const user3 = {};
// for (let key in user) {
//   user3[key] = user[key];
// }

// user.age = 25;
// console.log(user3.age);

// const user4 = Object.assign({},user);

// console.log(user4);

const user = {
  name: 'jane',
lastName: 'Doe',
age: 35,
login: function(){
  console.log('Successfuly logged in!');
},
fullName() {
  return `${this.name} ${this.lastName} ${this.age}`;
}
};

user.login();

console.log(user.fullName());
