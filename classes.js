"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, addr) {
        _Employee_id.set(this, void 0); //private
        this.addr = addr;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    getNameWithAddr() {
        return `${this.name} lives in ${this.addr}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    Login() {
        return {
            name: 'Sid',
            id: 1,
            email: "sid@abd.com"
        };
    }
}
_Employee_id = new WeakMap();
let sid = new Employee(1, "Sid", "India");
sid.empId = 10;
console.log(sid.empId);
console.log(Employee.getEmployeeCount());
class Manager extends Employee {
    constructor(id, name, addr) {
        super(id, name, addr);
    }
    getNameWithAddr() {
        return `${this.name} is a manager at ${this.addr}`;
    }
}
// sid.id = 1
// sid.name = "Sid"
// sid.addr = "India"
let addr = sid.getNameWithAddr();
console.log(sid);
console.log(addr);
let eve = new Manager(2, "Eve", "USA");
console.log(eve.getNameWithAddr());
