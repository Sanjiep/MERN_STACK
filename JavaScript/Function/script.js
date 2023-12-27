// # Functions in JavaScript

//Block of code that performs a special task, can be execute whenever needed

// # Functon Definitions

// function myFunction() {
//     console.log("Welcome to Hello World!");
//     console.log("We are learning JS");
// }

// myFunction();

// function myFunction(msg, n){   //parameter --> input
//     console.log(msg * n);
// }
// myFunction("Hello I'm Sanjiep", 100);   //arguement

// function --> sum of 2 number

// function sum(a, b) {
//     s = a + b;
//     console.log("after");
//     return s;
//     console.log("before");
// }

// let num = sum(3,  4);
// console.log(num);

// # Important
// for parameters --> they are like local variables of function
// they have block scope of function\

// # Arrow Function

// compact way of writing function

// const myfun = (a, b) => {
//     console.log("Hello");
//     return a + b;
// }

// const mult = (a , b) =>{
//     return a * b;
// }

// let obj = {
//     username : "Sam",
//     age : 20
// }

// const user = {
//     username : "sanjiep",
//     age : 23,

//     greeting : function(){
//         console.log(`${this.username} Welcome to Hello world`);
//         console.log(this);
//     }

// }

// user.greeting()
// user.username = "Rohan"
// user.greeting()
// console.log(this);


// function ok(){
//     let username = "sanjiep"
//     console.log(this.username);
// }

// ok()


// const arr = () =>{
//     let username = "sanjiep"
//     console.log(this);
// }

// exclusively return 
// const addtwo = (num1, num2) => {
//     return num1 + num2
// } 
// console.log(addtwo(4,2));
// this can written in another form 


// inclusively return
// const addtwo = (num1, num2) => (num1 + num2) //if this written then return is not necessary to written
// console.log(addtwo(4,2));

//for object
// const addtwo = (num1, num2) => ({username: "sanjiep"})
// console.log(addtwo(4,2));


//------------------------------------------------

// # Practise Questions
// Q1. Create a function using the "function" keyword that takes a sting as an argument and returns the numbers of vowels in the strings

// function count(str) {
//   let vowel = 0;
//   for (let letter of str) {
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u" ||
//       letter === "A" ||
//       letter === "E" ||
//       letter === "I" ||
//       letter === "O" ||
//       letter === "U"
//     ) {
//       vowel++;
//     }
//   }
//   console.log(`Your nam have ${vowel} vowel.`);
// }

// count(prompt("Enter your name to check vowel number"));


//Q2. Same question with arrow function

// const countVow = (str) => {
//     let vowel = 0;
//       for (const letter of str) {
//         if (
//           letter === "a" ||
//           letter === "e" ||
//           letter === "i" ||
//           letter === "o" ||
//           letter === "u" ||
//           letter === "A" ||
//           letter === "E" ||
//           letter === "I" ||
//           letter === "O" ||
//           letter === "U"
//         ) {
//           vowel++;
//         }
//       }
//       return(`Your nam have ${vowel} vowel.`);
// }

// countVow(prompt("Please enter your full name: "));


// # function in object

// let myObj = {
//     username : "sanjiep",
//     id : 2002
// }

// const anobj = {
//     username : "Rohan", 
//     id : 2000
// }

// function printObject (items){
//     console.log(`Username is ${items.username} and id is ${items.id}`); 
// }

// printObject(myObj);
// printObject(anobj);
// printObject({
//     username: "hello",
//     id: 1990
// })


// # function for arrays 

// let num = [200, 300, 500, 304] ;

// function newNum (numItems){
//     return numItems[2] ;
// }   

// console.log(newNum(num));

// console.log(newNum([200, 300, 400, 500]));


// # Scope and globe

// function parent(){

//     const one = "parent value"

//     function child (){
//         const two = "child value"
//         // console.log(one);  // child can print parent value 
//     }
//     // console.log(two); // parent cannot print child value

//     child()
// }

// parent()

// if (true) {
//     const username = "sanjiep"

//     if (username === "sanjiep") {
//         const one = " magar"
// console.log(username + one);
// }
// console.log(one);
// }
// console.log(username);



// ----------------------------------------------

// # for-each loop in arrays 

// let arr = [5, 3, 5, 6, 7, 8];

// arr.forEach(function printValue(items){
//     console.log(items);
// })


// let city = ["kathmandu", "pokhara", "butwal"];

// city.forEach((items, index, arr) => {
//     console.log(items.toUpperCase(), index, arr); //printing items, position and full arrays
// })


// # Higher order function or methods

// ==> those functions who take other function as parameters or those function who returns others functions


// # Practise Questions
// Q1. Find a given arrays of numbers, print the square of each value using the forEach loop

// let num = [1, 2, 3, 4, 5, 6]

// num.forEach((square) => {
//     console.log(square * square);
// });


// # Arrays Mehtods 
// # map ====> maps help to create new arrays  


// let num = [10, 20, 30, 40]

//  let newarr = num.map((items) => {
//     return items * 2;
//  });
//  console.log(newarr);

//  num.forEach((square) => {
//      console.log(square * square);
//  });


// # filter ======> to filter of arrays with given conditons

//This example of getting even value in arrays with filter methods

// let num = [22, 2, 8, 4, 36, 89, 33, 29, 64, 99];

// let evenArr = num.filter((items)=>{
//     return items % 2 == 0;
// });

// console.log(evenArr);


// # Reduce methods
// peforme to reduce the arrays to a single arrays and it returns that single value

const arr = [20, 30, 40, 50, 60]

const output = arr.reduce((pre, curr) => {
    return pre > curr ? pre : curr;
});

console.log(output);

// # Practice 
// Q1. We are given array of students. Filter out of the marks of the students that scored 90+.


// const marks = [500, 45, 100, 200, 50, 68, 98, 80, 92, 94]

// let result = marks.filter((score) =>{
//     return score > 90;
// })

// console.log(result);


// Q2. Creat a program that user input to create a array of given numbers


// let arrNum = prompt("Please enter to create a array:");
// arrNum = Number.parseInt(arrNum);

// let arr = [];

// for (i = 1; i <= arrNum; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// Use the reduce methods to add sum of input arrays
// let sum = arr.reduce((pre, curr) => {
//     return pre + curr;
// })

// console.log("Sum is ", sum);

//Use the reduce methods to calculate product/factorial muliple of all numbers in the arrays

// let fac = arr.reduce((pre, curr) =>{
//     return pre * curr;
// })

// console.log("Factorial is", fac);