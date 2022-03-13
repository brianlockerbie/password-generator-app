// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordLength = "";
var lower = false;
var upper = false;
var special = false;
var numeric = false;

var generatePassword = function (){

  window.alert("Please select one or more of the following character traits (Uppercase, Lowercase, Numeric & || Special) to complete a generated password.")

  var passwordLength = window.prompt("Please enter a password containing 8 to 128 characters");
  while ((Number.isInteger(parseInt(passwordLength))=== false) || (passwordLength < 8) || (passwordLength > 128)) {
    passwordLength = window.prompt("Password length you have enered is invalid. Please select a number between 8 and 128");
    if ((Number.isInteger(parseInt(passwordLength)) === true) && (parseInt(passwordLength) > 7) && (parseInt(passwordLength) < 129)){
      break;
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
