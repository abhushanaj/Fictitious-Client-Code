const shareButton = document.getElementById("shareButton");
const sharingMenu = document.getElementById("sharingMenu");
shareButton.addEventListener('click', () => {
    if (sharingMenu.classList.contains("hide")) {
        sharingMenu.classList.remove('hide');
    }
    else {
        sharingMenu.classList.add('hide');
    }
});