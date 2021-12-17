let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Phase alpha - Using Method Chaining
// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join('-');
// }
//
// function functionalUrls(elements) {
//   return elements.map(element => urlify(element)
// )}
//
// function fullAddress(elements) {
//   return elements.map(element => "https://example.com/" + element)
// }
//
// console.log(fullAddress(functionalUrls(states)));


// === How compact can we make this with fat arrow? ===

// Used in Phase 0
// function urlify(string){
// 	return string.toLowerCase().split(/\s+/).join('-');
// }
// function fullUrls(states){
// 	let urlified = states.map(state => urlify(state));
// 	return urlified.map(state => 'https://example.com/' + state);
// }

// // Phase 1 reduction
// function fullUrls(states){
//   let urlified = states.map(state => state.toLowerCase().split(/\s+/).join('-'));
//   return urlified.map(state => 'https://example.com/' + state);
// }

// Phase 2 reduction
// function fullUrls(states){
// 	return states.map(state => 'https://example.com/' + state.toLowerCase().split(/\s+/).join('-'));
//}

// Phase 3 reduction
let fullUrls = (states) => {
  return states.map(state => 'https://example.com/' + state.toLowerCase().split(/\s+/).join('-'));
}
console.log(fullUrls(states));

// console.log();
