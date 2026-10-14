// High order Array
// pe charcha karenge

const arr = [1,2,3,4,5,6];
for (const i of arr){
    console.log(i);
}

const greetings = "Hello World";
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// Map pe charch akarte hain ji
const map = new Map()
map.set('In', "India");
map.set('USA', "United States of America");
map.set('UK', "United Kingdom");

// maps unique value rakhte hai okay baacha
// jis order me enter kia hai ussi order me rahenmge

for (const key of map){
    console.log(key);
}// reults:->
// [ 'In', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'UK', 'United Kingdom' ]

for (const [key, value] of map){
    console.log(key, ':-', value);
}// results
// In :- India
// USA :- United States of America
// UK :- United Kingdom
let myobj = {
    name:"dev"
}
for (const key in myobj){ // sirf yahin abhi tak in use hua hai
    console.log(key); //name

    console.log(myobj[key]); // dev
}

for (const key in arr){
    console.log(key);
}
// for in loop index deta hai 
// answer 0 1 2 3 4 5 6

for (const key in arr){
    console.log(arr[key]);
} // results will be
// 1 ,2 3,4, 5,6

arr.forEach(element => {
    console.log(element*2 +1);
}); // 3 5 7 9 11 13