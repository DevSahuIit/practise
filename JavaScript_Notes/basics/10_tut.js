let num1, num2, num3;


// memories 2 tyope ki hoti hai 
// stack and heap

// primitive->stack copy milegi
// non primitive -> heap refrence milegi


let user = {
    email: "dev@gmail.com",
    upi : "user@ybl"
}

let user2 = user;
console.log(user2.email)  // dev@gmail.com