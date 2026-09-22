// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
//ensure before comparision the datatype must same
// different data type comparision

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true    // problem of  value conversio
// // the reason is that an equality check == and comparision > <  = >= <= 
// works differently 
// comparision convert null to a number , treating it as 0 .
// Thats why (3) null >= 0 is true and (1) null>0 is false


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//all false


// === 

console.log("2" == 2); //true
console.log("2" === 2);  //false


console.log("2" == 2); //true