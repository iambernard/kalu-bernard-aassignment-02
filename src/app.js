const assignment = require('./assignment.js');

const { sumOfNumbers, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbers && typeof sumOfNumbers === 'function'){
    console.log(sumOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}
 const sumOfNumber = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < sumOfNumber.length; i++) {
    sum += sumOfNumber[i];
}
console.log(sum);

if (countEvenNumbers && typeof countEvenNumbers === 'function'){
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}