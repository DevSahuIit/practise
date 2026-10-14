// functions pe charcha 2.0
function calculateCardPrice(num1){
    return num1;
}
console.log(calculateCardPrice(200, 400, 500));
 

// agar bahoot sar einputs dalne ho toh ek sath 
// use ... operator

function calculate(...nums1){
    return nums1;
}
console.log(calculate(200,300,400,900));
// [ 200, 300, 400, 900 ]

function calculates(val1, val2, ...nums2){
    return nums2;
}
console.log(calculates(200,3000,400,900,400,200));
// [ 400, 900, 400, 200 ] last walon ko le lia usne 

const user = {
    username: "hitesh",
    price: 199
}
function handleobj(myobj){
    console.log(`Username is ${myobj.username} and price is ${myobj.price};`)
}

// passing arrays 
const myNewArray = [200,300,400,500,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(myNewArray); //300

