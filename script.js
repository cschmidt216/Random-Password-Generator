// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var length = prompt("How many characters would you like your password to be?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialChars = confirm("Would you like to include special characters?");

  var charset = "";
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSpecialChars) {
    charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
