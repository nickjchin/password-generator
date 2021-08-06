// Pseudocode
// Array of special characters
var specialChar = [
  '!',
  '@',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '<',
  '>',
  '?',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
]

//Array of numerical characters
var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// Array of lower characters (look up .split())
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'.split('')
// Array of upperCase characters (look up .split())
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ'.split('')

// Create a function that prompts the user for the password options
function getUserOptions() {
  //Create a var to store length of password from the user input (look up parseInt())
  var passLength = parseInt(prompt('How long do you need your password?'))
  // create a conditional statement to check lenght is actual number  ie 8 eight
  // create a conditional to check if password length is atleast 8 chars
  // create a conditional to check if pw length is lower than 128 chars
  if (passLength > 0 && passLength < 129) {
    console.log(passLength);
  } else {
    alert('Please enter valid number between 8 and 128 characters!');
    getUserOptions();
  }

  // create 4 different conditional statements to store if user pass is going to use special chars, nums, lower, and upper

  // Special Chars
  var isSpecial = prompt('Does your password need special characters?')
  if (isSpecial.toLowerCase() == 'yes' || isSpecial.toLowerCase() == 'no') {
    console.log('isSpecial: ' + isSpecial);
  } else {
    alert('Please pick yes or no!');
    console.log('isSpecial: ' + isSpecial);
    getUserOptions();
  }

  // Num
  var isNum = prompt('Does your password need numerical characters?')
  if (isNum.toLowerCase() === 'yes' || isNum.toLowerCase() === 'no') {
    console.log('isNum: ' + isNum);
  } else {
    alert('Please pick yes or no!');
    getUserOptions();
  }
  // Lower
  var isLower = prompt('Does your password need lowercase characters?')
  if (isLower.toLowerCase() === 'yes' || isLower.toLowerCase() === 'no') {
    console.log('isLower: ' + isLower);
  } else {
    alert('Please pick yes or no!');
    getUserOptions();
  }
  //Upper
  var isUpper = prompt('Does your password need uppercase characters?')
  if (isUpper.toLowerCase() === 'yes' || isUpper.toLowerCase() === 'no') {
    console.log('isUpper: ' + isUpper);
  } else {
    alert('Please pick yes or no!');
    getUserOptions();
  }
  // create a conditional statement to check if user included some type of chars (if else?)
  if (
    isSpecial === 'no' &&
    isNum === 'no' &&
    isLower === 'no' &&
    isUpper === 'no'
  ) {
    alert('Your password can not contain no characters!');
    getUserOptions();
  }
  // Create a var to store the user input
  // Create object to store user input
  var passOptions = {
    passLength: passLength,
    isSpecial: isSpecial,
    isNum: isNum,
    isLower: isLower,
    isUpper: isUpper,
  }
  console.log(passOptions);
  return passOptions;
}

// function for getting a random element from an array
// check out math.random
function randomizer(x) {
  var randEl = x[Math.floor(Math.random() * x.length)];
  console.log('random element from array ' + randEl);
  return randEl;
}

// function to generate a password with our user input
function generatePassword(){
// create a variable and call our function so we can use our data from the previous function.
  var userOptions = getUserOptions();

// create a var to store password
  var results = [];

// array to store the types of characters to include in our password
  var userPossibleChars = [];

// array to contain atleast one of each chosen type of characters to make sure atleast one of every char is being used (validation)
  var guarChar = [];

// create conditional statements that add the array of characters into an array of possible characters based on our users input
// need to push new random characters to the guaranteed characters (look up .concat())
if(userOptions.specialChars){
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
}

// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
