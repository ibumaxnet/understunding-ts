// 型ガード
// オブジェクトに特定の型やメソッドがあることをチェックして特定の処理を実行すること

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

// console.log(e1);
// >>{"name": "Alice", "privileges": [ "create-server" ], "startDate": "2021-04-09T03:48:29.064Z", "skill": [ "jump" ] }

// 型をチェックして実行する処理を分岐する
function add(a: Combinable, b: Combinable) {
 // aかbがstringならstringで返す
 	if(typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString;
	}
	// aかbがstringならnumberで返す
	return a + b;
}

console.log(add(2, 5));
// >> 7


type UnknownEmployee = Employee | Admin;

// type に対する型ガード
function printEmployeeInformation(emp: UnknownEmployee) {
	console.log(emp.name);
	// privileges というパラメータを含む型ならパラメータを表示
	if ('privileges' in emp) {
			console.log("privileges: " + emp.privileges);
	}
	// startDate というパラメータを含む型ならパラメータを表示
	if ('startDate' in emp) {
			console.log("startDate: " + emp.startDate);
	}
}

printEmployeeInformation(e1);
// >> Alice
// >> privileges: create-server
// >> startDate: Mon Apr 12 2021 15:55:03 GMT+0900 (日本標準時)

printEmployeeInformation({name: 'usagi', startDate: new Date()});
// >> usagi
// >> startDate: Mon Apr 12 2021 15:58:32 GMT+0900 (日本標準時)


// class に対する型ガード
class Car {
	drive() {
		console.log("運転中...");
	}
}

class Track {
	drive () {
		console.log("トラックスを運転中...");
	}

	loadCargo(amount: number) {
		console.log(`荷物を ${amount} 運んでいます`)
	}
}

type Vehicle = Car | Track;

const v1 = new Car();
const v2 = new Track();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	// vehicle が Track という class で作られたならば表示
	if (vehicle instanceof Track) {
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
// >>運転中...

useVehicle(v2);
// >> トラックスを運転中...
// >> 荷物を 1000 運んでいます







// 判別可能なUNION型
// Discriminated Unions
interface Bird {
	type: 'bird', // bird というstring型のみを許容するリテラル型
	flyingSpeed: number;
}

interface Horse {
	type: 'horse', // horse というstring型のみを許容するリテラル型
	runningSpeed: number;
}

type Animal = Bird | Horse;


function moveAnimal(animal: Animal) {
	let speed;
	// type プロパティで判別する
	switch (animal.type) {
		case'bird':
			speed = animal.flyingSpeed;
			break;
		case'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log(animal.type, speed);
}

moveAnimal({type: 'horse', runningSpeed: 100});
// >> horse 100






// type Casting
// 型キャスト

// const userInputElement = <HTMLInputElement>document.querySelector('user-input')!;

// または
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
	(userInputElement as HTMLInputElement).value = 'こんちちは';
}

interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: '正しいメールアドレスではありません',
	username: 'ユーザー名に記号を含めることはできません',

}








// 関数オーバーロード

// それぞれの戻り値の定義をする
function addOver(a: number, b: number): number;
function addOver(a: string, b: string): string;
function addOver(a: number, b: string): string;
function addOver(a: string, b: number): string;

function addOver(a: Combinable, b: Combinable) {
	// aかbがstringならstringで返す
		if(typeof a === 'string' || typeof b === 'string') {
		   return a.toString() + b.toString;
	   }
	   // aかbがstringならnumberで返す
	   return a + b;
	}
	const result = addOver('hello', ' typescript');
	result.split(' ');
   // >> hello', ' typescript
   





// オプショナルチェイニング
const fechedUserData = {
	id: 'u1',
	name: 'user1',
	job: {
		title: 'developer',
		description: 'TypeScript',
	}
}

// fechedUserData があれば、job.title を表示する
console.log(fechedUserData?.job.title);
// >> developer




// Nullish Coalescing Operator
// NULL合体演算子

const userInput = null;

// userInput が null か undeFind なら 'DEFAULT' を代入する
const soterdData = userInput ?? 'DEFAULT';

console.log(soterdData);
// >> DEFAULT