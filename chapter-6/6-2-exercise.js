let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

let dakotaFanning = (array) => {
  // lower case states first in case you care about case matching
  let lowerCase = array.map(element => element.toLowerCase())
  return lowerCase.filter(element =>
    (element.split(/\s+/).length === 2) && (element.includes('dakota')));
}

console.log(dakotaFanning(states));
