console.log("Hitesh")

const accountId = 144553
let accountEmail = "Dev@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

console.log(accountId)
// const keyword cannot be used
// accountId=123 not allowed to run thows erro
// console.log(accountId)

accountEmail = "DevSahu@gmail.com"
accountPassword = "2232121212"
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)

// here both email and password got changed
console.log([accountId, accountEmail, accountPassword, accountCity]) // better way to display things
// ab ham var nhi use karte hain 
// scope issue basically 
// initail days me scope naam ki chiz hi nhi thi 


/*
multiline comment is this shit
*/
let accountState;
console.log(accountState) // undefined will show

// var gets changed from any scope 
// local scope updation changed global var too
