// Exercise 1. Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression (Section 4.3.2). You will need the regex syntax for the start and end of a string (Figure 7.6).

String.prototype.blank = function() {
  return !!this.match(/^\s*$/g);
}

let array = ['', ' ', '\t', '\n', 'notblank']

array.forEach(function(element) {
    console.log(`${element} returns ${element.blank()}`);
}
);

// Exercise 2. Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array. Hint: Refer to Section 3.3.

Array.prototype.last = function() {
  return this.slice(-1);
}

console.log(array.last());
