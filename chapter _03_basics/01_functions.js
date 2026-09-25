console.log("H");
console.log("v");
console.log("d");
console.log("e");
console.log("y");

//not recomenden (instead functions)

function sayMyName(){
    console.log("H");
    console.log("v");
    console.log("d");
    console.log("e");
    console.log("y");

}

// sayMyName()  // it is called execution and without () it is called referance

// function addTwoNumbers(number1 ,number2){
//     console.log(number1 + number2);
    
// }

// addTwoNumbers(5,6)   //provide the numbers in the () arguments 
// addTwoNumbers(5,"4")   //what if a string is there  #54
// addTwoNumbers(5 , "a")   // returns 5a

// const result = addTwoNumbers(5,6)  
// console.log("result : ", result );


function addTwoNumbers(number1 ,number2){
    // let result = number1 + number2
    // return result
    // console.log("ayan");  //never be executed , after function nothing printe

    return number1 + number2  //more sorter 
}

const result = addTwoNumbers(5,6)  
// console.log("result : ", result );


function loginUserMassage (username = "sam"){
    if (username === undefined ){                   //if (!username){...}  equivalent 
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMassage("ayan"))
// console.log(loginUserMassage(""))    //what if empty string given
console.log(loginUserMassage())    