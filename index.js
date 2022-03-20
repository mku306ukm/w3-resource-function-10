//10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function matrix(n) {
  return Array(n)
    .fill(Array(n).fill()) //The fill() method overwrites the original array.
    .map(function (value, i) {
      return value.map(function (x, j) {
        return i === j ? 1 : 0;
      });
    });
}
console.log(matrix(2));

/* note:
//===arr.map method===
It calls the function for each element of the array and returns the array of results.
The syntax is:
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

//===ternary operator===
let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
*/
