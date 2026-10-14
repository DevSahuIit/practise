// primitive data type -> they are called by copying them , chanmges  are done to the copy
// 7 types: string , number, boolean, null, undefined, Symbol, BigInt

// Refrence type(non primitive):
//  Array, Objects, Function

// javascript dynamic or static
// JavaScript is a dynamically typed language, meaning variables are not bound to a specific data type at declaration.

const id = Symbol('123');
const id2 = Symbol('123');
console.log(id); // Symbol(123)
console.log(id2);//Symbol(123)
console.log(id==id2);// false

// const bigNumber = 23498723948072348907234890 // automatically bigint 
const heros = ["spiderman", "poanda", "wakanda"];
let obj = {
    name:"hitesh",
    age: 22
} // declaring an object any thing can be stored in it 

const myFunction = function(){
    console.log("Hello World");

}
console.log(typeof myFunction) // function
console.log(typeof null); // object
