// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
 
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Ask for password length between 8 and 128
  var passwordLength = window.prompt("How many characters (8-128) would you like your password to be?")
  // Code adding lowercase letters as an option 
  var lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  // coce adding uppdercase letters as an options 
  var upperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]
  


  // Section that is supposed to take window input length, apply it to upper letters just to test if letters from the array will display and it's linked. 
  return( upperLetters*passwordLength)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Ask for password length between 8 and 128

// ask for include upper case
// ask for lower case
// ask for ask for numbers
// ask for special characters 
// must include one for each time it says yes 

// once prompts are answered then text is displayed 
