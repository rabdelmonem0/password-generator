// Assignment Code
// Character variables 

var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function generatePassword(){
  var possibleChars = [];
  var guaranteed = [];
  var result = [];

  var passwordOptions = generatePasswordOptions()

  if (passwordOptions.hasNumbers) {
    possibleChars = possibleChars.concat(numbers)
    // console.log(numbers)
    result.push(getRandom(numbers))
  }
  if (passwordOptions.hasSpecialCharacters) {
    possibleChars = possibleChars.concat(specialCharacters)
    result.push(getRandom(specialCharacters))
  }
  if (passwordOptions.hasLowerCase) {
    possibleChars = possibleChars.concat(lowerCase)
    result.push(getRandom(lowerCase))
  }
  if (passwordOptions.hasUpperCase) {
    poissibleChars = possibleChars.concat(upperCase)
    result.push(getRandom(upperCase))
  }
  console.log("result-1:", result)   // 2  + 6 more random elements from guaranteed
}

var passwordLength = passwordOptions.length - guaranteed.length

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = possibleChars[Math.floor(Math.random() * possibleChars.length)];
    result.push(randomChar);
  }
  console.log("result-2: ", result)
  var pass = result.join(""); 
  return pass;


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

  var numChar = confirm("Would you like numbers?");
  var specialChar = confirm("Would you like special characters?");
  var upperCaseChar = confirm("Would you like uppercase letters?");
  var lowerCaseChar = confirm("would you like lowercase letters?");

  // Check if all the prompts false -> then alert that password must contain at least one character type. Then return to go through again
  if (!numbers && !specialCharacters && !upperCase && !lowerCase) {
    alert("Password must contain at least one character type.")
    return;
  }

 
  var passwordOptions = {
    length: passwordLength,
    hasSpecialCharacters: specialChar, 
    hasNumbers: numChar,
    hasUpperCase: upperCaseChar,
    hasLowerCase: lowerCaseChar,  
  }
  console.log(passwordOptions);
  return passwordOptions;

 
}

// Function to get random element from array
function getRandom(array) {
  // console.log(array);
  var randomIndex = Math.floor(Math.random() * array.length);
  // console.log(randomIndex);
  var randomEl = array[randomIndex];
  // console.log(randomEl);
  return randomEl;
}


  
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(result);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
