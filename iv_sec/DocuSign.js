// Hello Everyone,

// Recently a recruiter from DocuSign reached out to me via LinkedIn. He arranged a machine coding round with me. The interviewer was based out of Seattle so this interview happend at late evening IST time.

// After introducing each other, he asked me to explain a product/feature that I have built and I am proud of.

// He asked specific questions regarding the feature that I mentioned in response to his earlier question. He asked me to code solution for following problem.

// I wrote the solution in a Hackerrank notepad but didn't execute it because that was the requirement.

// I noticed that there isn't a single post about DocuSign interview process so I decided to post one. Hope you find it useful.
// Happy to help !

// Find input string in a file. The file is large that we cannot fit in memory. You have an API to access the file character by character. 

// API
// char getChar(); // returns null when empty

// Example: 
// input: bca
// file: abcabe
// return true

// Example: 
// input: cba
// file: abcabe
// result: false

// Example:
// input: ababc
// file: abababc
// return: true

// bool findString(input);
// **/
// This is the code that I wrote :

// var readString = ""
// const file = "abcabe"
// var i = 0;

// const getChar = () => {
//   const sendString = file[i++];
//   if (!sendString) {
//     return null;
//   }
//   return sendString
// }

// const findString = (input) => {
//   let char;

//   while (1) {
//     char = getChar();

//     if (!char) {
//       return false;
//     }

//     readString = readString.concat(char);

//     if (input.includes(readString) && input.length === readString.length) {
//       return true
//     } else if (!input.includes(readString)) {
//       readString = readString.substring(1)
//     }
//   }
// }

// console.log(findString("bca"));
// P.S : Constructive feedback about the code quality is welcomed.