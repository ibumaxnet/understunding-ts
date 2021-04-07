function addFunction(n1: number, n2: number, showResult: boolean, phrase: string) {
	// if(typeof n1 !== 'number' || typeof n2 !=='number') {
	// 	throw new Error('入力値の型が正しくありません');
	// }
	const result = n1 + n2;
	if( showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}

}

let number1: number = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result: ';

addFunction(number1, number2, printResult, resultPhrase);

