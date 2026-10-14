// code execution dekho 
// imp for interview

// Javascript Execution context

// GLobal Execution context 
// Function Execution Context
// Eval Execution Context
 

// Memory creation phase(Creation Phase)
// Execution Phase

let val1 = 10;
let val2 = 20;
function addnu(nums1, nums2){
    let total = nums1+nums2;
    return total;
}
let result1 = addnu(val1, val2);
let result2 = addnu(2,3);
//memory creation phase me
// val1 -> undefined
// val2 ->undefined
// addnum() -> undefined
// result1 => undefined
// result2 => unmdefined

// Execution phase
// val1 <- 10;
// val2 <- 20;
// addnu -> Execution Context ek aur. { new variabkle env + execution thread} // isme bhi phir se memory and execution phase
// iske andar ka
// sub memory location val1 -> undefined
// val2 -> undefined
// val3 -> undefined

// Execution Context 
// num1 -> 10;
// num2 -> 5;
// total -> 15

// kam hone k baD EXECUTION CONTEXT DELETE HO JAYEGA
