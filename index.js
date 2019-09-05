// The toString() Method
// The toString() method returns a number as a string.

{
  const x = 123;
  const result = x.toString(); // returns 123 from variable x
  const result2 = (123).toString(); // returns 123 from literal 123
  const result3 = (100 + 23).toString(); // returns 123 from expression 100 + 23
  console.log(`${result} ${result2} ${result3}`);
}
console.log("")
// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
{
  const x = 9.656;
  const result = x.toFixed(0); // returns 10
  const result2 = x.toFixed(2); // returns 9.66
  const result3 = x.toFixed(4); // returns 9.6560
  const result4 = x.toFixed(6); // returns 9.656000
  console.log(`${result}; ${result2}; ${result3}; ${result4}`);
}
console.log("")
// The Number() Method
// Number() can be used to convert JavaScript variables to numbers:
{
console.log(Number(true));          // returns 1
console.log(Number(false));         // returns 0
console.log(Number("10"));          // returns 10
console.log(Number("  10"));        // returns 10
console.log(Number("10  "));        // returns 10
console.log(Number(" 10  "));       // returns 10
console.log(Number("10.33"));       // returns 10.33
console.log(Number("10,33"));       // returns NaN
console.log(Number("10 33"));       // returns NaN 
console.log(Number("John"));        // returns NaN
}
console.log("")

// The Number() Method Used on Dates
// Number() can also convert a date to a number:
{
  console.log(Number(new Date("2017-09-30")));    // returns 1506729600000
}


