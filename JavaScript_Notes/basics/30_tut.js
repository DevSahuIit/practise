// Filter map and Reduce in javascript
// kya hota hai


const coding = ['js', 'ruby', 'java','python','cpp'];
const values = coding.forEach((item)=>{
    console.log(item);
    return item;
})
// sare values print kar diyeh

console.log(values); // undefined
// aisa hi kyun??
// for each koi values return nhi krta hai yeah baat rakhna 

// we use filter for those

const arr = [1,2,3,4,5,6,7,8,9];
const b = arr.filter((num)=> num>4);
// same as 
// arr.filter( (num)=>{
//     return num>=4
// })
// scope open kia ho toh pakka return likhna padeg awarna write directkly

console.log(b);//[ 5, 6, 7, 8, 9 ]


// map dekho kya karta hai
const newarr = arr.map((num)=> num+10);
console.log(newarr);
const newar = arr.map((num)=> {num+20});
console.log(newar);

/*
[
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined, undefined,
  undefined
]
*/

const neA = arr.map((num)=>num*10).map((num)=>num+1);
console.log(neA);
/*
[
  11, 21, 31, 41, 51,
  61, 71, 81, 91
]
*/

const initialValue=0;
sumArr = arr.reduce(
    (accumlator,currentValue) => accumlator+currentValue,
    initialValue
);
console.log(sumArr); // 45

const myTotal = arr.reduce(function(acc,currVal){
    console.log(`${acc} ${currVal}`);
    return acc+currVal;
},0);

console.log(myTotal);