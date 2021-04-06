let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'max';

// userName = userInput;
// >> Type 'unknown' is not assignable to type 'string'.
// userName は string型で unknown型ではないのでエラーになる

// 使用するときは型チェックをする
if (typeof userInput === 'string') {
	userName = userInput;
}

console.log(userName);





// never型

// エラーを起こす関数
function generateError( message: string, code: number): never {
	throw { message: message, errorCode: code};
}

generateError('エラーが発生しました。', 500);
