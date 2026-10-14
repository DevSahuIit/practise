// numbers pe charcha and maths ope charcha


// explicitly kaise define karein , datatype

const score = 400;
const balance = new Number(100);
console.log(score); //400
console.log(balance);// [Number: 100]


console.log(balance.toString()) // string ban gya
// balance.tostring() is nopw a string and we can use multiple methods on it

console.log(balance.toFixed(2));// returns a string with 2 positions round off
// 100.00

const otherNumb = 23.8696
console.log(otherNumb.toPrecision(3)); // 23.9
/// precision ka matlab dekho dhang se




const hundreds = 100000
console.log(hundreds.toLocaleString('en-In')); // 1,00,000

console.log(Math);
// Object [Math] {}
console.log(Math.abs(-4));

/*
• math.abs(x): Absolute value.
• math.add(x, y, ...): Add values together.
• math.cbrt(x): Cube root.
• math.ceil(x): Round up toward positive infinity.
• math.cube(x): Calculate the cube (\(x^{3}\)).
• math.divide(x, y): Divide two values.
• math.dotDivide(x, y) / math.dotMultiply(x, y) / math.dotPow(x, y): Element-wise matrix operations.
• math.exp(x) / math.expm1(x): Exponential operations (\(e^{x}\) and \(e^x - 1\)).
• math.fix(x): Round toward zero.
• math.floor(x): Round down toward negative infinity.
• math.gcd(a, b, ...): Greatest common divisor.
• math.hypot(a, b, ...): Hypotenuse of a list of values.
• math.lcm(a, b, ...): Least common multiple.
• math.log(x [, base]): Natural logarithm or log with custom base.
• math.log10(x) / math.log2(x) / math.log1p(x): Common base logarithms.
• math.mod(x, y): Modulus (division remainder).
• math.multiply(x, y, ...): Multiply values.
• math.norm(x): Calculate vector or matrix norm.
• math.nthRoot(a, n) / math.nthRoots(x): Roots calculations.
• math.pow(x, y): Power exponentiation (\(x^{y}\)).
• math.round(x [, n]): Round to nearest value (with optional decimal places).
• math.sign(x): Get sign of a value (-1, 0, or 1).
• math.sqrt(x) / math.square(x): Square root and square (\(x^{2}\)).
• math.subtract(x, y): Subtract \(x - y\).
*/

console.log(Math.max(4,3,2,1,34));//34
console.log(Math.min(3,1,0,-1)); // -1
console.log(Math.floor(4.9));// 4
console.log(Math.ceil(4.2))// 5


console.log(Math.random( ));// 0.5351599851854725
// 0 se 1 tak ki hi value ko dega mkal

console.log(Math.random( )*10 +1); 
const min = 20;
const max = 30;

console.log(Math.random() *(max-min ) + min);
30.1