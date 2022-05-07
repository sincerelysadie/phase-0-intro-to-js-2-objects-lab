const employee = {
    name: "sadi",
streetAddress: "1234 Main", 
};
function updateEmployeeWithKeyAndValue (employee, key, value) {
console.log(employee, key, value)
let newEmployee= {...employee};
newEmployee [key] = value;
console.log(newEmployee)
return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key, value) {
    let deleteEmployee= {...employee};
    deleteEmployee [key] = value;
    console.log(deleteEmployee)
    return deleteEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}