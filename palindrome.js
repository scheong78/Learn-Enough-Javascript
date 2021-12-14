// Reverses string
function reverseString(string) {
  return Array.from(string).reverse().join("");
}

// Return true if it is a palindrome. Return false otherwise
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverseString(processedContent);
}
