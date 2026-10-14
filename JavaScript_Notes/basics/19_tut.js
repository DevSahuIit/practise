// fucntions pe charcha

console.log("h");
console.log("i");
console.log('t');

function sayMyname(){
    console.log("hello i am dev sahu");
}
sayMyname();
// hello i am dev sahu

function addtwonumb(numb1, numb2){
    return numb1+numb2;
}

console.log(addtwonumb(1,"2")); //12

const result = addtwonumb(1,2); 
console.log("Results: ", result);

function add(numb1, numb2){
    console.log(numb1+numb2);
}
const res = add(12,3)
console.log("Results: ",res); // Results: undefined 
// kyunki kuch return toh kia nhi tha humne baccha

function login(name){
    return `${name} is been logged in `;
}

