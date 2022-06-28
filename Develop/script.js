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
// pcik a number equal to or greater than 128 

  var passwordLength = parseInt(prompt("Enter desired password length"))
  console.log(passwordLength)
  
    if (passwordLength > 128) {
    return("Please enter a length between 8-128 characters")
  }

  if (passwordLength < 8) {
    return("Please enter a length between 8-128 characters")
  }


  // Code adding lowercase letters as an option   
  var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  // Confirmation that lower case should be included 
  var lLetterConfirm = confirm("Do you wish to have your password contain lower case letters?")


  // code adding uppdercase letters as an options 
  var upperLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]

  // Confirmation that upper case should be included
  var uLetterConfirm = confirm("Do you wish to have your password contain lower case letters?")

  // code adding special characters as an option
  var specialChar = ['!','@','#','$','%','^','&','*','(',')']
  
  // Confirmation that special characters should be included

  var sLetterConfirm = confirm("Do you wish to have special characters included?")

  console.log(sLetterConfirm)
  console.log(uLetterConfirm)
  console.log(lLetterConfirm)

  var lowTupTspT = lowerLetters.concat(uLetterConfirm && sLetterConfirm)


  

  
  
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
