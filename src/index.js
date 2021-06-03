import _ from "lodash";
import {
  test,
  initiateHeader,
  initiateHomeMain,
  initiateFooter,
} from "./homepageload";
import { initiateMenuMain } from "./menupageload";
import { initiateContactMain } from "./contactpageload";

initiateHeader();

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

const navUlLinkContainer = document.querySelector(".nav-ul-container");
console.log(navUlLinkContainer);

navUlLinkContainer.addEventListener("click", (event) => createNewMain(event));

//document.body.appendChild(component());

console.log("Hello!");

console.log(test("dope"));
