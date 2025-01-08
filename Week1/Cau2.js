let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85; 
let johnHeight2 = 1.76;

function BMI(mass, height) {
  return mass / (height * height);
}

let bmiMark1 = BMI(markMass1, markHeight1);
let bmiJohn1 = BMI(johnMass1, johnHeight1);
let bmiMark2 = BMI(markMass2, markHeight2);
let bmiJohn2 = BMI(johnMass2, johnHeight2);

// Data 1 Comparison
if (bmiMark1 > bmiJohn1) {
  console.log(`Data 1: BMI của Mark (${bmiMark1.toFixed(2)}) cao hơn John's (${bmiJohn1.toFixed(2)})!`);
} else {
  console.log(`Data 1: BMI của John (${bmiJohn1.toFixed(2)}) cao hơn Mark's (${bmiMark1.toFixed(2)})!`);
}

// Data 2 Comparison
if (bmiMark2 > bmiJohn2) {
  console.log(`Data 2: BMI của Mark (${bmiMark2.toFixed(2)}) cao hơn John's (${bmiJohn2.toFixed(2)})!`);
} else {
  console.log(`Data 2: BMI của John (${bmiJohn2.toFixed(2)}) cao hơn Mark's (${bmiMark2.toFixed(2)})!`);
}