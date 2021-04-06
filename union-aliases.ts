// エイリアス型
type Combinable = number | string;
type ConversionsDescriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable, resultConbersion: ConversionsDescriptor) {
	let result;
	if((typeof input1 === 'number')&&(typeof input2 === 'number')|| resultConbersion === 'as-number') {
		result = +input1 + +input2;
		return parseFloat(result);
	} else {
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('Angela', 26, 'as-text');
console.log(combineStringAges);

const combineName = combine('Angela', 26, 'as-text');
console.log(combineName);
