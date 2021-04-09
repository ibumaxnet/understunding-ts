// const userNama = 'max';
// // userNama = 'maximum';

// let age = 30;
// age = 29;

// function add(a: number, b: number) {
// 	let result;
// 	result = a + b;
// 	return result;
// }

// console.log(add(2, 5));
// console.log("hello");





const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
// 	console.log(output);
// }

const printOutput: (output: string | number) => void = output => {
	console.log(output);
}

// デフォルト値を設定しているので、第2引数がなくても動作する
printOutput(add(2));
// >> 3




const button = document.querySelector('button');

if (button) {
	button.addEventListener('click', event => {
		console.log(event);
	});
}






//スプレッドオペレータ
const hobbies = ['sports', 'cooking'];
const activeHobbies = ['hiking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
	firstName: 'max',
	age: 30,
}

const copiedPerson = {
	...person,
}

console.log(person);







// レストパラメーター
const addFnc = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue;
	});
}
const addNumbers = addFnc(5,3,12,34,18);

console.log(addNumbers);







// 分割代入

// activeHobbies の中身を分割代入
const [hobby1, hobby2, ...reminingHobbies] = activeHobbies;

console.log(activeHobbies, hobby1, hobby2);
console.log(reminingHobbies);

// person の中身を firstNameの数値 → userName / ageの数値 → otoshi に代入
const { firstName: userName, age: otoshi } = person;

console.log(userName, otoshi, person);

