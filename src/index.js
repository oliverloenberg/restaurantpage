import _ from "lodash";
import {
  test,
  initiateHeader,
  initiateHomeMain,
  initiateFooter,
} from "./homepageload";
import { initiateMenuMain } from "./menupageload";
import { initiateContactMain } from "./contactpageload";

//initiateHeader();

initiateHomeMain();

initiateFooter();

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", " webpack"], "");

  return element;
}

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

//document.body.appendChild(component());

console.log("Hello!");

console.log(test("dope"));
