"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name + "[" + this.id + "]");
    };
    Department.prototype.addEmployes = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfomation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('user', 'Accounting');
accounting.addEmployes('max');
accounting.addEmployes('manu');
accounting.describe();
accounting.printEmployeeInfomation();
console.log(accounting);
//# sourceMappingURL=app.js.map