import Auth from "./inheritance.js";
var userInfo = {
    name: 'Vivek',
    age: 30,
    email: 'vk@gmail.com',
    password: '1234'
};
class User extends Auth {
}
var user1 = new Auth();
user1.login(userInfo.name, userInfo.password);
console.log(userInfo);
console.log(user1.login('dude', '512152'));
