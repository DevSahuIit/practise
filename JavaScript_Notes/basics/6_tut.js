// conversion and operations 
let score = "33";
console.log(typeof score);

console.log(typeof(score)); // both of them are same
// string will be the answer

let valuein_numb = Number(score);
console.log(valuein_numb); // -> 33 answer
console.log(typeof(valuein_numb)); // number

// agar score = "33accc" answer Nan
// agar score = null answer 0
// aagr score = undefined answer Nan
// agar true toh 1


let valuein_numbs = Boolean(score);
// 1=> teue: 0=>false;
// ""=> false;
// "hites"=>true

let someNumber = 33
let