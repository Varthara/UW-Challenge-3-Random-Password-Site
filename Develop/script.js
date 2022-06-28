// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password generations
var length;
var chars = "";


// Write password to the #password input
function writePassword() {
  getParameters();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for loop used to create password
function generatePassword () {
  var password = "";
  for ( var i = 0; i < length; i++ ) {
    password += chars.charAt(Math.floor(Math.random() * 
    chars.length));
  }
  return password;
}


function getParameters() {
  chars = "";
  // Code for determining password length. Requirement that code be over 8 chars
  length = prompt("How long do you wish your password to be. Please input a value betweem 8 - 128");
  if (length < 8) {
    alert("Desired password length too short. Please choose a value between 8-128");
    return getParameters();
    // Code to ensure password is not greater than 128 chars
  } else if (length > 128) {
    alert("Desired password length too long. Please choose a value between 8-128");
    return null;
  } 
  // Code to include lower case
  if (confirm("Do you wish to have your password include lower case letters?")) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  // Code it include upper case
  if (confirm("Do you wish to have your password include upper case letters?")) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // Code to include passwords
  if (confirm("Do you wish to have your password include numbers?")) {
    chars += "1234567890";
  }
  // Code to include special chars
  if (confirm("Do you wish to have your password include special characters?")) {
    chars += "!@#$%^&*()_+";
  }
  // Code to ensure password has contents 
  if (chars.length == 0) {
    alert("Your password must be composed of atleast 8 characters");
    getParameters();
  }
}