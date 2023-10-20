// CODECADEMY JAVASCRIPT PRACTICE - concise_body_arrow_functions assignment

// Task 1 - Let’s refactor plantNeedsWater() to be a concise body. 
// Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.

const plantNeedsWater = day => day === 'Wednesday' ? true : false; 

// True test
console.log(plantNeedsWater('Wednesday'));

// False test
console.log(plantNeedsWater('Monday'));
