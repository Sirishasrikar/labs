// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
// Finally, log the results.
console.log(isValid);

// are all given numbers divisible by 5?
const isDivisible = (n1 % 5 ==0) && (n2 % 5 ==0) && (n3 % 5 ==0) && (n4 % 5 ==0)
console.log(`All numbers are divisible by 5 : ${isDivisible} \n` );
// Check if the first number is larger than the last. Cache the result in a variable.
const isn1greaterthann4 = (n1 > n4);
console.log(`Is first number greater than last number? : ${isn1greaterthann4} \n`);
// Subtract the first number from the second number
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
const alloperations = ((n2 - n1) * n3) % n4;
console.log(`The result of all the operations together is : ${alloperations} \n`);
//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
//Rename the variable as appropriate.
console.log("=================================================================================== \n");
//part 2 Cross Country trip//
// The initial numbers that must be verified.
const totaltrip = 1500;
const fuelbudget = 175;
const fuelcost = 3;
var  fuelrequired = (fuelbudget/fuelcost);
console.log(`Gallons of fuel we get for $175  (fuel cost $3 per/gallon) : ${fuelrequired} \n`);
console.log("=================================================================================== \n");
// travelling with 55 avg speed details
console.log("travelling with 55 avg speed details \n");
console.log(`Gallons of fuel needed for the entire trip: ${(totaltrip/30)} \n `);
var budjet = ((totaltrip/30)*3) < 175;
console.log(`Is the budget enough to cover the fuel expense? : ${budjet} \n`);
console.log(`How long will the trip take, in hours? : ${(totaltrip / 55)} \n`);
// travelling with 60 avg speed detaits
console.log("===================================================================================");
console.log("travelling with 60 avg speed details \n");
console.log(`How many gallons of fuel will you need for the entire trip? : ${(totaltrip/28)} \n`);
var budjet = ((totaltrip/28)*3) < 175;
console.log(`Is the budget enough to cover the fuel expense? : ${budjet} \n`);
console.log(`How long will the trip take, in hours? : ${(totaltrip / 60)} \n`);
// travelling with 75 avg speed detaits
console.log("===================================================================================");
console.log("travelling with 75 avg speed details \n");
console.log("How many gallons of fuel will you need for the entire trip? : " + (totaltrip/23)  + "\n");
var budjet = ((totaltrip/23)*3) < 175;
console.log(`Is the budget enough to cover the fuel expense? : ${budjet} \n`);
console.log(`How long will the trip take, in hours? : ${(totaltrip / 75)} \n`);