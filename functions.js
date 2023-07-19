"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
function Add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(Add(1, 2));
console.log(Add(1, 2, 3));
const Sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(Sub(2, 3, 1));
console.log(Sub(2, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 10, 20, 20));
function getItems(items) {
    return new Array().concat(items);
}
let concatNumber = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd', 'e']);
console.log(concatNumber, concatString);
