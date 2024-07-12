let score = 33
console.log(typeof score); // number
console.log(typeof (score)); // number

let score2 = "33"
console.log(typeof score2); // string

let score3 = "33"
let valuInNumber3 = Number(score3);
console.log(typeof valuInNumber3); // number

let score4 = "33abc"
let valuInNumber4 = Number(score4);
console.log(valuInNumber4); // NaN
console.log(typeof valuInNumber4); // number

let score5 = null
let valuInNumber5 = Number(score5);
console.log(valuInNumber5); // 0
console.log(typeof valuInNumber5); // number

let score6 = undefined;
let valuInNumber6 = Number(score6);
console.log(valuInNumber6); // NaN
console.log(typeof valuInNumber6); // number

let score7 = true;
let valuInNumber7 = Number(score7);
console.log(valuInNumber7); // 1
console.log(typeof valuInNumber7); // number

let score8 = false;
let valuInNumber8 = Number(score8);
console.log(valuInNumber8); // 0
console.log(typeof valuInNumber8); // number

let score9 = 'Jigar';
let valuInNumber9 = Number(score9);
console.log(valuInNumber9); // NaN
console.log(typeof valuInNumber9); // number

// '33' => 33
// '33abc' => NaN
// true => 1
// false => 1

// BOOLEAN BOOLEAN BOOLEAN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

let isLoggedIn2 = ''
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); // false

let isLoggedIn3 = 'Jigar'
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); // true

// 1 => true
// 0 => false
// '' => false
// 'Jigar' => true

// STRING STRING STRING

let someNumber1 = 33
let stringNumber1 = String(someNumber1)
console.log(stringNumber1);  //  33
console.log(typeof stringNumber1);  // string

