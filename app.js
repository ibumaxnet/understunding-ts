var userInput;
var userName;
userInput = 5;
// userInput = 'max';
// userName = userInput;
// >> Type 'unknown' is not assignable to type 'string'.
// userName は string型で unknown型ではないのでエラーになる
// 使用するときは型チェックを
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log(userName);
