// interface はオブジェクトの構造を定義するために使用できる


interface Named {
// public,private は interface では使用できません
	readonly name?: string; // 実装された class でもreadonly を強制できます
}

interface Age {
	age?: number; //オプショナルデータ
}

// interface は複数継承できる
interface Greetable extends Named, Age {
	greet(phrase: string): void;
}

class Person implements Greetable {
	name?: string;
	age?: number;

	constructor(n?: string, a?: number) {
		this.name = n;
		this.age = a;
	}

	greet(phrase: string) {
		let agePhrase: string;

		if(this.age) {
			agePhrase = ` ${this.age} yearsold`;
 		} else {
 			agePhrase = ' としはないしょ';
 		}

		if(this.name) {
			console.log(phrase, this.name, agePhrase);
		} else {
			console.log('Hi jane doe'); // name が設定されていない場合
		}
	}
}


let user1 = new Person('max', 33);

// user1 = {
// 	name: 'max',
// 	age: 30,
// 	greet(phrase: string) {
// 		console.log(phrase, this.name);
// 	}
// }

user1.greet('hey i am ');
console.log(user1);




// 関数を定義することもできる

// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let addFunction: AddFn;

addFunction = (a: number, b: number) => {
	return a + b;
}

console.log(addFunction(12, 13));
