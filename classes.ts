import { Login, User } from "./interface"

class Employee implements Login {
    #id!: number //private
    protected name!: string
    addr!: string

    constructor(id:number, name:string, addr:string) {
        this.addr = addr
        this.name = name
        this.#id = id
    }

    getNameWithAddr():string {
        return `${this.name} lives in ${this.addr}`
    }

    static getEmployeeCount(): number {
        return 50
    }

    get empId(): number {
        return this.#id
    }

    set empId(id: number) {
        this.#id = id
    }

    Login(): User {
        return {
            name: 'Sid',
            id: 1,
            email: "sid@abd.com"
        } 
    }
}

let sid = new Employee(1, "Sid", "India");
sid.empId = 10
console.log(sid.empId)

console.log(Employee.getEmployeeCount())


class Manager extends Employee{
    constructor(id:number, name:string, addr:string) {
        super(id, name, addr)
    }

    getNameWithAddr():string {
        return `${this.name} is a manager at ${this.addr}`
    }
}

// sid.id = 1
// sid.name = "Sid"
// sid.addr = "India"

let addr = sid.getNameWithAddr()
console.log(sid)
console.log(addr)

let eve = new Manager(2, "Eve", "USA")
console.log(eve.getNameWithAddr())
