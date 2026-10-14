// dates in javascript pe charcha

let myDate = new Date();
console.log(myDate);
// 2026-10-12T20:19:20.527Z
console.log(myDate.toString());
// Tue Oct 13 2026 01:49:46 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleDateString());
// 13/10/2026

console.log(typeof myDate);
// object

let mydate = new Date(2023, 1, 23,5,3);
console.log(mydate.toLocaleDateString());
let date = new Date("01-14-2023");
console.log(date); // 2023-01-13 T18:30:00.000Z


// time stamp definition
let myStamp = Date.now();
console.log(myStamp.getTime());

// anhi bachja hai video dekh lo
