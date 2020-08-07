const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-nav");
const NAVBAR_CLOSE = "./images/icon-close.svg";
const NAVBAR_OPEN = "./images/icon-hamburger.svg";

hamburger.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("u-hidden")) {
    mobileMenu.classList.remove("u-hidden");
    hamburger.src = NAVBAR_CLOSE;
  } else {
    mobileMenu.classList.add("u-hidden");
    hamburger.src = NAVBAR_OPEN;
  }
});
