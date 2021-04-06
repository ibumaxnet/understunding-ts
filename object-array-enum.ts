// tuple型
// const person: {
// 	name: string,
// 	age: number
// 	hobbies: string[],
// 	role: [number, string],
// } = {
// 	name: 'nozomu',
// 	age: 25,
// 	hobbies: ['sports', 'cooking'],
// 	role: [ 2, 'author'],
// }

// enum型
enum Role {
	ADMIN = 5,
	READ_ONLY = 15,
	AUTHOR = 25,
}

const person: {
	name: string,
	age: number
	hobbies: string[],
	role: Role.ADMIN
} = {
	name: 'nozomu',
	age: 25,
	hobbies: ['sports', 'cooking'],
	role: 5,
}


console.log(person);

if(person.role === Role.ADMIN) {
	console.log("管理者ユーザー");
}
