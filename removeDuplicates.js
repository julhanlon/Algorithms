

const removeDuplicates = (arr) => {
let newArray = [];
arr.forEach((num) => {
    if (!newArray.includes(num)) {
        newArray.push(num);
    }
})
return newArray
};

// const removeDuplicates = (nums) => {
//     const sortedNums = [...nums];
//     sortedNums.sort((a, b) => a - b);
//     let noDuplicates = [];
//     let nextNum;
//     sortedNums.forEach((number, index) => {
//       nextNum = sortedNums[index + 1];
//       if (number !== nextNum) {
//         noDuplicates.push(number);
//       }
//     });
//     return noDuplicates;
//   };
  



module.exports = removeDuplicates;