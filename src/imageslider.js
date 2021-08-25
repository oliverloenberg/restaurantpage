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

//Referencing the slider gallery that we created in the index.js file we can now change the slides, given the direction we are changing in
const changeSlide = (currentSlideNum, direction) => {
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

  //Now we show the relevant image and dots
  if (currentSlideNum != 0 && direction == "left") {
    for (let i = 0; i < imgElementsArr.length; i++) {
      if (imgElementsArr[i].classList.contains("shown-img")) {
        imgElementsArr[i].classList.toggle("shown-img");
        imgElementsArr[i].classList.toggle("hide");
      }
    }
    //Go through all the dots and set them to empty
    console.log("You are now about to enter the change dots to empty for loop");
    for (let i = 0; i < dotsArr.length; i++) {
      //console.log(dotsArr[i]);
      dotsArr[i].setAttribute("src", "img/circleEmpty.svg");
    }
    console.log("Changing slide to show the previous image");
    imgElementsArr[parseInt(currentSlideNum) - 1].classList.toggle("hide");
    imgElementsArr[parseInt(currentSlideNum) - 1].classList.toggle("shown-img");

    //Show the previous dots
    dotsArr[parseInt(currentSlideNum) - 1].setAttribute(
      "src",
      "img/circleFull.svg"
    );

    //divImgCnt
  } else if (currentSlideNum != 2 && direction == "right") {
    for (let i = 0; i < imgElementsArr.length; i++) {
      if (imgElementsArr[i].classList.contains("shown-img")) {
        imgElementsArr[i].classList.toggle("shown-img");
        imgElementsArr[i].classList.toggle("hide");
      }
    }
    //Go through all the dots and set them to empty
    console.log("You are now about to enter the change dots to empty for loop");
    for (let i = 0; i < dotsArr.length; i++) {
      //console.log(dotsArr[i]);
      dotsArr[i].setAttribute("src", "img/circleEmpty.svg");
    }
    console.log("Changing slide to show the next image");
    imgElementsArr[parseInt(currentSlideNum) + 1].classList.toggle("hide");
    imgElementsArr[parseInt(currentSlideNum) + 1].classList.toggle("shown-img");

    //show the next dot
    dotsArr[parseInt(currentSlideNum) + 1].setAttribute(
      "src",
      "img/circleFull.svg"
    );
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
