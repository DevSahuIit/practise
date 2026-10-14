// arrow function 
// pe charcha karte hain
const user = {
    username: "hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    } 
    // this matlab is scope ka context 
}

console.log(this);


user.welcomeMessage(); //hitesh , welcome to website

user.username = "dev";
user.welcomeMessage();
// dev , welcome to website
//c hange ho gya bkc



/*
{} // node enviroment me kuch nhi hogi
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
dev , welcome to website
{
  username: 'dev',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this) // {} bahar kuch nhi rehta haiu


function chai(){
    console.log(this);
}
chai();
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

// arrow function
const chais = ()=>{
    let username = "hiotesh";
    console.log(this.username);
}
chais(); //undefined


// arrow function me kya dioffrence hai batao??

const addtwo = (num1, num2)=>{
    return num1+num2;
}
console.log(addtwo(2,3));

//return likhne ka bhi naya tarika hai
const addtwos = (num1,num2) => (num1+num2);
console.log(addtwos(3,4));

const myArray = [2,3,4,5,6,8];
myArray.forEach((x)=>(console.log(2*x)));
