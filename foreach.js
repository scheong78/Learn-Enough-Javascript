// Iterating through an array with a forEach loop.
let a = ["ant", "bat", "cat", 42];
// a.forEach(function(element) {
//   console.log(element);
// });

// Iterating through an array with a forEach loop. FAT ARROW notation with increasing sophistication.
// let logElement = (a) => {
//     a.forEach(function(element) {
//       console.log(element);
//     })
// }
//
// logElement(a);

a.forEach(element => console.log(element));

// Listing 2.18: Combining charAt and a for loop.
// let soliloquy = "To be, or not to be, that is the question:";
// Array.from(soliloquy).forEach(function(element) {
//   console.log(element);
// });
