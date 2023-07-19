"use strict";
// let lname = 'Sid';
// lname = 10
let lname;
lname = 'Sid';
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
// let empList = []
let empList;
empList = ['Sid', 'Sid', 'Sid'];
// let depList: Array<string>;
let numList;
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
console.log(results);
let num = numList.find((num) => num === 2);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let dept;
dept = "IT";
dept = 10;
