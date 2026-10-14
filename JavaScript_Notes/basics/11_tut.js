// string pe charcha

const name = "dev";
const repoCount = 50;

console.log(name+repoCount+ " Value") // purana method
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hiteshc');
// some methods thart can be used
console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}

console.log(gameName.length); //7
console.log(gameName.toUpperCase) // orignal values change nhi hongi


console.log(gameName.charAt('2')); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0,4);
console.log(newString); // hite

const anotherString = gameName.slice(0,4);
// isme hum negative value bhi d3e skte hain
const anotherString2 = gameName.slice(-6, 3);
console.log(anotherString); //hite
console.log(anotherString2); // it


const newStrings = "   hitesh   ";
console.log(newStrings.trim());//hitesh

console.log(newStrings.replace('h', 'd')); //   ditesh
console.log(newStrings); //  hitesh

console.log(newStrings.includes('h')); //true

console.log(gameName.split('-')); // [ 'hiteshc' ]

