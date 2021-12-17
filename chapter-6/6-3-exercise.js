// Exercise 1 Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.
let factors = [2, 3, 4, 5]
let productArray = (array) => {
    return array.reduce((accumulator, nextElement) => {return accumulator *= nextElement;});
}
console.log(productArray(factors));

// Another way to do Exercise 1
let reducer = (previousValue, currentValue) => previousValue * currentValue

console.log(factors.reduce(reducer));

// Another way to do Exercise 1
console.log(factors.reduce((previousValue, currentValue) => {return previousValue *= currentValue}));



// Exercise 2. Remove the newlines in the reduce solution from Listing 6.9 to turn it into a single long line. Does it still give the right answer? How long is the resulting line of code?
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

console.log(states.reduce((lengths,element) => {lengths[element] = element.length; return lengths;}, {}));

// function functionalLengths(elements) {
//   return elements.reduce((lengths, element) => {
//                           lengths[element] = element.length;
//                           return lengths;
//                         }, {});
// }
