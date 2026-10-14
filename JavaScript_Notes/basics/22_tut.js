// var c = 300;

// nested scope

function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        console.log(username);

    }
    // console.log(website); // 2 k andar define hua tha toh kaise hoi dikh ajyega
    two()
}

one();
// two can acess any variable from one 

// closure andar ka function bahar k values ko acess kar pta hai
// lekin bahar ka banda andar ki variable ko acess nhi kar pata hai


if (true){
    const username = "hitesh";
    if (username=="hitesh"){
        const website = "youtube";
        console.log(username+website);
    }

}

// intresting

const addtwo = function(num){
    return num+2;
}// also a function here 

