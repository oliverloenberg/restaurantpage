const test = (input) => "Hi the input is " + input;

const initiateHeader = () => {
  const contentContainer = document.getElementById("content");
  const header = document.createElement("header");

  contentContainer.appendChild(header);

  const headerH1 = document.createElement("h1");
  headerH1.innerHTML = "Achilles Heel";

  header.appendChild(headerH1);

  const headerH5 = document.createElement("h5");
  headerH5.innerHTML = "Fine Greek Cuisine";

  header.appendChild(headerH5);

  const nav = document.createElement("nav");
  header.appendChild(nav);

  const navLinks = document.createElement("ul");
  navLinks.className = "nav-ul-container";
  nav.appendChild(navLinks);

  const navLi1 = document.createElement("li");
  const navLink1 = document.createElement("a");
  navLink1.innerHTML = "Home";
  navLink1.setAttribute("href", "#");
  navLink1.setAttribute("id", "home");
  navLinks.appendChild(navLi1);
  navLi1.appendChild(navLink1);

  const navLi2 = document.createElement("li");
  const navLink2 = document.createElement("a");
  navLink2.innerHTML = "Menu";
  navLink2.setAttribute("href", "#");
  navLink2.setAttribute("id", "menu");
  navLinks.appendChild(navLi2);
  navLi2.appendChild(navLink2);

  const navLi3 = document.createElement("li");
  const navLink3 = document.createElement("a");
  navLink3.innerHTML = "Contact";
  navLink3.setAttribute("href", "#");
  navLink3.setAttribute("id", "contact");
  navLinks.appendChild(navLi3);
  navLi3.appendChild(navLink3);
};

const initiateHomeMain = () => {
  const contentContainer = document.getElementById("content");
  const main = document.createElement("main");
  main.className = "home";

  contentContainer.appendChild(main);

  //Section 1
  const section1 = document.createElement("section");
  section1.className = "offer";

  main.appendChild(section1);

  const divContentBlock = document.createElement("div");
  divContentBlock.className = "content-block";

  section1.appendChild(divContentBlock);

  const divContentBlockTxt = document.createElement("div");
  divContentBlockTxt.className = "content-block-txt";

  divContentBlock.appendChild(divContentBlockTxt);

  const section1H2 = document.createElement("h2");
  section1H2.innerHTML = "We offer";

  divContentBlockTxt.appendChild(section1H2);

  const section1p1 = document.createElement("p");
  section1p1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet iaculis neque, non venenatis erat dignissim sit amet. Aenean euismod venenatis viverra. Curabitur tempor sem ante, at porta sem lacinia placerat. Nunc a posuere orci. Suspendisse vulputate urna eu mi iaculis, vel porttitor neque congue. Vivamus et consectetur tortor. Cras sodales auctor tortor vel ullamcorper. Donec risus metus, sodales id tempor molestie, consequat quis erat.";

  divContentBlockTxt.appendChild(section1p1);

  const section1p2 = document.createElement("p");
  section1p2.innerHTML =
    "Nunc a posuere orci. Suspendisse vulputate urna eu mi iaculis, vel porttitor neque congue. Vivamus et consectetur tortor. Cras sodales auctor tortor vel ullamcorper. Donec risus metus, sodales id tempor molestie, consequat quis erat.";

  divContentBlockTxt.appendChild(section1p2);

  const section1fig = document.createElement("figure");

  divContentBlockTxt.appendChild(section1fig);

  const section1blockQuote = document.createElement("blockquote");
  section1blockQuote.innerHTML =
    '"Donec risus metus, sodales id tempor molestie, consequat quis erat."';

  section1fig.appendChild(section1blockQuote);

  const section1figCaption = document.createElement("figcaption");
  section1figCaption.innerHTML = "A. Dumbledore - owner";

  section1fig.appendChild(section1figCaption);

  const divContentBlockImg = document.createElement("div");
  divContentBlockImg.className = "content-block-img";

  divContentBlock.appendChild(divContentBlockImg);

  const section1img1 = document.createElement("img");
  section1img1.setAttribute("src", "img/food.jpg");

  divContentBlockImg.appendChild(section1img1);

  //Section 2

  const section2 = document.createElement("section");
  section2.className = "book";

  main.appendChild(section2);

  const divContentBlock2 = document.createElement("div");
  divContentBlock2.className = "content-block";

  section2.appendChild(divContentBlock2);

  const divContentBlockTxt2 = document.createElement("div");
  divContentBlockTxt2.className = "content-block-txt";

  divContentBlock2.appendChild(divContentBlockTxt2);

  const section2H2 = document.createElement("h2");
  section2H2.innerHTML = "Book us";

  divContentBlockTxt2.appendChild(section2H2);

  const section2p1 = document.createElement("p");
  section2p1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet iaculis neque, non venenatis erat dignissim sit amet. Aenean euismod venenatis viverra. Curabitur tempor sem ante, at porta sem lacinia placerat. Nunc a posuere orci. Suspendisse vulputate urna eu mi iaculis, vel porttitor neque congue. Vivamus et consectetur tortor. Cras sodales auctor tortor vel ullamcorper. Donec risus metus, sodales id tempor molestie, consequat quis erat.";

  divContentBlockTxt2.appendChild(section2p1);

  const divContentBlockImg2 = document.createElement("div");
  divContentBlockImg2.className = "content-block-img";

  divContentBlock2.appendChild(divContentBlockImg2);

  const section2img2 = document.createElement("img");
  section2img2.setAttribute("src", "img/book.jpg");

  divContentBlockImg2.appendChild(section2img2);
  //Section 3

  const section3 = document.createElement("section");
  section3.className = "history";

  main.appendChild(section3);

  const divContentBlock3 = document.createElement("div");
  divContentBlock3.className = "content-block";

  section3.appendChild(divContentBlock3);

  const divContentBlockTxt3 = document.createElement("div");
  divContentBlockTxt3.className = "content-block-txt";

  divContentBlock3.appendChild(divContentBlockTxt3);

  const section3H2 = document.createElement("h2");
  section3H2.innerHTML = "A rich history";

  divContentBlockTxt3.appendChild(section3H2);

  const section3p1 = document.createElement("p");
  section3p1.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet iaculis neque, non venenatis erat dignissim sit amet. Aenean euismod venenatis viverra. Curabitur tempor sem ante, at porta sem lacinia placerat. Nunc a posuere orci. Suspendisse vulputate urna eu mi iaculis, vel porttitor neque congue. Vivamus et consectetur tortor. Cras sodales auctor tortor vel ullamcorper. Donec risus metus, sodales id tempor molestie, consequat quis erat.";

  divContentBlockTxt3.appendChild(section3p1);

  const divContentBlockImg3 = document.createElement("div");
  divContentBlockImg3.className = "content-block-img";

  divContentBlock3.appendChild(divContentBlockImg3);

  const section3img3 = document.createElement("img");
  section3img3.setAttribute("src", "img/history.jpg");

  divContentBlockImg3.appendChild(section3img3);
};

const initiateFooter = () => {
  const contentContainer = document.getElementById("content");

  const footer = document.createElement("footer");

  contentContainer.appendChild(footer);

  const footerp1 = document.createElement("p");
  footerp1.innerHTML = "Follow us on social media";

  footer.appendChild(footerp1);

  const footerDiv = document.createElement("div");
  footerDiv.className = "socials";

  footer.appendChild(footerDiv);

  //Facebook
  const facebookLink = document.createElement("a");
  facebookLink.setAttribute("href", "https://www.facebook.com");
  facebookLink.setAttribute("target", "_blank");
  facebookLink.setAttribute("rel", "noopener");

  footerDiv.appendChild(facebookLink);

  const facebookImg = document.createElement("img");
  facebookImg.setAttribute("src", "img/facebook.png");

  facebookLink.appendChild(facebookImg);

  //Youtube
  const youtubeLink = document.createElement("a");
  youtubeLink.setAttribute("href", "https://www.youtube.com");
  youtubeLink.setAttribute("target", "_blank");
  youtubeLink.setAttribute("rel", "noopener");

  footerDiv.appendChild(youtubeLink);

  const youtubeImg = document.createElement("img");
  youtubeImg.setAttribute("src", "img/youtube.png");

  youtubeLink.appendChild(youtubeImg);

  //Instagram
  const instagramLink = document.createElement("a");
  instagramLink.setAttribute("href", "https://www.instagram.com");
  instagramLink.setAttribute("target", "_blank");
  instagramLink.setAttribute("rel", "noopener");

  footerDiv.appendChild(instagramLink);

  const instagramImg = document.createElement("img");
  instagramImg.setAttribute("src", "img/instagram.png");

  instagramLink.appendChild(instagramImg);

  //Twitter
  const twitterLink = document.createElement("a");
  twitterLink.setAttribute("href", "https://twitter.com/");
  twitterLink.setAttribute("target", "_blank");
  twitterLink.setAttribute("rel", "noopener");

  footerDiv.appendChild(twitterLink);

  const twitterImg = document.createElement("img");
  twitterImg.setAttribute("src", "img/twitter.png");

  twitterLink.appendChild(twitterImg);
};

export { test, initiateHeader, initiateHomeMain, initiateFooter };
