"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    get getMostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('no report available');
    }
    set setMostRecentReport(report) {
        if (!report) {
            throw new Error("empty report dog");
        }
        this.addReport(report);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('d1', ['Max']);
const accounting = new AccountingDepartment('d2', []);
const reprttt = '';
accounting.setMostRecentReport = reprttt;
console.log(accounting.getMostRecentReport);
