// This is a functioning example, not the best implementation but it works

// get the button element on the page
var btn = document.querySelector("#btn");
// add event listener, meaning we are 'listening' for the user to click the button
// there are other 'events' we can listen to, like 'mouseover', which
// gets fired when the mouse hovers the element
btn.addEventListener("click", initializePrompt);

// function that is called when the event (i.e. button click) happens
function initializePrompt() {
  // collect all the values from the prompts and save as variables

  // parseInt basically means take this string containing an integer and convert it to an actual integer
  var minLength = parseInt(prompt("Minimum length for password?"));
  // parseInt basically means take this string containing an integer and convert it to an actual integer
  var maxLength = parseInt(prompt("Maximum length for password?"));
  var includeLowercase = confirm("Include lowercase?");
  var includeUppercase = confirm("Include uppercase?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // control flow to make sure that user confirms at least one character type
  // the && operator basically means 'and', so this means
  // if variable1 === false 'and' varable2 == false 'and' so on... execute the following code
  if (
    includeLowercase === false &&
    includeUppercase === false &&
    includeNumbers === false &&
    includeSpecial === false
  ) {
    // alert opens a dialog box like prompt but just displays text
    alert("Must include at least one character type ya dufus!");
    // we recall the enclosing function to start over again
    initializePrompt();
  }

  // generate the length of the password which is between minLength and maxLength
  var passwordLength = generatePasswordLength(minLength, maxLength);
  console.log(passwordLength);
  // initalize empty string so that we can append to it below
  var password = "";

  // for loop which loops passwordLength times
  for (var i = 0; i < passwordLength; i++) {
    // all if statements here will run regardless of whether each of the variables
    // are true or false. They are independant statements. You would use 'else' or 'else if' to create dependancy

    // on each loop, we check if includeLowercase is true
    // if so, we add a random lowercase letter to the password string above
    if (includeLowercase === true) {
      password += randomLowercase();
    }

    // we do the same thing for the other three variables
    if (includeUppercase === true) {
      password += randomUppercase();
    }

    if (includeNumbers === true) {
      password += randomNumber();
    }

    if (includeSpecial === true) {
      password += randomSpecial();
    }
  }

  // using the above control flow logic can lead to a password that is up to 4x in length
  // for each loop we can add up to 4 characters (in the case that the user wants to include all character types)
  // so here we take a slice of the password string that is exactly the passwordLength
  var enforcedLengthPassword = password.slice(0, passwordLength);

  // grab the display element and assign the password to textContent, thus displaying the password
  document.querySelector("#display").textContent = enforcedLengthPassword;
}

function generatePasswordLength(minLength, maxLength) {
  // Math.random() produces a random number between 0 and 1
  // Math.floor() rounds a decimal down to the nearest integer
  // the multiplication is intended to produce a random number in a given range
  return Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
}

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1) + 97));
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
}

function randomNumber() {
  return Math.floor(Math.random() * 10).toString();
}

function randomSpecial() {
  var specialCharacters = "!@#$%^&*+_-=~`|";

  // here we are 'indexing' a string, basically give me the character
  // at this random index in this string, denoted by []
  // specialCharacters[0] would return '!',  and specialCharacters[4] returns '%', for example
  return specialCharacters[
    Math.floor(Math.random() * specialCharacters.length)
  ];
}

// AS you can tell, this isn't actually a simple project
// I know how F'n difficult this would have been for me starting out
// and even now I had to debug and google things to make it work!
// Just keep at it!
