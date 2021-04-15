// generics

// extends で型の制約ができます
// 型はオブジェクト型でなくても Union型や 配列型でもできます
// T, U はオブジェクトでなくてはならない
function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge<{name: string}, {age: number, skills: string[]}>({ name: 'max'}, { age: 30, skills: ['director']});

console.log(mergedObj.skills);
// >> ["director"]





interface Lengthy {
	length: number;
}

// length プロパティがあることを強制します
function countAndDescribe<T extends Lengthy>(element: T) {
	let descriptionText = '値がありません';
	if(element.length > 0) {
		descriptionText = `値は ${element.length} です`;
	}
	return [element, descriptionText];
}

console.log(countAndDescribe('どうしてかした'));
// >> ["どうしてかした", "値は 7 です"]






// keyof の制約
// extends で <T>object に存在する key<U> であることを制限する
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return 'value: ' + obj[key];
}

console.log(extractAndConvert({"name": 'max'}, "name"));








// generic class
class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string | number>(); // stringを格納できるインスタンス
 textStorage.addItem('data1');
 textStorage.addItem(2);
 textStorage.removeItem('data1');

 console.log(textStorage.getItems());




//  Utility Types

 // pershal
 interface CourseGoal {
 	title: string;
 	description: string;
 	completeUntil: Date;
 }

function createCouseGoal(
	title: string,
	description: string,
	date: Date,
	): CourseGoal {
	let courseGoal: Partial <CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ['name', 'age'];

names.push('height');// readonly なのでエラー
// >> Property 'push' does not exist on type 'readonly string[]'.
