export interface User {
    name: string,
    age?: number,
    id: number,
    email: string
}

let user: User = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com"
}

let {name: userName, email: userLogin}: User = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com"
} //Object destructuring

userLogin = ""
userName = "abc"

interface Employees extends User {
    salary: number
}

let employee: Employees = {
    name: 'Sid',
    id: 1,
    email: "sid@abd.com",
    salary: 10000
}

export interface Login {
    Login(): User
}

let users: User[] = [
    {name: 'Sid', id: 1, email: "sid@abd.com"},
    {name: 'Sid1', id: 2, email: "sid@abd.com"},
    {name: 'Sid2', id: 3, email: "sid@abd.com"},
    {name: 'Sid3', id: 4, email: "sid@abd.com"},
]

let [user1, user2, ...restUsers]: User[] = [
    {name: 'Sid', id: 1, email: "sid@abd.com"},
    {name: 'Sid1', id: 2, email: "sid@abd.com"},
    {name: 'Sid2', id: 3, email: "sid@abd.com"},
    {name: 'Sid3', id: 4, email: "sid@abd.com"},
]

console.log(user1)
console.log(user2)
console.log(restUsers) 