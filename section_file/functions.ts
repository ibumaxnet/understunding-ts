function add(n1: number, n2: number) {
	return n1 + n2;
}

// printResult は console.log するだけなので、なにも return しないので受け取る型は undefind だが、
// なにも返さないということを明示的にしめすため、返す型は void とする
function printResultCalc(num: number): void {
	console.log(`result: ${num}`);
}

printResultCalc(add(5,12));
// >> result: 17



// combineValues に格納される関数の引数と戻り値を指定する
// この場合は引数に a: number/ b: number 戻り値に number を取る関数となる
let combineValues: (a: number, b: number) => number;

combineValues = add;

// combineValues = printResult;
// >> Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// >>  Type 'void' is not assignable to type 'number'.
// 戻り値が void の関数なのでエラー

// combineValues = 5;
// >> Type 'number' is not assignable to type '(a: number, b: number) => number'.
// number なのでエラー

console.log(combineValues(3,4));
// >> 7





// ni; number / n2: number / cb: void 何も返さない関数 の関数
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

// 10, 20, resultをconsole.log する関数
addAndHandle(10, 20, (result) => {
	console.log(result);
});
// >> 30
