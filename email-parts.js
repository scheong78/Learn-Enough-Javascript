// Method chaining the email splitting and lower case.
function emailCase(email) {
  return email.toLowerCase();
}

let emailSplit = (email) => {
  return emailCase(email).split('@');
}


// Simplified version
function emailParts(email) {
  return email.toLowerCase().split('@');
}
