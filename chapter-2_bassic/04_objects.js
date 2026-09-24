const tinderUaer = new Object()
const tinderUser = {}

tinderUser.id = "3234cd"
tinderUaer.name = "sammy"
tinderUaer.isLoggedIn = false

// console.log(tinderUaer);

const regunaruser = {
    email: "some@gmail.com",
    fullname :{
        userfullnaem:{
            firstname : "ayan",
            lastname:"sen"

        }
    }
}

// console.log(regunaruser.fullname.userfullnaem.firstname);  //go deeper using '.'

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 ,obj2}
// const obj3 = Object.assign({} ,obj1 ,obj2 ,obj4)    //refer docs :object assign

const obj3 = {...obj1,...obj2 }
console.log(obj3);



// when data comes from databse 
const Users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

Users[1].email
console.log(tinderUaer);

console.log(Object.keys(tinderUaer));
console.log(Object.values(tinderUaer));
console.log(Object.entries(tinderUaer));

console.log(tinderUaer.hasOwnProperty('isLoggedIn'));  //true


