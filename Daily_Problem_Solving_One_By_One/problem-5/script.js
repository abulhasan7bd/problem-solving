
// problem ----- 5 -----
// Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
// If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
// If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
// In this problem. We will consider 0 as an odd number.


// // Example 1:
// // Input: [ 3, 6, 5, 4, 8, 10 ]
// // Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
// // Example 2:
// // Input: [ 0, 2, 4, 7, 9 ]
// // Output: [ 0, 2, 7 ]

// // Constraints:
// // Array length cannot be negative.


// convert 
// let text = "ABCDEFG"
// const myArr = Array.from(text);

// const numbers = [8, 19, 5, 6, 14, 9, 13];
// const odds = [];
// numbers.forEach((num) => {
//   if (num % 2 === 1) {
//     odds.push(num);
//   }
// });
// console.log(odds); // [19, 5, 9, 13]
const numbers =[2,4,5,6,5,3,2];
const odd = [];
numbers.map( (x)=>{
    if(x%2===1){
        odd.push(x);
    }
})
console.log(odd);
