// " hello " + "world "

const name = "ayan"
const repoCount = 50

// console.log(name + repoCount + " Value");   //#outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //#modern way

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);       //key value
// console.log(gameName.__proto__);


console.log(gameName); //[String: 'hasd']   
// console.log(gameName.length);           //4
// console.log(gameName.toUpperCase());    //HASD
console.log(gameName.charAt(2));           //s
console.log(gameName.indexOf('t'));        //3


const newString = gameName.substring(0, 4)
console.log(newString);                  //hasd

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);              //hasd

const newStringOne = "   ayan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));