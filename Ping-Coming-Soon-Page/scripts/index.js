const newsletter = document.getElementById("newsletter");
const submitButton = document.getElementById("btn-submit");

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

submitButton.addEventListener("click", () => {
  const emailId = newsletter.value;
  const errorMessage = document.getElementById("error-message");
  if (emailId === "") {
    errorMessage.style.opacity = 1;
    newsletter.classList.add("input__value--error");
  } else if (!validateEmail(emailId)) {
    newsletter.classList.add("input__value--error");
    errorMessage.innerText = "Please provide a valid email address";
    errorMessage.style.opacity = 1;
  } else {
    newsletter.classList.remove("input__value--error");
    errorMessage.style.opacity = 0;
    newsletter.value = "";
    alert("Form Submitted");
  }
});
