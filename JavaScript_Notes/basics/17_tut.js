

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "hitesh"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);//hitesh


const obj1 = {1:"hi", 2:"hello"};
const obj2 = {3:"gi", 7:"jwedfgweui"};

const obj3 = {obj1, obj2};
console.log(obj3);
// {
//   obj1: { '1': 'hi', '2': 'hello' },
//   obj2: { '3': 'gi', '7': 'jwedfgweui' }
// }






const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// {
// { '1': 'hi', '2': 'hello', '3': 'gi', '7': 'jwedfgweui' }
// object.assign(target, source);
// smae thimg can be done tgrough 
const obj5 = {...obj1, ...obj2};
console.log(obj5);
// { '1': 'hi', '2': 'hello', '3': 'gi', '7': 'jwedfgweui' }
console.log(Object.keys(obj5));
// [ '1', '2', '3', '7' ]

console.log(obj5.hasOwnProperty('1')); // true
// checks weather it exist as a key 
