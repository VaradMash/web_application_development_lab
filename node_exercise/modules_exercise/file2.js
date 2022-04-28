const name = require("./string_literal");
const employee_details = require("./object");
const hello_world = require("./function");
const new_function = require("./anonynous_function");
const Employee = require("./class_export");
const arrow_function = require("./arrow_function");
const full_module = require("./multiple_exports");

console.log(name);
console.log(employee_details);
hello_world("Vector");
new_function("Alpha");
let obj = new Employee("Charlie", 25, "Indian");
obj.show_details();
arrow_function("Delta")
console.log(full_module.name);
console.log(full_module.college);
full_module.say_hi()
