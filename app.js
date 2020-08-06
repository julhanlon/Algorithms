
// arr = [1,2,3,3,4,6,6,7]

// const removeDuplicates = require('./removeDuplicates')
// const showVowels = require('./showVowels');
const capitalizeWords = require('./capitalizeWords');


// console.log(removeDuplicates(arr));


const str2 = "this will be capitalized";
const formatted = capitalizeWords(str2);

console.log({before: str2, after: formatted});