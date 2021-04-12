// union型の場合共通の部分の型になる
type Combinable = string | number | string;
type Numeric = number | boolean | string;
type ScriptString = string | number;

type Universal = Combinable & Numeric & ScriptString ;
// >> type Universal = string | number


// オブジェクト型の場合複数の型を結合する
type Admin = {
	name: string;
	privileges: string[];
}

type Employee = {
	name: string;
	startDate: Date; //Date型 はtypescript に用意された日付型
}

type Skill = {
	name: string;
	skill: string[];
}

type ElevatedEmployee = Admin & Employee & Skill;


const e1: ElevatedEmployee = {
	name: "Alice",
	privileges: ['create-server'],
	startDate: new Date(),
	skill: ['jump'],
}

console.log(e1);
// >>{"name": "Alice", "privileges": [ "create-server" ], "startDate": "2021-04-09T03:48:29.064Z", "skill": [ "jump" ] }




// interface で書くと...
/*
interface Admin = {
	name: string;
	privileges: string[];
}

interface Employee = {
	name: string;
	startDate: Date;
}

interface ElevatedEmployee extends Admin, Employee {};
*/
