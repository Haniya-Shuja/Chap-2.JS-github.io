
// Practice exercise 2.1

// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:


let str = "lavrence";
console.log (str);
console.log( typeof str);
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;


let nr = 7;
console.log(nr)
console.log( typeof nr);


let val1 = undefined;
console.log( typeof val1);

let val2 = null;
console.log(val2);
console.log( typeof val2);

let myNum = 1000;
console.log(myNum)

// Practice exercise 2.2

// Create variables

// Create a variable for your name, another one for your age, and another one for
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are
// variables:
let myName = "Haniya";
let myAge = 25; // I don't have a real age, so I'm just using a placeholder number
let canCodeJavaScript = true;

// Log the sentence to the console
console.log("My name is " + myName + ", I am " + myAge + " years old, and I can code JavaScript: " + canCodeJavaScript);


//  Practice exercise 2.3


// Get the values of the other two sides (a and b) from the user
const a = parseFloat(prompt("Enter the length of side 'a':"));
const b = parseFloat(prompt("Enter the length of side 'b':"));

// Check if the input is valid (non-empty and numeric)
if (isNaN(a) || isNaN(b)) {
  console.log("Invalid input. Please enter numeric values for a and b.");
} else {
  // Calculate the hypotenuse using the Pythagorean theorem
  const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  // Print the result to the console
  console.log(`The length of the hypotenuse (side 'c') is: ${c.toFixed(2)}`);
}


// Practice exercise 2.4

// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console


let d = 10; // Initialize a with a value
let e = 5;  // Initialize b with a value
let f = 8;  // Initialize c with a value

// Add b to a
d += e;

// Divide a by c
d /= f;

// Replace the value of c with the modulus of c and b
f %= f;

// Print all three numbers to the console
console.log("d:", d);
console.log("e:", e);
console.log("f:", f);

// self-check quiz
// Q9
let firstNum = 5;
let secondNum = 10;
firstNum++ ;
secondNum-- ;
 let total = ++firstNum + secondNum;
 console.log(total);
let total2 = 500 + 100 / 5 + total--;
console.log(total2);

// Q10. 

// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0);
// console.log(a == 5 && b == 4);
// console.log(true ||false);
// console.log(a == 3 || b == 10);
// console.log(a == 3 || b == 7);