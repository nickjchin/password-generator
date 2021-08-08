// Pseudocode
// Array of special characters
var specialChar = [
  "!",
  "@",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "<",
  ">",
  "?",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //Array of numerical characters
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split(""); // Array of lower characters (look up .split())
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZ".split(""); // Array of upperCase characters (look up .split())
var passwordValue;

// Create a function that prompts the user for the password options
function getUserOptions() {
  var passLength = parseInt(prompt("How long do you need your password?")); //Create a var to store length of password from the user input (look up parseInt())
  // create a conditional statement to check lenght is actual number  ie 8 eight
  // create a conditional to check if password length is atleast 8 chars
  // create a conditional to check if pw length is lower than 128 chars
  if (passLength > 7 && passLength < 129) {
    console.log(passLength);
  } else {
    alert("Please enter valid number between 8 and 128 characters!");
    getUserOptions();
  }

  // create 4 different conditional statements to store if user pass is going to use special chars, nums, lower, and upper

  // Special Chars
  var isSpecial = prompt("Does your password need special characters?");
  // if (isSpecial.toLowerCase() == "yes" || isSpecial.toLowerCase() == "no") {
  if (isSpecial.toLowerCase() == "yes") {
    isSpecial = true;
    console.log("isSpecial: " + isSpecial);
  } else if (isSpecial.toLowerCase() == "no") {
    isSpecial = false;
    console.log("isSpecial: " + isSpecial);
  } else {
    alert("Please pick yes or no!");
    console.log("isSpecial: " + isSpecial);
    getUserOptions();
  }

  // Num
  var isNum = prompt("Does your password need numerical characters?");
  // if (isNum.toLowerCase() === "yes" || isNum.toLowerCase() === "no") {
  if (isNum.toLowerCase() === "yes") {
    isNum = true;
    console.log("isNum: " + isNum);
  } else if (isNum.toLowerCase() === "no") {
    isNum = false;
    console.log("isNum: " + isNum);
  } else {
    alert("Please pick yes or no!");
    getUserOptions();
  }
  // Lower
  var isLower = prompt("Does your password need lowercase characters?");
  // if (isLower.toLowerCase() === "yes" || isLower.toLowerCase() === "no") {
  if (isLower.toLowerCase() === "yes") {
    isLower = true;
    console.log("isLower: " + isLower);
  } else if (isLower.toLowerCase() === "no") {
    isLower = false;
    console.log("isLower: " + isLower);
  } else {
    alert("Please pick yes or no!");
    getUserOptions();
  }
  //Upper
  var isUpper = prompt("Does your password need uppercase characters?");
  // if (isUpper.toLowerCase() === 'yes' || isUpper.toLowerCase() === 'no') {
  if (isUpper.toLowerCase() === "yes") {
    isUpper = true;
    console.log("isUpper: " + isUpper);
  } else if (isUpper.toLowerCase() === "no") {
    isUpper = false;
    console.log("isUpper: " + isUpper);
  } else {
    alert("Please pick yes or no!");
    getUserOptions();
  }
  // create a conditional statement to check if user included some type of chars (if else?)
  if (
    isSpecial === "no" &&
    isNum === "no" &&
    isLower === "no" &&
    isUpper === "no"
  ) {
    alert("Your password can not contain no characters!");
    getUserOptions();
  }

  // Create a var to store the user input
  var passOptions = {
    // Create object to store user input
    passLength: passLength,
    isSpecial: isSpecial,
    isNum: isNum,
    isLower: isLower,
    isUpper: isUpper,
  };
  console.log(passOptions);
  return passOptions;
}

// function for getting a random element from an array (check out math.random)
function randomizer(char) {
  var randEl = char[Math.floor(Math.random() * char.length)];
  console.log("random element from array " + randEl);
  return randEl;
}

// combine users requirements into single array
// check to make sure users requirements are met, if not run again

// function to generate a password with our user input
function generatePassword() {
  var userOptions = getUserOptions(); // create a variable and call our function so we can use our data from the previous function.
  var results = []; // create a var to store password
  var userPossibleChars = []; // array to store the types of characters to include in our password
  // var guarChar = []; // array to contain atleast one of each chosen type of characters to make sure atleast one of every char is being used (validation)

  // create conditional statements that add the array of characters into an array of possible characters based on our users input
  // need to push new random characters to the guaranteed characters (look up .concat())
  if (userOptions.isSpecial) {
    userPossibleChars = userPossibleChars.concat(specialChar); //take chars and concat
    console.log("specialChar added to userPossibleChars " + userPossibleChars);

    // take chars and push(randomizationfunction(specialChars) (after we randomize)
  } else {
    console.log("No special characters required");
  }

  // create conditional statements that add the array of characters into an array of possible characters based on our users input
  // need to push new random characters to the guaranteed characters (look up .concat())
  if (userOptions.isNum) {
    userPossibleChars = userPossibleChars.concat(numChar);
    console.log("numChar added to userPossibleChars " + userPossibleChars);
  } else {
    console.log("No number characters required");
  }

  // create conditional statements that add the array of characters into an array of possible characters based on our users input
  // need to push new random characters to the guaranteed characters (look up .concat())
  if (userOptions.isLower) {
    userPossibleChars = userPossibleChars.concat(lowerChar);
    console.log("lowerChar added to userPossibleChars " + userPossibleChars);
  } else {
    console.log("No lowercase characters required");
  }
  // create conditional statements that add the array of characters into an array of possible characters based on our users input
  // need to push new random characters to the guaranteed characters (look up .concat())
  if (userOptions.isUpper) {
    userPossibleChars = userPossibleChars.concat(upperChar);
    console.log("upperChar added to userPossibleChars " + userPossibleChars);
  } else {
    console.log("No uppercase characters required");
  }

  // create another for loop to guarantee atleast one character from each possible characters in the result
  if(userOptions.isSpecial){
    results.push(randomizer(specialChar));
  } else if(userOptions.isNum){
    results.push(randomizer(numChar));
  } else if(userOptions.isLower){
    results.push(randomizer(lowerChar));
  }else if(userOptions.isUpper){
    results.push(randomizer(upperChar));
  }

  if(results.length == userOptions.passLength){
     this.passwordValue = results.join('');
  }  else{
    var iterateLength = (parseInt(userOptions.passLength) - results.length); 
    // create a for loop to pluck out random options object and grabing random characters from the array of possible characters and concat them into the results variable
    for(var i = 0 ; i < iterateLength; i++){ 
      results.push(randomizer(userPossibleChars));
    }

    if(results.length == userOptions.passLength){
      console.log(results.join(''));
      this.passwordValue = results.join('');
    } else{
      return 'You made a mistake!';
    }
  } 

document.getElementById("password").value = this.passwordValue;  
}



// Assignment Code
//var generateBtn = document.querySelector('#generate')

// Write password to the #password input
// //function writePassword() {
//   var password = generatePassword()
//   var passwordText = document.querySelector('#password')

//   passwordText.value = password
// }

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword)
