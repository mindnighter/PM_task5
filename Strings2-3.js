let str = "ECMAScript 2015 (6th Edition, ECMA-262)";

let regNum = /\d/g;
let result = str.match(regNum);
console.log(result);

let regUpper = /\p{Lu}/gu;
result = str.match(regUpper);
console.log(result);