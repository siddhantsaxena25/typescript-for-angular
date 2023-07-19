// let lname = 'Sid';
// lname = 10

let lname : string;
lname = 'Sid';
let newname = lname.toUpperCase(); 
console.log(newname);

let age: number;
age = 25
age = 25.5
let dob = "25"
let result = parseInt(dob)

let isValid: boolean = false
console.log(isValid)

// let empList = []
let empList: string[]
empList = ['Sid', 'Sid', 'Sid']

// let depList: Array<string>;
let numList: Array<number>;
numList = [1, 2, 3, 4, 5]

let results = numList.filter((num)=> num>2)
console.log(results)

let num = numList.find((num) => num === 2)
console.log(num)

let sum = numList.reduce((acc, num) => acc + num)
console.log(sum)

const enum Color {
    Red, 
    Green, 
    Blue
}

let c: Color = Color.Blue

let swapNumbs: [firstNumber: number, secondNumber: number]

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20)
swapNumbs[0]
swapNumbs[1]

let dept: any
dept = "IT"
dept = 10
