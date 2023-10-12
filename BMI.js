// BMI calculator


// Set values for height in inches and weight in pounds, then convert the values to
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console.




// To create a BMI calculator in JavaScript. First, set values for height in inches and weight in pounds. 
// Then, convert these values to centimeters and kilograms, and finally, calculate and log the BMI




// Set values for height in inches and weight in pounds
const heightInInches = 70; // For example, 70 inches
const weightInPounds = 160; // For example, 160 pounds

// Convert inches to centimeters and pounds to kilograms
const heightInCentimeters = heightInInches * 2.54;
const weightInKilograms = weightInPounds / 2.2046;

// Output the converted values
console.log("Height in centimeters:", heightInCentimeters);
console.log("Weight in kilograms:", weightInKilograms);

// Calculate BMI (Body Mass Index)
const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilograms / (heightInMeters ** 2);

// Output the calculated BMI
console.log("BMI:", bmi);
