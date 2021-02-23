// Assignment Code
// Character variables 
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numChar;
var specialChar;
var upperCaseChar;
var lowerCaseChar;

function generatePassword(){
  var passwordOptions = generatePasswordOptions();  
  // empty array to push final password characters into
  var result = [];

  // variable to store ALL the possible characters - starts as empty array
  var possibelChars = [];
  // variable to store an array that has one of each type chosen to - initialized as empty array
  // check the passwordOptions to see what characters the user wants
    // if user wants uppercase, possibleCharacters = possibleCharacters.concat(uppercase)
      // then push getRandom(uppercase) into the guaranteed options


  // loop through passwordOptions

    // for each iteration, possibleCharacter = getRandom(possible)
    // push the random possible character into the result array

    // Array.prototype.push()

  // loop through the guaranteed characters and replace the result[i] with the guaranteed character[i]
  // for (var i=0; i<guarChars.length; i++) {
  //   // replacing character at index i in result with character at index i in guaranteed
  //   result[i] = guarChars[i]
  // }

  // return result (turn the array into a string)
}

function generatePasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like the password to be?"));

  // Check if passwor length is not a number, if so return to beginning
  if (isNaN(passwordLength)) {
    alert("Password length must be a number");
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  var numbers = confirm("Would you like numbers?");
  var specialCharacters = confirm("Would you like special characters?");
  var upperCase = confirm("Would you like uppercase letters?");
  var lowerCase = confirm("would you like lowercase letters?");

  // Check if all the prompts false -> then alert that password must contain at least one character type. Then return to go through again
  if (!numbers && !specialCharacters && !upperCase && !lowerCase) {
    alert("Password must contain at least one character type.")
    return;
  }

  // if (numChar) {
  //   passwordOptions = numbers
  // }
  // if (specialChar) {
  //   passwordOptions = specialCharacters
  // }
  // if (upperCaseChar) {
  //   passwordOptions = upperCase
  // }
  // if (lowerCaseChar) {
  //   passwordOptions = lowerCase
  // }

  if (passwordOptions.hasNumbers) {
    possibelChars.concat(numbers)
    result.push(numbers[randomNumber])
  }
  if (passwordOptions.hasSpecialCharacters) {
    possibelChars.concat(specialCharacters)
    result.push(specialCharacters[randomNumber])
  }
  if (passwordOptions.hasLowerCase) {
    possibelChars.concat(numbers)
    result.push(lowerCase[randomNumber])
  }
  if (passwordOptions.hasUpperCase) {
    possibelChars.concat(specialCharacters)
    result.push(upperCase[randomNumber])
  }
  // store passwordOptions in a variable
  var passwordOptions = {
    hasSpecialCharacters: specialCharacters, 
    hasNumbers: numbers,
    hasUpperCase: upperCase,
    hasLowerCase: lowerCase,
    length: passwordLength,
  }

  console.log(passwordOptions);
  // return passwordOptions so it's usable outside this function scope
}

// Function to get random element from array
function getRandom(passwordOptions) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  var randomEl = passwordOptions[randomIndex];

  return randomEl;
// }
// for (var i = 0; i < passwordLength; i++) {
//   var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
//   randomResult.push(randomChar);
// }


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);