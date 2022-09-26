let tomHeight = 9;
let tomMass = 8;
let jerryHeight = 10;
let jerryMass = 45;

let bmiTom = tomMass / tomHeight ** 2;
let bmiJerry = jerryMass / jerryHeight ** 2;
let total = bmiTom > bmiJerry;

console.log(`Is Tom's BMI higher than Jerry's ${total}`);