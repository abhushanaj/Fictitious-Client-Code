const newsletter = document.getElementById("newsletter");

const submitButton = document.getElementById("btn-submit");

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
};

submitButton.addEventListener("click", (event) => {
  const emailID = newsletter.value;

  if (emailID === "" || !validateEmail(emailID)) {
    newsletter.classList.add("input__value--error");
    const parentNode = newsletter.parentNode;
    parentNode.querySelector(".input__error").style.opacity = 1;
    parentNode.querySelector(".btn-primary").classList.add("btn--translate");
  } else {
    emailID.value = "";
    newsletter.classList.remove("input__value--error");
    const parentNode = newsletter.parentNode;
    parentNode.querySelector(".input__error").style.opacity = 0;
    parentNode.querySelector(".btn-primary").classList.remove("btn--translate");
  }
});
