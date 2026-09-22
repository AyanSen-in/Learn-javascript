// two ways to declear object 
// singleton

// object literals 

// Object.create   one other methode 

const mySym =Symbol("key1")

const JsUser = {
    name:"ayan",
    "fullName" :"ayan Sen",
    // mySym: "mykey1",
    [mySym]:"mykey1",    //with sq brakets it is symbol otherwise not 
    age :19,
    location:"jaipur",
    email: "ayan@google.com",
    isLoggedIn :false,
    lastLoggedinDays :["monday" , "saturday"]
}

// console.log(JsUser.email);  //it is not proper way
console.log(JsUser["email"]);  //
console.log(JsUser["fullName"]);  //
// console.log(JsUser.mySym);  //
// console.log(typeof JsUser.mySym);  //string
console.log(typeof JsUser[mySym]);  //mykey1


JsUser.email = "ayan@chatgpt.com"
// Object.freeze(JsUser)         //obj freeze
JsUser.email = "ayan@microsoft.com"
console.log(JsUser);


JsUser.greeting = function (){
    console.log("hello js user ");    
}

JsUser.greetingtwo = function (){
    console.log(`hello js user ,${this.name} `);    //hello js user ,ayan
}

// console.log(JsUser.greeting); //undefined
console.log(JsUser.greeting()); //undefined
console.log(JsUser.greetingtwo()); //undefined
