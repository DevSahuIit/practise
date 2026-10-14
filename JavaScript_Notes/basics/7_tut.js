let str1 = "dev "
let str2 = "deep"
console.log(str1+str2)

console.log(1+1)
console.log("1"+2);
console.log("1"+2+"1");
console.log(1+"2"+"2");
console.log(1+2+"1");
/*
2
12
121
122
31
*/
console.log(+true);
// console.log(true+);  will thorw error 
/*
console.log(+true);  // 1
console.log(+false); // 0
Here's the breakdown:

true is a Boolean value.

The unary + operator converts the Boolean to a number.

true becomes 1, and false becomes 0.

console.log() prints the result.
*/