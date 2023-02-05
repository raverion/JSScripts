/*
// variables
let myVar1 = "Hello World";
let myVar2 = "Hello World";
console.log(myVar1);

// constants
const interestRate = 0.3;
console.log(interestRate)

// primitive types / value types
let randomName = 'this is a string'; // string literal
let num = 1.12; // number literal
let bool = true; // boolean literal
let spam; // undefined
let nothing = null; // object

let myVar3 = 'this is a string';
console.log(typeof(myVar3));
myVar3 = 4;
console.log(typeof num);
console.log(typeof bool);
console.log(typeof randomName);
console.log(typeof spam);
console.log(typeof nothing);

// reference types (objects, arrays, functions)
let person = {
    name: "Rej",
    age: 26
}; // object literal
console.log(typeof person);

// dot notation for reassigning object properties
person.age = 99;
person.name = "thomas";

console.log(person);

// bracket notation (for dynamic property access)
let selection = 'name';
person[selection] = "Randall";
selection = 'age';
person[selection] = 11;
console.log(person.name)
console.log(person.age)

// arrays
let myArray = []; // empty array literal
myArray[0] = 1;
myArray[3] = 'purple'
myArray[3] = 0
myArray[1] = 3;

console.log(myArray);

myArray[3] = 3.14;
console.log(myArray);
console.log(myArray.length);

let myBool = myArray[2];
console.log(myBool);

// Functions
function myFunc(message) { // message is a parameter
    console.log("Hello, " + message);
}

myFunc("Randall"); // "Randall" is an argument (actual value supplied to the parameter)

function square(number) {
    result = number* number;
    return result;
}

result = square(3);
console.log(result);

function sym() {
    arguments[0].sort()
    arguments[1].sort()

  // get the array size of the largest argument
//   max_size = 0;
//   for (idx = 0; idx < arguments.length; idx++) {
//     if (arguments[idx].length > max_size) {
//       max_size = arguments[idx].length;
//     }
//   }
  // rearrange each array so that the element appears on the index equal to the value itself (e.g. a 3 should be placed on index 2 of the array)
  for (args_idx = 0; args_idx < arguments.length; args_idx++) {
    for (idx = 0; arguments[args_idx][idx] != undefined; idx++) {
      value = arguments[args_idx][idx]
      arguments[args_idx][idx] = undefined
      arguments[args_idx][value-1] = value
    }
  }
  
    let outputObject = {
        output1:arguments[0],
        output2:arguments[1]
    };

    return outputObject;
}*/
/* 
 */

