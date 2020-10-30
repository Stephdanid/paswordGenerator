// Arrays splitting to make them individual strings
let lowerCase = "abcdefghijklmnopqrstuvxyz".split("");
let upperCase = "ABCDEGHIJKLMNOPQRSTUVXYZ".split("");
let specialChar = "!@#$%^&*()".split("");
let numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Initial question and popping alert for userInput 
function generatePassword() {
    let userInput = prompt("How many characters would you like to use?")
    console.log(userInput)

    if (userInput < 8 || userInput > 128 || isNaN(parseInt(userInput))) {
        alert("This page needs a number from 8 to 128 to continue")
        return
    }
    // just placing other options for now.
    let lCaseOpt = confirm("Would you like to have lower case letters in your password?");
    let uCaseOpt = confirm("Would you like to have upper case letters in your password?");
    let spcCharOpt = confirm("Would you like to have special characters in your password?");
    let numCharOpt = confirm("Would you like to have numbers in your password?");

    let chosenOpt = []
    let generatedPassword = ""

    if (lCaseOpt === true) {
        chosenOpt.push(lowerCase)
    }

    if (uCaseOpt === true) {
        chosenOpt.push(upperCase)
    }
    if (spcCharOpt === true) {
        chosenOpt.push(specialChar)
    }
    if (numCharOpt === true) {
        chosenOpt.push(numberChar)
    }
    let allOptions = chosenOpt.flat()
    Math.floor(Math.random * chosenOpt.length)

    for (let i = 0; i < userInput; i++) {
        const opt = allOptions[i];

    }
    chosenOpt.concat(generatedPassword);

}











// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //     generatePassword()
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);