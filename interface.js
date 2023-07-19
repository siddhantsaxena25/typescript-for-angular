"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com"
};
let { name: userName, email: userLogin } = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com"
}; //Object destructuring
userLogin = "";
userName = "abc";
let employee = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com",
    salary: 10000
};
let users = [
    { name: 'Sid', id: 1, email: "sid@abd.com" },
    { name: 'Sid1', id: 2, email: "sid@abd.com" },
    { name: 'Sid2', id: 3, email: "sid@abd.com" },
    { name: 'Sid3', id: 4, email: "sid@abd.com" },
];
let [user1, user2, ...restUsers] = [
    { name: 'Sid', id: 1, email: "sid@abd.com" },
    { name: 'Sid1', id: 2, email: "sid@abd.com" },
    { name: 'Sid2', id: 3, email: "sid@abd.com" },
    { name: 'Sid3', id: 4, email: "sid@abd.com" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
