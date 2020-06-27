const sliderNav = document.getElementById("slider__nav");
const mainContent = document.getElementById("main");
const nameField = document.getElementById("name");
const imageSource = document.getElementById("image");

const sliderData = [
  {
    personName: " Tanya Sinclair",
    position: "  UX Engineer",
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    imgURL: "./images/image-tanya.jpg",
  },
  {
    personName: " John Tarkpor",
    position: "Junior Front-end Developer",
    testimonial: ` “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    imgURL: "./images/image-john.jpg",
  }
];

let currentIndex = 0;

sliderNav.addEventListener("click", (event) => {
  const name = event.target.name;

  if (name === "right") {
    currentIndex += 1;
    if (currentIndex > sliderData.length - 1) {
      currentIndex = 0;
    }
  }

   if (name === "left") {
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = sliderData.length - 1;
    }
  }
 

  const {personName,position,testimonial,imgURL} = sliderData[currentIndex];
  nameField.innerHTML = `${personName}
              <span id="position">${position}</span>`;
  mainContent.innerText = testimonial;
  imageSource.src = imgURL;
  
});
