/*
Write a function that takes an integer n, 
reverses the binary representation of that integer, 
and returns the new integer from the reversed binary.

//-- FOR TESTING --//
reversedBinaryInteger(10) ➞ 5
// 10 = 1010 -> 0101 = 5

reversedBinaryInteger(12) ➞ 3
// 12 = 1100 -> 0011 = 3

reversedBinaryInteger(25) ➞ 19
// 25 = 11001 -> 10011 = 19

reversedBinaryInteger(45) ➞ 45
// 45 = 101101 -> 101101 = 45

*/

const reversedBinaryInteger = (arr) => parseInt(arr.toString(2).split("").reverse().join(""),2)

console.log(reversedBinaryInteger(10)) // 5
console.log(reversedBinaryInteger(12)) // 3
console.log(reversedBinaryInteger(25)) // 19
console.log(reversedBinaryInteger(45)) //45