const hamburger = document.getElementById('hamburger');
const mobileNav=document.getElementById('mobile-nav')
const BURGER__SRC = './images/icon-hamburger.svg';
const CLOSE_SRC = './images/icon-close.svg';

hamburger.addEventListener('click', () => {

    if (mobileNav.classList.contains('u-hide')) {
        mobileNav.classList.remove('u-hide')
        
    }
    else {
        mobileNav.classList.add('u-hide')
        
    }
});