// All possible password output

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "#", "$", "%", "&", "*", "+", "?", "@", "_"];

// Generate password

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var useUpper = confirm("Do you want to use uppercase letters?");
  var useLower = confirm("Do you want to use lowercase letters?");
  var useNumbers = confirm("Do you want to use numbers?");
  var useSpecial = confirm("Do you want to use special characters?");
  var password = "";
  var allPos = [];
  if (useUpper) {
    allPos = allPos.concat(uppercase);
  }
  if (useLower) {
    allPos = allPos.concat(lowercase);
  }
  if (useNumbers) {
    allPos = allPos.concat(numbers);
  }
  if (useSpecial) {
    allPos = allPos.concat(specialChar);
  }
  if (
    useUpper === false &&
    useLower === false &&
    useSpecial === false &&
    useNumbers === false
  ) {
    alert("Please choose at least one option");
    return generatePassword();
  }
  var characters = passLength();
  for (let i = 0; i < characters; i++) {
    password = password + allPos[Math.floor(Math.random() * allPos.length)];
  }
  return password;
}

// Test character length meets requirements

function passLength() {
  var characters = prompt(
    "Password length: Please choose a number between 8 and 128"
  );
  if (isNaN(characters)) {
    alert("Please choose a number between 8 and 128");
    return passLength();
  }
  if (characters < 8 || characters > 128) {
    alert("Please choose a number between 8 and 128");
    return passLength();
  }
  return characters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
