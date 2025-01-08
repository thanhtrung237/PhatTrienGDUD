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

let markHigherBMI1 = bmiMark1 > bmiJohn1;
let markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log(`Data 1: BMI của Mark = ${bmiMark1.toFixed(2)}, BMI của John = ${bmiJohn1.toFixed(2)}, Mark có BMI cao hơn: ${markHigherBMI1}`);
console.log(`Data 2: BMI của Mark = ${bmiMark2.toFixed(2)}, BMI của John = ${bmiJohn2.toFixed(2)}, Mark có BMI cao hơn: ${markHigherBMI2}`);
