const marvel_heros =["thor","ironman", "spiderman"]
const dc_heros =["superman","flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   //gives output as array in array 
// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);


// const all_new_heros = [...marvel_heros, ...dc_heros]   //sprade operator
// console.log(all_new_heros);


const another_array = [1,2,3,4,[5,6],[8,6,[5,4,3]]]
const real_another_array = another_array.flat(Infinity)  // infinity is depth . there are many depths .arr in arrs 
console.log(real_another_array);
// [
//   1, 2, 3, 4, 5,
//   6, 8, 6, 5, 4,
//   3
// ]


console.log(Array.isArray("ayan")) //false 
console.log(Array.from("ayan")) //converts into array 
console.log(Array.from({name: "ayan"})) //intresting // it gives empty arrat .. you need to provide how be string 


let score1= 100
let score2=200
let score3 =300

console.log(Array.of(score1,score2,score3));
//give array of [ 100, 200, 300 ]