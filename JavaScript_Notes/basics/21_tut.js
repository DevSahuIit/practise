// scopes pe charcha karte hain ji
let a = 10;
const b = 20;
var c = 30;
console.log(a);
console.log(b);
console.log(c);

// dikkat kahan aati hai jahan scope {} aa jata hai
if (true){
    let a = 20;
    const b = 30;
    var c = 40;
    //c=40 aise likhte toh bhi change kar deta 
    console.log('a is',a);
    console.log('b is ',b);
    console.log('c is ',c);   
}
console.log('a is ',a);
console.log('b is ',b);
console.log('c is ',c);  