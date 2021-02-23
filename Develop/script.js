// Assignment Code
// Character variables 

var possibelChars = [];
var result = [];

var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// var numChar;
// var specialChar;
// var upperCaseChar;
// var lowerCaseChar;

function generatePassword(){
  var passwordOptions = generatePasswordOptions();  
  // empty array to push final password characters into
  

  // variable to store ALL the possible characters - starts as empty array

    
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

var passwordLength = parseInt(prompt("How many characters would you like the password to be?"));

function generatePasswordOptions() {
  

  // Check if passwor length is not a number, if so return to beginning
  if (isNaN(passwordLength)) {
    alert("Password length must be a number");
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  var numChar = confirm("Would you like numbers?");
  var specialChar = confirm("Would you like special characters?");
  var upperCaseChar = confirm("Would you like uppercase letters?");
  var lowerCaseChar = confirm("would you like lowercase letters?");

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
  var passwordOptions = {
    hasSpecialCharacters: specialChar, 
    hasNumbers: numChar,
    hasUpperCase: upperCaseChar,
    hasLowerCase: lowerCaseChar,
    length: passwordLength,
  }
  console.log(passwordOptions);
  
  if (passwordOptions.hasNumbers) {
    possibelChars.concat(numbers)
    console.log(numbers)
    result.push(getRandom(numbers))
  }
  if (passwordOptions.hasSpecialCharacters) {
    possibelChars.concat(specialCharacters)
    result.push(getRandom(specialCharacters))
  }
  if (passwordOptions.hasLowerCase) {
    possibelChars.concat(numbers)
    result.push(getRandom(lowerCase))
  }
  if (passwordOptions.hasUpperCase) {
    possibelChars.concat(specialCharacters)
    result.push(getRandom(upperCase))
  }
  // store passwordOptions in a variable
 

  
  // return passwordOptions so it's usable outside this function scope
}

// Function to get random element from array
function getRandom(array) {
  console.log(array);
  var randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  var randomEl = array[randomIndex];
  console.log(randomEl);
  return randomEl;
}
for (var i = 0; i < passwordLength; i++) {
  var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  result.push(randomChar);
}

var pass = randomPassword.join(""); 

var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePasswordOptions();
  console.log(result);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
