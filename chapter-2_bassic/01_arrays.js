// array

// const myArr =[0, 1, 2, 3, 4, 5 , true , " ayan"]  // true and  " ayan " can be added here is also array( mix data types)
const myArr =[0, 1, 2, 3, 4, 5 ]  
// const myHeros = ["thor", "loki" ," ironman"]

// // ***
// const myarr2 = new Array(1,2,3)
// console.log(myArr[1]);  // indexing start with 0


// it creats shallow copy 

// #Array methods 

// myArr.push(6)   //value addes (6) in the previous arr
// myArr.push(7)   //value addes (7) in the previous arr
// myArr.pop( )    // pop => removs the last value 

myArr.unshift(9)  //add value in first
myArr.shift()  //removes the first value 

console.log(myArr.includes(9));   //it helps to find any value   and give output in true and false 
console.log(myArr.indexOf(9));     // 9 or any number is not in the array then =gives -1(not exists) or if (any existing value)=> then gives 1

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);  // gives output in steing 



//slice , splioce

console.log("A" , myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);             //[ 1, 2 ]  
console.log("B" , myArr);


const myn2 = myArr.splice(1, 3)
console.log("C" , myArr);       //C [ 0, 4, 5 ]   main arr
console.log(myn2);             //[ 1, 2, 3 ]

// "splce" remove the portion from the main array but "slice" does't  #manuplate the orignal array "splice "