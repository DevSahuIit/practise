// aray party1 pe charcha

const myArr = [0,1,2, "hites", true, null];
// object tha t is collections of datats 
// not fixed sized data 

console.log(myArr);

// copy create Shallow copty 
// shallow copy changes have same point refrences
// direct copy changes does not have same point refrences

const myHorses = ["shaktiman", "naasgraj"];
const myArr2 = new Array(1,2,3,3);
myArr.push(6);
console.log(myArr); // [ 0, 1, 2, 'hites', true, null, 6 ]

myArr.pop();
myArr.unshift(0); 
console.log(myArr); // [ 0, 0, 1, 2, 'hites', true, null ]
// aage daal dia isne bkc

myArr.shift();
console.log(myArr); // [ 0, 1, 2, 'hites', true, null ]
// aagew ki value kha gya bkc




// Questions in array
console.log(myArr.includes(9)); // false;
console.log(myArr.includes(null));// true

const newArr = myArr.join(); //0,1,2,hites,true,  string bna dia iska
console.log(newArr); // 
console.log(typeof newArr); // string

// slice
console.log(myArr.slice(1,3)); // [ 1, 2 ]
console.log(myArr.splice(1,3)); // [ 1, 2, 'hites' ]
console.log(myArr); // [ 0, true, null ] splice ne bad ka hta dia 1 pe ja kar 3 length ka hta dia
