// Type assignment for numbers
const age: number = 30;
function doubleNumber(age: number) :number{
   return age * 2;
}

console.log(doubleNumber(age))

const num: number = 10;
function squareNumber(num:number):number{
    return num* num
}

console.log(squareNumber(num))

// // Type inference for a boolean
// const isStudent = true;

// // Type assignment for a string
// const username: string = "Alice";

// // Function that uses type assignment and type inference
// const greet = (user: string, isStudent: boolean): string => {
//   if (isStudent) {
//     return `Hello, ${user}! Are you enjoying your studies?`;
//   } else {
//     return `Hello, ${user}! How can I assist you today?`;
//   }
// };

// // Using the function with type inference
// const greetingForAlice = greet(username, isStudent);

// // // Output the results
// // console.log(`Age: ${age}`);
// // console.log(`Greeting for Alice: ${greetingForAlice}`);

export {};
