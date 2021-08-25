import _ from "lodash";
import {
  test,
  initiateHeader,
  initiateHomeMain,
  initiateFooter,
} from "./homepageload";
import { initiateMenuMain } from "./menupageload";
import { initiateContactMain } from "./contactpageload";
import {
  createSlideGallery,
  changeSlide,
  getCurrentSlideNum,
} from "./imageslider";

//initiateHeader();

initiateHomeMain();

initiateFooter();

function resetMainContent() {
  const mainNode = document.querySelector("main");
  mainNode.remove();
}

function createNewMain(event) {
  switch (event.target.id) {
    case "home":
      //console.log("Home link was clicked!");
      resetMainContent();
      initiateHomeMain();
      initiateSlider();
      break;

    case "menu":
      //console.log("Menu link was clicked!");
      resetMainContent();
      initiateMenuMain();
      break;

    case "contact":
      resetMainContent();
      initiateContactMain();
      break;

    default:
      break;
  }
}

//Lets grab the container for the mobile menu icon and attach an event listener to it
const menuIconCnt = document.querySelector(".menu-icon");

menuIconCnt.addEventListener("click", (event) => {
  const navMenu = document.querySelector(".nav-menu");

  if (navMenu.classList.contains("show-nav")) {
    navMenu.classList.toggle("show-nav");
  } else {
    navMenu.classList.toggle("show-nav");
  }

  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("change");
});

//Setup the menu icon for desktop
const menuWrapper = document.querySelector(".menu-wrapper");
const navMenu = document.querySelector(".nav-menu");

menuIconCnt.addEventListener("mouseover", (event) => {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("remove-menu-icon");
  navMenu.classList.toggle("show-desktop-nav");
});

navMenu.addEventListener("mouseleave", (event) => {
  const menuIcon = document.querySelector(".menu-icon");
  setTimeout(toggleNavMenu, 300);
  setTimeout(toggleMenuIcon, 500);
});

const toggleNavMenu = () => {
  navMenu.classList.toggle("show-desktop-nav");
};

const toggleMenuIcon = () => {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("remove-menu-icon");
};

//Make sure the pop-out nav menu for desktop has the same height as the header itself
const header = document.getElementById("header");
console.log(header);

const headerCompStyles = window.getComputedStyle(header);

//Function we can use to find the numbers in a string and return them
const findNumReg = (word) => {
  let regEx = /\d/g;
  let numArr = word.match(regEx);
  return parseInt(numArr.join(""));
};

//Lets get the initial header height, but let it be overriden by the event listener down below

window.addEventListener("resize", (event) => {
  const headerHeight = headerCompStyles.getPropertyValue("height");
  const convertedHeaderHeight = findNumReg(headerHeight);
  console.log("Header height: " + convertedHeaderHeight);

  const screenW = headerCompStyles.getPropertyValue("width");
  const convertedScreenWidth = findNumReg(screenW);
  console.log("Header width: " + convertedScreenWidth);

  //Now we set the height of the nav-menu element to be the same, if we are working with screens above or equals to 1280px width
  if (convertedScreenWidth >= 1280) {
    console.log("Hey screenW is now abouve 1024");
    navMenu.classList.add("header-height2");
  } else if (convertedScreenWidth < 1280) {
    navMenu.classList.remove("header-height2");
  }
  //navMenu.style.height = headerHeight;
});

//Lets make each icon interactive

const navUlLinkContainer = document.querySelector(".nav-ul-container");
console.log(navUlLinkContainer);

navUlLinkContainer.addEventListener("click", (event) => createNewMain(event));

//Image slider section

const initiateSlider = () => {
  const homePageImageContentCnt = document.querySelector(".content-block-img");

  console.log(homePageImageContentCnt);

  const imgGallery = ["img/food.jpg", "img/food2.jpg", "img/food3.jpg"];

  //Grab the image container we need to pass to createSlideGallaery func
  const divImgCnt = document.querySelector(".div-img");

  const slideGallery = createSlideGallery(divImgCnt, imgGallery);

  console.log(slideGallery);

  homePageImageContentCnt.addEventListener("click", (event) => {
    const clickedClass = event.target.className;
    console.log(clickedClass);

    switch (clickedClass) {
      case "arrow-left-div":
      case "arrow-left":
        changeSlide(getCurrentSlideNum(), "left");
        if (clickedClass == "arrow-left-div") {
          console.log("Arrow left div was clicked");
        } else {
          console.log("arrow left icon was clicked");
        }
        break;

      case "shown-img":
        console.log("Shown img was clicked");
        break;

      case "arrow-right-div":
      case "arrow-right":
        changeSlide(getCurrentSlideNum(), "right");
        console.log("Arrow right div was clicked");
        break;
    }
  });
};

initiateSlider();
