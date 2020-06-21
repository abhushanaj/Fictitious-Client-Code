const form = document.getElementById("form");

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

const displayErrorMessageOn = (attribute, message) => {
  const element = form[attribute];
  const parentNode = element.parentNode;
  element.classList.add("input__value--error");
  const errorMessage = (parentNode.querySelector(
    ".toast__error"
  ).innerText = message);
  const errorIcon = (parentNode.querySelector(
    ".input__error-icon"
  ).style.opacity = 1);
};

const removeErrorMessageOn = (attribute) => {
  const element = form[attribute];
  const parentNode = element.parentNode;
  if (element.classList.contains("input__value--error")) {
    element.classList.remove("input__value--error");
  }

  const errorMessage = (parentNode.querySelector(".toast__error").innerText =
    "");
  const errorIcon = (parentNode.querySelector(
    ".input__error-icon"
  ).style.opacity = 0);
};


const resetForm = () => {
    form["firstName"].value="";
     form["lastName"].value="";
   form["emailID"].value="";
    form["password"].value="";
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const emailID = form["emailID"].value;
  const password = form["password"].value;

  // validate for firstName
  if (firstName == "") {
    displayErrorMessageOn("firstName", "FirstName cannot be empty");
  } else {
    removeErrorMessageOn("firstName");
  }

  // validate for lastName
  if (lastName == "") {
    displayErrorMessageOn("lastName", "LastName cannot be empty");
  } else {
    removeErrorMessageOn("lastName");
    }
    
    // validate for email
    if (emailID == "" || !validateEmail(emailID)) {
        displayErrorMessageOn("emailID", "Looks like this is not an email");
    } else {
        removeErrorMessageOn("emailID");
    }

    // validate for passowrd
    if (password == "" ) {
        displayErrorMessageOn("password", "Password cannot be empty");
    } else {
        removeErrorMessageOn("password");
    }

    // all validations are completed
    resetForm();
});
