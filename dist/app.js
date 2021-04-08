"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (getname) {
        return { name: getname };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfomation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ItDepartment = (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ItDepartment.prototype.describe = function () {
        console.log("IT\u90E8\u9580 - ID: " + this.id + " NAME: " + this.name);
    };
    return ItDepartment;
}(Department));
var AcountingDepartment = (function (_super) {
    __extends(AcountingDepartment, _super);
    function AcountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Acounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AcountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('レポートがありません');
        },
        set: function (value) {
            if (!value) {
                throw new Error('レポートがsetできません');
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AcountingDepartment.getInstance = function () {
        if (AcountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AcountingDepartment('user', []);
        return this.instance;
    };
    AcountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AcountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AcountingDepartment.prototype.addEmployeeAc = function (name) {
        if (name === 'max') {
            return;
        }
        this.employees.push(name);
    };
    AcountingDepartment.prototype.describe = function () {
        console.log("\u4F1A\u8A08\u90E8\u9580 - ID: " + this.id + " NAME: " + this.name);
    };
    return AcountingDepartment;
}(Department));
var employee01 = Department.createEmployee('mask');
console.log(employee01, Department.fiscalYear);
var accountingIt = new ItDepartment('user', ['maxx']);
accountingIt.addEmployee('max');
accountingIt.addEmployee('manu');
console.log(accountingIt);
accountingIt.describe();
var accountingAc = AcountingDepartment.getInstance();
accountingAc.addReport('something');
console.log(accountingAc.mostRecentReport);
accountingAc.mostRecentReport = '月間レポート';
accountingAc.printReports();
accountingAc.addEmployeeAc('max');
accountingAc.addEmployeeAc('manu');
accountingAc.printEmployeeInfomation();
accountingAc.describe();
console.log(accountingAc);
//# sourceMappingURL=app.js.map