class Department {
	// private id : string; // コンストラクターに書くことで省略できる※1
	// name: string; // ※1
	private employees: string[] = [];

	constructor(private readonly id: string, public name: string) {
		// this.id = id; // ※1
		// this.name = n; // ※1
	}

	describe(this: Department) {
		console.log(`Department: ${this.name}[${this.id}]`)
	}

	addEmployes(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInfomation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('user', 'Accounting');

accounting.addEmployes('max');
accounting.addEmployes('manu');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInfomation();


// const accountingCopy = {name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe();

console.log(accounting);
