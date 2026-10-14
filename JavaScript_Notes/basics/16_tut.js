// objects

// singleton



// obnject literals

const JsUSer = {
    name : "hitesh", 
    // full name:  aise de nghi paoge 
    "full name": "dev sahu"
};
console.log(JsUSer.name); // hitesh

// console.log(JsUSer[name]); will not work
console.log(JsUSer["name"]); // hitesh

// console.log(JsUSer.full name)
console.log(JsUSer["full name"]); //dev sahu


const mysym = Symbol("key1");

// how to add a sym,bol in a  key


const jus = {
    mysm : "keys1"
}
console.log(typeof jus.mysm); // string
// we always wanted it to be a symbol 
// now how to do it lets go
const mysm = Symbol("key1");
const just = {
    [mysm]:"key1"
}
console.log(typeof just[mysm]); // string hi aayega bas ab yeah ek symbol hai

JsUSer.name = "dev";
console.log(JsUSer);//{ name: 'dev', 'full name': 'dev sahu' }

// objexct ko freeze karne ka code xist karta hai jisse object freeze ho jata hai

JsUSer.greetings = function(){
    console.log("hello niggash");
}
console.log(JsUSer.greetings); // [Function (anonymous)]


 