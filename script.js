// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var button1 = document.getElementById("submit");

function checkUserName() {
  var username = document.getElementById("usertext").value;
  console.log(username);
  var special = /^[A-Za-z0-9]{8,15}$/;
  if (!special.test(username)) {
    alert(
      "User Id should not be empty / length be between 8 to 15 / should not contain special characters"
    );
    return false;
  } else {
    return true;
  }
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
  var email = document.getElementById("emailtext").value;
  console.log(email);
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
  var password = document.getElementById("passwordtext").value;
  var regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  console.log(password);

  if (password.match(regEx)) {
    return true;
  } else {
    alert("Invalid Password");
    return false;
  }
}

button1.addEventListener("click", checkUserName);
button1.addEventListener("click", checkEmail);
button1.addEventListener("click", checkPassword);
