export { createSlideGallery, changeSlide, getCurrentSlideNum };

//To create the slide gallery, pass the container, which you want the images attached to, and image array containing the chosen images. This function also returns an array with the created image elements
const createSlideGallery = (container, imgArr) => {
  console.log(imgArr);
  //const divImgCnt = document.querySelector(".div-img");
  console.log(container);

  let slideGallery = [];

  for (let i = 1; i < imgArr.length; i++) {
    console.log(imgArr[i]);
    const image = document.createElement("img");
    image.setAttribute("src", `${imgArr[i]}`);
    image.className = "hide";
    image.setAttribute("data-imgNum", `${i}`);
    console.log(image);
    slideGallery.push(image);
    container.appendChild(image);
  }

  //slideGallery[0].className = "shown-img";
  return slideGallery;
};

function toggleHide(element) {
  console.log(
    "Hey toggleHide has been called with the following argument: " + element
  );
  element.classList.toggle("hide");
}

function toggleFadeIn(element) {
  element.classList.toggle("fade-in");
}

function toggleFadeOut(element) {
  element.classList.toggle("fade-out");
}

function toggleInvisible(element) {
  element.classList.toggle("invisible");
}

const hideShownImageInSlider = (imgElementsArr) => {
  for (let i = 0; i < imgElementsArr.length; i++) {
    if (imgElementsArr[i].classList.contains("shown-img")) {
      imgElementsArr[i].classList.toggle("shown-img");
      imgElementsArr[i].classList.toggle("fade-out");
      //Remove the image from the display
      setTimeout(toggleHide, 800, imgElementsArr[i]);
      //Remove the fade-out class
      setTimeout(toggleFadeOut, 800, imgElementsArr[i]);
      //imgElementsArr[i].classList.toggle("invisible");
    }
  }
};

const showNextSlideImage = (currentSlideNum, imgElementsArr, direction) => {
  let directionNum = 0;
  console.log(currentSlideNum);
  if (direction == "left") {
    directionNum = -1;
  } else {
    directionNum = 1;
  }
  console.log("Changing slide to show the next image");
  imgElementsArr[parseInt(currentSlideNum) + directionNum].classList.toggle(
    "shown-img"
  );

  //Make sure the image is invisble when we "display" it, so it can fade in later
  imgElementsArr[parseInt(currentSlideNum) + directionNum].classList.toggle(
    "invisible"
  );
  //Now display the image after 0.8 seconds
  setTimeout(
    toggleHide,
    800,
    imgElementsArr[parseInt(currentSlideNum) + directionNum]
  );
  //Make sure it fades in and times it with when its fully visibile
  setTimeout(
    toggleFadeIn,
    900,
    imgElementsArr[parseInt(currentSlideNum) + directionNum]
  );
  //Remove the invisible css class
  setTimeout(
    toggleInvisible,
    900,
    imgElementsArr[parseInt(currentSlideNum) + directionNum]
  );
  //Remove the fade in css class
  setTimeout(
    toggleFadeIn,
    1800,
    imgElementsArr[parseInt(currentSlideNum) + directionNum]
  );
};

const hideAllDots = (dotsArr) => {
  //Go through all the dots and set them to empty
  console.log("You are now about to enter the change dots to empty for loop");
  for (let i = 0; i < dotsArr.length; i++) {
    //console.log(dotsArr[i]);
    dotsArr[i].setAttribute("src", "img/circleEmpty.svg");
  }
};

const showNextDot = (currentSlideNum, dotsArr, direction) => {
  let directionNum = 0;
  if (direction == "left") {
    directionNum = -1;
  } else {
    directionNum = 1;
  }
  dotsArr[parseInt(currentSlideNum) + directionNum].setAttribute(
    "src",
    "img/circleFull.svg"
  );
};

//Referencing the slider gallery that we created in the index.js file we can now change the slides, given the direction we are changing in
const changeSlide = (currentSlideNum, direction, status) => {
  console.log("You are now in the changeSlide func");
  console.log("The currentSlideNum is: " + currentSlideNum);
  const divImgCnt = document.querySelector(".div-img");
  const htmlImgArr = divImgCnt.getElementsByTagName("img");
  const imgElementsArr = [...htmlImgArr];
  console.log(imgElementsArr);

  const sliderDotsCnt = document.querySelector(".slider-circles");
  console.log("The slider circles Cnt");
  console.log(sliderDotsCnt);
  const htmlDotsArr = sliderDotsCnt.getElementsByTagName("img");
  const dotsArr = [...htmlDotsArr];
  console.log(dotsArr);

  //First check if automatic slider has reached the end and now wants to restart.
  if (status == "restart") {
    console.log("Time for a restart!");
    setTimeout(toggleHide, 800, imgElementsArr[0]);
    //imgElementsArr[0].classList.remove("hide");
    imgElementsArr[0].classList.add("shown-img");
    /* imgElementsArr[0].classList.add("invisible");
    imgElementsArr[0].classList.add("fade-in");
    imgElementsArr[0].classList.remove("invisible"); */
    console.log(imgElementsArr[0]);
  } else {
  }

  //Hide all the images
  if (currentSlideNum != 0 && direction == "left") {
    //Hide the shown image
    hideShownImageInSlider(imgElementsArr);
    //Now show the next slide image
    showNextSlideImage(currentSlideNum, imgElementsArr, "left");

    //Go through all the dots and set them to empty
    hideAllDots(dotsArr);
    showNextDot(currentSlideNum, dotsArr, "left");
  } else if (currentSlideNum != 2 && direction == "right") {
    //Hide the shown image
    hideShownImageInSlider(imgElementsArr);
    //Show the next image
    showNextSlideImage(currentSlideNum, imgElementsArr, "right");

    hideAllDots(dotsArr);
    showNextDot(currentSlideNum, dotsArr, "right");
  } else {
    console.log(
      "You are either at the end or beginning of the slide show and cant move further forward or backwards!"
    );
  }
};

const getCurrentSlideNum = () => {
  const currentSlideElement = document.querySelector(".shown-img");
  return currentSlideElement.getAttribute("data-imgnum");
};
