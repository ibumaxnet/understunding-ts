abstract class Department {
	static fiscalYear: number = 2020;
	// private id : string; // コンストラクターに書くことで省略できる※1
	// name: string; // ※1
	protected employees: string[] = [];

	static createEmployee(getname: string) {
		return {name: getname}
	}

	constructor(protected readonly id: string, public name: string) {
		// this.id = id; // ※1
		// this.name = n; // ※1
	}

	// オーバーライド
	// どのような関数か定義して、継承classに実装を強制する
	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfomation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}

}

class ItDepartment extends Department {
	admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}

	describe() {
		console.log(`IT部門 - ID: ${this.id} NAME: ${this.name}`);
	}

}

class AcountingDepartment extends Department {
	private static instance: AcountingDepartment;
	private lastReport: string;

	get mostRecentReport() {
		if(this.lastReport) {
			return this.lastReport;
		}
		throw new Error('レポートがありません');
	}

	set mostRecentReport(value: string) {
		if(!value) {
			throw new Error('レポートがsetできません');
		}
		this.addReport(value);
	}

	private constructor(id: string, private reports: string[]) {
		super(id, 'Acounting');
		this.lastReport = reports[0];
	}

	// 同じインスタンスを２回作らせない
	static getInstance() {
		if(AcountingDepartment.instance) { // インスタンスがあれがそのまま帰す
			return this.instance;
		}
		this.instance = new AcountingDepartment('user', []);// インスタンスがなければ作成する
		return this.instance;
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}

	addEmployeeAc(name: string) {
		if(name === 'max') { // maxさんはIT部門にはいれません
			return;
		}
		this.employees.push(name);
	}

	describe() {
		console.log(`会計部門 - ID: ${this.id} NAME: ${this.name}`);
	}

}

const employee01 = Department.createEmployee('mask');
console.log(employee01, Department.fiscalYear);

const accountingIt = new ItDepartment('user', ['maxx']);

accountingIt.addEmployee('max');
accountingIt.addEmployee('manu');

console.log(accountingIt);
accountingIt.describe();


// accounting.employees[2] = 'Anna';

// accounting.describe();
// accounting.printEmployeeInfomation();


// const accountingCopy = {name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();

// const accountingAc = new AcountingDepartment('user', []);
const accountingAc = AcountingDepartment.getInstance();


accountingAc.addReport('something');
console.log(accountingAc.mostRecentReport);
accountingAc.mostRecentReport = '月間レポート';
accountingAc.printReports();

accountingAc.addEmployeeAc('max');
accountingAc.addEmployeeAc('manu');

accountingAc.printEmployeeInfomation();
accountingAc.describe();

console.log(accountingAc);
