/*
Write a function redundant that takes in a string str and returns a function that returns str.

//-- FOR TESTING --//

const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""

NOTES:
    Your function should return a function, not a string.
*/

const redundant = (a) => () => a;


const f1 = redundant("apple")
console.log(f1()) // "apple"

const f2 = redundant("pear")
console.log(f2()) // "pear"

const f3 = redundant("")
console.log(f3()) // ""