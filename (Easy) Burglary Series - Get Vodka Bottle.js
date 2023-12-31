/*
The insurance guy laughs, he's just kidding. He just needs an updated list. 
You just need one of those Rammstein Vodka bottles.

Given an object with alcoholic drinks and a number, return a string with the name of the 
Rammstein bottle that matches the given number.

//-- FOR TESTING --//

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70

NOTES:
    There will always be a corresponding Rammstein bottle for the number given.

    There will never be 2 Rammstein bottles with the same number.

    You always return one Rammstein bottle.
*/

const getVodkaBottle = (obj, num) => Object.keys(obj).filter((el,ind) => Object.keys(obj)[ind].includes("Rammstein") && Object.values(obj)[ind] === num).shift()
    //return Object.entries(obj).filter(el => el[0].includes("Rammstein") && el[1] === num).flat(1)[0]

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },100)); // Rammstein A
console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 },50)); // Rammstein B
console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 },70)); // Rammstein D
