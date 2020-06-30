const hamburger = document.getElementById('hamburger');
const smallNavigation = document.getElementById('navbar__small');
const CLOSE_BURGER = './images/icon-close.svg';
const OPEN_BURGER = './images/icon-hamburger.svg';

hamburger.addEventListener('click', () => {
    const isHidden = smallNavigation.classList.contains('hide');
    if (isHidden) {
        smallNavigation.classList.remove('hide');
        hamburger.src = CLOSE_BURGER;
    }
    else {
        smallNavigation.classList.add('hide');
        hamburger.src = OPEN_BURGER;
    }
})