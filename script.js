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

  window.alert ("Your password will be "+passwordLength+" characters long.");

  passwordLength = parseInt(passwordLength);


  do {
    upper = window.confirm("Would you like upper case characters to be included?");
    if (upper) {
      window.alert("You have selected upper case characters to be included.");
    }
    else {
      window.alert("You have NOT selected upper case characters to be included.");
    }

    lower = window.confirm("Would you like lower case characters to be included?");
    if (lower) {
      window.alert("You have seleceted lower case characters to be included.");
    }
    else {
      window.alert("You have NOT selected lower case characters to be included");
    }

    numeric = window.confirm("Would you like numeric characters to be included?");
    if (numeric) {
      window.alert("You have selected to include numeric characters.");
    }
    else {
      window.alert("You have NOT selected to include numeric characters.");
    }

    special = window.confirm("Would you like special characters to be included?")
    if (special) {
      window.alert("You have selected to include special character.")
    }
    else {
      window.alert("You have NOT selected to include special characters.")
    }

  } while ((upper == false) && (lower == false) && (numeric == false) && (special == false));


  //Password Generation
  var actualCharOptions = "";
  var inputList = [upper, lower, numeric, special];
  var possibleCharOptions = ["ABCDEFGHIJKLMNOPQRSTUVYXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "~`!@#$%^&*()_-+={}[]|:;/\"\'\\<>,.?"];
  var result = "";

  for (let i=0; i<4; i++) {
    if (inputList[i]) {
      actualCharOptions = actualCharOptions + possibleCharOptions[i];
    }
  }

  for (let i=0; i<(passwordLength-1); i++) {
    result += actualCharOptions.charAt(Math.floor(Math.random() * actualCharOptions.length));
  }
  
return result;    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
