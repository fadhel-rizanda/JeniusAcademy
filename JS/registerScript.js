// navbar
const navbarContent = document.querySelector(".navbar_content");
const hamburger = document.getElementById("hamburger_icon");

hamburger.addEventListener("click", function (element) {
  navbarContent.classList.toggle("active");
  element.preventDefault();
});
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarContent.contains(e.target)) {
    navbarContent.classList.remove("active");
  }
});

// password visibility
const password = document.getElementById("password");
const passwordVisibility = document.getElementById("password_visibility");
passwordVisibility.addEventListener("click", function (element) {
  passwordVisibility.classList.toggle("active");
  passwordVisibilitySwitch(password);
});

const confirmPassword = document.getElementById("confimation_password");
const confirmPasswordVisibility = document.getElementById(
  "confirm_password_visibility"
);
confirmPasswordVisibility.addEventListener("click", function (element) {
  confirmPasswordVisibility.classList.toggle("active");
  passwordVisibilitySwitch(confirmPassword);
});

// activate type password
function passwordVisibilitySwitch(element) {
  if (element.type === "password") {
    element.type = "text";
  } else {
    element.type = "password";
  }
}

// registration validation
function validateInput() {
  var firstname = document.getElementById("firstname").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmationPassword = document.getElementById(
    "confimation_password"
  ).value;

  var firstnameError = document.getElementById("firstname_error");
  var surnameError = document.getElementById("surname_error");
  var emailError = document.getElementById("email_error");
  var phoneError = document.getElementById("phone_error");
  var passwordError = document.getElementById("password_error");
  var confirmationPasswordError = document.getElementById(
    "confirmation_password_error"
  );
  var alertMessage = ' <div class="alert"></div> ';
  var errorFound = false;
  var explore = document.querySelector(".explore_button");

  if (!firstname) {
    firstnameError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (checkSpace(firstname)) {
    firstnameError.innerHTML = alertMessage + "Must not contain space";
    errorFound = true;
  } else {
    firstnameError.innerHTML = null;
  }

  if (!surname) {
    surnameError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (checkSpace(surname)) {
    surnameError.innerHTML = alertMessage + "Must not contain space";
    errorFound = true;
  } else {
    surnameError.innerHTML = null;
  }

  if (!email) {
    emailError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (!email.endsWith("@gmail.com")) {
    emailError.innerHTML = alertMessage + "Must end with @gmail.com";
    errorFound = true;
  } else {
    emailError.innerHTML = null;
  }

  if (!phone) {
    phoneError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (phone.toString().length < 8 || phone.toString().length > 15) {
    phoneError.innerHTML = alertMessage + "Must contain 8 - 15 numbers";
    errorFound = true;
  } else {
    phoneError.innerHTML = null;
  }

  if (!password) {
    passwordError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (checkPassword(password) != true) {
    passwordError.innerHTML =
      alertMessage + "Must contain " + checkPassword(password);
    errorFound = true;
  } else {
    passwordError.innerHTML = null;
  }

  if (!confirmationPassword) {
    confirmationPasswordError.innerHTML = alertMessage + "Cannot be empty";
    errorFound = true;
  } else if (confirmationPassword != password) {
    confirmationPasswordError.innerHTML =
      alertMessage + "Must same with password";
    errorFound = true;
  } else {
    confirmationPasswordError.innerHTML = null;
  }

  if (!errorFound) {
    explore.innerHTML = "Start Exploring";
    explore.classList.add("active");
  }
}

// pass registration
function passRegister(id) {
  alert("you are registersed with " + id + " account");
  var explore = document.querySelector(".explore_button");

  explore.innerHTML = "Start Exploring";
  explore.classList.add("active");
}

// explore
function startExplore() {
  window.location.href = "../HTML/home.html";
}

function checkPassword(password) {
  var isSym = false;
  var isNum = false;
  var isAlp = false;
  var isLow = false;
  var isUp = false;
  var isSpace = false;
  var isLen = false;
  var textErrorMessages = [];

  for (let i = 0; i < password.length; i++) {
    if (containSymbol(password[i])) {
      isSym = true;
    }

    if (!isNaN(password[i])) {
      isNum = true;
    }

    if (password[i].toUpperCase() !== password[i].toLowerCase()) {
      isAlp = true;
      console.log(password[i]);
      if (password[i] == password[i].toUpperCase()) {
        isUp = true;
        console.log(password[i]);
      }
      if (password[i] == password[i].toLowerCase()) {
        isLow = true;
        console.log(password[i]);
      }
    }

    if (password[i] == " ") {
      isSpace = true;
    }
  }
  if (password.length >= 10) {
    isLen = true;
  }

  if (!isSym) textErrorMessages.push("Symbol");
  else if (!isNum) textErrorMessages.push("Number");
  else if (!isAlp) textErrorMessages.push("Alphabet");
  else if (!isUp) textErrorMessages.push("Upper case");
  else if (!isLow) textErrorMessages.push("Lower case");
  else if (isSpace) textErrorMessages.push("no Space");
  else if (!isLen) textErrorMessages.push("minimum 10 character");

  if (textErrorMessages.length > 0) return textErrorMessages.join("\n - ");

  return true;
}

function containSymbol(character) {
  var symbol = "[!@#$%^&*()_+-=[]{};':\"\\|,.<>/?]";
  for (let i = 0; i < character.length; i++) {
    if (symbol.indexOf(character[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function checkSpace(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      return true;
    }
  }
  return false;
}

var loginButton = document.querySelector(".login_button");
loginButton.addEventListener("click", function () {
  alert("You will be directed to login page!");
});
