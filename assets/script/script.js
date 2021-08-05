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

//Array of numerical characters
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lower characters (look up .split())
var lowerChar = "abcdefghijklmnopqrstuvwxyz".split("");
// Array of upperCase characters (look up .split())
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVQXYZ".split("");

// Create a function that prompts the user for the password options
function getUserOptions() {
  //Create a var to store length of password from the user input (look up parseInt())
  // var passLength =
  // create a conditional statement to check lenght is actual number  ie 8 eight
  // create a conditional to check if password length is atleast 8 chars
  // create a conditional to check if pw length is lower than 128 chars
  // create 4 different conditional statements to store if user pass is going to use special chars, nums, lower, and upper
  // create a conditional statement to check if user included some type of chars (if else?)
  // Create a var to store the user input
  // Create object to store user input
  // var passOptions = {
  //   passLength: passLenght,
  //   specialChars,
  //   numericalChars,
  //   lowerCase,
  //   upperCase,
  // };
  // return our passOptions
}

// function for getting a random element from an array
// check out math.random

// function to generate a password with our user input
//function generatePassword{
// create a variable and call our function so we can use our data from the previous function.
// var userOptions = getUserOptions();

// create a var to store password
// var results = []

// array to store the types of characters to include in our password
// var userPossibleChars[]

// array to contain atleast one of each chosen type of characters to make sure atleast one of every char is being used (validation)
// var guarChar = []

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push new random characters to the guaranteed characters (look up .concat())

// if(userOptions.specialChars){
//take chars and concat
// take chars and push(randomizationfunction(specialChars) (after we randomize)
//}

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push new random characters to the guaranteed characters (look up .concat())

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push new random characters to the guaranteed characters (look up .concat())

// create a for loop to pluck out random options object and grabing random characters from the array of possible characters and concat them into the results variable

// create another for loop to guarantee atleast one character from each possible characters in teh result

// Take the result Look up join() and turn it into a string

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
