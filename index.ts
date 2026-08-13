// Type assignment for numbers
const age: number = 30;
function doubleNumber(age: number) :number{
   return age * 2;
}



const num: number = 10;
function squareNumber(num:number):number{
    return num* num
}



// // Type inference for a boolean

function isEven(num: number):boolean{
    return num % 2 === 0;
}

function isAdult(age: number):boolean{
    return age >= 18;
}




// // Type assignment for a string
function reverseString(value: string):string{
    return value.split('').reverse().join('')
}


function capitalizeString(value: string):string{
    return value[0].toUpperCase() + value.slice(1)
}




// // // Output the results
console.log(doubleNumber(age));
console.log(squareNumber(num));

console.log(isEven(10))
console.log(isEven(11))
console.log(isAdult(20));
console.log(isAdult(2));


console.log(reverseString("world"));
console.log(capitalizeString("world"));

export {};
