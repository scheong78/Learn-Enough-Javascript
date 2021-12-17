let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Imperative Programming
// function imperativeOneWordStates(states) {
//   let oneword = [];
//   states.forEach(function(state) {
//     if (state.split(/\s+/).length === 1) {
//       oneword.push(state);
//     }
//   });
//   return oneword;
// }
// console.log(imperativeOneWordStates(states));

// Using filter method
let oneWordStates = (states) => {
  return states.filter(state => state.split(/\s+/).length === 1);
}

console.log(oneWordStates(states));
