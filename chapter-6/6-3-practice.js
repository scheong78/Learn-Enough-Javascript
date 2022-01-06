let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}

console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// 6.3.2 Reduce, example 2: make a plain object (associative array) with keys equal to the state names and values equal to their lengths
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

let imperativeStateLength = (array) => {
  let lengths = {};
  array.forEach(
    element => (lengths[element] = element.length)
  );
  return lengths;
}

console.log(imperativeStateLength(states));

// Same goal as above but using the reduce function
let functionalStateLength = (array) => {
  return array.reduce((lengths, element) => {
      lengths[element] = element.length;
      return lengths;
    }, {})
}

console.log(functionalStateLength(states));
