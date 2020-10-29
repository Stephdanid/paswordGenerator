// Arrays splitting to make them individual strings
let lowerCase = "abcdefghijklmnopqrstuvxyz".split("");
let upperCase = "ABCDEGHIJKLMNOPQRSTUVXYZ".split("");
let specialChar = "!@#$%^&*()".split("");
let numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Initial question and popping alert for userInput WHY DONT WORK
function passwordQuest() {
  let userInput = prompt("How many characters would you like to use?")
  if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
    alert("This page needs a number to continue")
    return
  }
  // just placing other options for now.
let lCaseOpt = confirm("Would you like to have lower case letters in your password?");
let uCaseOpt = confirm("Would you like to have upper case letters in your password?");
let spcCharOpt = confirm("Would you like to have special characters in your password?");
let numCharOpt = confirm("Would you like to have numbers in your password?")
}


// 





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
