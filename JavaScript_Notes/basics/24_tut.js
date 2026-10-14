// invoke function
// immediately Invoked function expressions(IIFE)

// ()() ; 
// () pehla denotes ki definitiuon, 2nd denotes execution
// ; for sure lga dena warn uske neeche dusra define nhi kar paoge iife
(function chai(){
    console.log(`DB connected`);
})();
//DB connected

((name)=>{
    console.log(`DB connected for ${name}`);
})('hitesh')

// DB connected for hitesh
