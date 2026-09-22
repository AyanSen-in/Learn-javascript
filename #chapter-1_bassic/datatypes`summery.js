// primitive and non-primitive
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// ##const score = 100 (static type /dynamically typed   ---? )
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;             //undefined


//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //=false

// const bigNumber = 3456543576654356754n   //#//big int data type 



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


console.log(typeof bigNumber);
console.log(typeof myFunction); //function
// it called function obj



// eturn type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




// https://262.ecma-international.org/5.1/#sec-11.4.3