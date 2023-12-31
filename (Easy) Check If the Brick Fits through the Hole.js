/*
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and 
returns true if this brick can fit into a hole with the width(w) and height(h).

//-- FOR TESTING --//

doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false

NOTES:
    You can turn the brick with any side towards the hole.
    
    We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
    
    You can't put a brick in at a non-orthogonal angle.
*/
const doesBrickFit = (a,b,c, w,h) => [a*b,a*c,b*c].some(el => el <= w*h)

console.log(doesBrickFit(1, 1, 1, 1, 1)) // true
console.log(doesBrickFit(1, 2, 1, 1, 1)) // true
console.log(doesBrickFit(1, 2, 2, 1, 1)) // false