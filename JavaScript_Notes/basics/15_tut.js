// array part-2 pe charcha hone do

const marvel_heros = ["thor","IronMan", "spiderman"];
const dc = ["superman", "flash", "batman"];

marvel_heros.push(dc);
console.log(marvel_heros);
// [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

/**
 agar mai bas intna likh kar print karta toh result same aat abecuse printing it woiyuld give me marvel heroes value only not updtae done\
 marvel_heros.concat(dc);
 console.log(marvel_heros);
 */


const all = marvel_heros.concat(dc);
console.log(all);
/*
[
  'thor',
  'IronMan',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
*/
// concat return karta hai naya array 

console.log(marvel_heros);
// [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
const all_new = [...marvel_heros, ...dc];


// ]
const another_arr = [1,23,3, [2,34,4,5, [3,4,4]]];
const real_another_arr = another_arr.flat(Infinity);
console.log(another_arr);
console.log(real_another_arr);

/*
[
  1, 23, 3, 2, 34,
  4,  5, 3, 4,  4
]
*/

console.log(Array.isArray("hitesh")); // true
console.log(Array.from("hitesh")); // ['h', 'i', 't', 'e', 's', 'h'];
console.log(Array.from({name: "hitesh"})) // intresting
// last wale ka list nmhi bna pa rha yeah toh returned []

let score1 = 100
let score2 = 200
let score3 = 400
console.log(Array.of(score1, score2,score3)); // [ 100, 200, 400 ]