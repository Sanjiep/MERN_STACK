// Pure function and impure function
// IIFE
// Anonymous function
// Call back function


const arr = [
    { id: 1, product: 'pizza', price: 700 },
    { id: 2, product: 'momo', price: 600 },
    { id: 3, product: 'burger', price: 900 },
]

// output 2200



let total = arr.forEach((item) => {
    // console.log(item.price);
    sum = sum + item.price;
    console.log(sum);
})


let a = arr.reduce((total, next, id) => {
    total = total + next.price;
    return total;
}, 0)
console.log(a)




const totalPrice = arr.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);


let sum = 0;
let total2 = arr.forEach(item => {
   sum = sum + (item.price);
    console.log(sum);
});