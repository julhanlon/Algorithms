const showVowels = (str) => {
    let result = {
      originalWord: str,
      vowels: [],
      vowelCount: 0,
    };
  ​
    const vowels = ["a", "e", "i", "o", "u"];
  ​
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        result.vowels.push(str[i]);
      }
    }
  ​
    result.vowelCount = result.vowels.length;
  ​
    return result;
}  



// function showVowels(str) {
//     let vowels = ["a", "e", "i", "o", "u"];
    
//     let Output = {
//         strOG: str,
//         vowels: [],
//         vowelCount: 0,
//     };
//     [...str].forEach((ele) => {
//         if (vowels.includes(ele)) {
//             Output.vowels.push(ele);
//             Output.vowelCount++;
//         }
//     });

//     return Output;
// }


// let test = "this is a test";
// console.log(showVowels(test));


// let inputString = "This is a input String which may contain spaces";
// ​
// const showVowel = (inputString) => {
//   let functionString = [...inputString];
//   let vowelDict = { a: 1, e: 1, i: 1, o: 1, u: 1 };
//   let returnString = [];
//   let vowelCount = 0;
//   for (let i = 0; i < functionString.length; i++) {
//     let item = functionString[i];
//     if (vowelDict[item]) {
//       returnString.push(item);
//       vowelCount++;
//     }
//   }
//   return {
//     originalWord: inputString,
//     vowels: returnString,
//     vowelCount: vowelCount,
//   };
// };
// ​
// let answer = showVowel(inputString);
// console.log(answer);

// const getVowels = (str) => {
//     let response = {
//       originalWord: str,
//       vowels: [],
//       vowelCount: 0,
//     };
//   ​
//     [...str].forEach((element) => {
//       let element2 = element.toLowerCase();
//   ​
//       if (
//         element2 == "a" ||
//         element2 == "e" ||
//         element2 == "i" ||
//         element2 == "o" ||
//         element2 == "u"
//       ) {
//         response.vowels.push(element);
//         response.vowelCount++;
//       }
//     });
//     return response;
  
// }


module.exports = showVowels;