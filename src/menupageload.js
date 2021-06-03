function initiateMenuMain() {
  const contentContainer = document.getElementById("content");

  const mainContainer = document.createElement("main");
  mainContainer.className = "menu";

  contentContainer.appendChild(mainContainer);

  //Starter container

  const section1 = document.createElement("section");
  section1.className = "starter";
  mainContainer.appendChild(section1);

  const starterH2 = document.createElement("h2");
  starterH2.className = "starterH2";
  starterH2.innerHTML = "Starters";

  section1.appendChild(starterH2);

  ///Starter 1

  const starterArticle1 = document.createElement("article");

  section1.appendChild(starterArticle1);

  const starter1H3 = document.createElement("h3");
  starter1H3.innerHTML = "Tzatziki 49,-";

  starterArticle1.appendChild(starter1H3);

  const starter1Img1 = document.createElement("img");
  starter1Img1.setAttribute("src", "img/tzatziki.jpg");

  starterArticle1.appendChild(starter1Img1);

  ///Starter 2

  const starterArticle2 = document.createElement("article");

  section1.appendChild(starterArticle2);

  const starter2H3 = document.createElement("h3");
  starter2H3.innerHTML = "Dolmadakia 49,-";

  starterArticle2.appendChild(starter2H3);

  const starter2Img1 = document.createElement("img");
  starter2Img1.setAttribute("src", "img/dolma1.jpg");

  starterArticle2.appendChild(starter2Img1);

  ///Starter 3

  const starterArticle3 = document.createElement("article");

  section1.appendChild(starterArticle3);

  const starter3H3 = document.createElement("h3");
  starter3H3.innerHTML = "Garides saganaki 64,-";

  starterArticle3.appendChild(starter3H3);

  const starter3Img1 = document.createElement("img");
  starter3Img1.setAttribute("src", "img/garrides.jpg");

  starterArticle3.appendChild(starter3Img1);

  //Main Dish Container

  const section2 = document.createElement("section");
  section2.className = "main-dish";
  mainContainer.appendChild(section2);

  const mainDishH2 = document.createElement("h2");
  mainDishH2.className = "mainDishH2";
  mainDishH2.innerHTML = "Main dishes";

  section2.appendChild(mainDishH2);

  ///Main dish 1
  const mainDishArticle1 = document.createElement("article");

  section2.appendChild(mainDishArticle1);

  const mainDish1H3 = document.createElement("h3");
  mainDish1H3.innerHTML = "Mousakas 119,-";

  mainDishArticle1.appendChild(mainDish1H3);

  const mainDish1Img1 = document.createElement("img");
  mainDish1Img1.setAttribute("src", "img/mousakas.jpg");

  mainDishArticle1.appendChild(mainDish1Img1);

  ///Main dish 2
  const mainDishArticle2 = document.createElement("article");

  section2.appendChild(mainDishArticle2);

  const mainDish2H3 = document.createElement("h3");
  mainDish2H3.innerHTML = "Kleftiko 119,-";

  mainDishArticle2.appendChild(mainDish2H3);

  const mainDish2Img1 = document.createElement("img");
  mainDish2Img1.setAttribute("src", "img/kleftiko.jpg");

  mainDishArticle2.appendChild(mainDish2Img1);

  ///Main dish 3
  const mainDishArticle3 = document.createElement("article");

  section2.appendChild(mainDishArticle3);

  const mainDish3H3 = document.createElement("h3");
  mainDish3H3.innerHTML = "Souzoukakia 119,-";

  mainDishArticle3.appendChild(mainDish3H3);

  const mainDish3Img1 = document.createElement("img");
  mainDish3Img1.setAttribute("src", "img/souzoukakia.jpg");

  mainDishArticle3.appendChild(mainDish3Img1);

  //Dessert Container

  const section3 = document.createElement("section");
  section3.className = "dessert";
  mainContainer.appendChild(section3);

  const dessertH2 = document.createElement("h2");
  dessertH2.className = "dessertH2";
  dessertH2.innerHTML = "Desserts";

  section3.appendChild(dessertH2);

  ///Dessert 1
  const dessertArticle1 = document.createElement("article");

  section3.appendChild(dessertArticle1);

  const dessert1H3 = document.createElement("h3");
  dessert1H3.innerHTML = "Sokolatina 49,-";

  dessertArticle1.appendChild(dessert1H3);

  const dessert1Img1 = document.createElement("img");
  dessert1Img1.setAttribute("src", "img/sokolatina.jpg");

  dessertArticle1.appendChild(dessert1Img1);

  ///Dessert 2
  const dessertArticle2 = document.createElement("article");

  section3.appendChild(dessertArticle2);

  const dessert2H3 = document.createElement("h3");
  dessert2H3.innerHTML = "Milopita 40,-";

  dessertArticle2.appendChild(dessert2H3);

  const dessert2Img1 = document.createElement("img");
  dessert2Img1.setAttribute("src", "img/milopita.jpg");

  dessertArticle2.appendChild(dessert2Img1);

  ///Dessert 3
  const dessertArticle3 = document.createElement("article");

  section3.appendChild(dessertArticle3);

  const dessert3H3 = document.createElement("h3");
  dessert3H3.innerHTML = "Pagoto 49,-";

  dessertArticle3.appendChild(dessert3H3);

  const dessert3Img1 = document.createElement("img");
  dessert3Img1.setAttribute("src", "img/pagoto.jpg");

  dessertArticle3.appendChild(dessert3Img1);

  //Drinks container

  const section4 = document.createElement("section");
  section4.className = "drinks";
  mainContainer.appendChild(section4);

  const drinksH2 = document.createElement("h2");
  drinksH2.className = "drinksH2";
  drinksH2.innerHTML = "Drinks";

  section4.appendChild(drinksH2);

  ///Drink 1
  const drinkArticle1 = document.createElement("article");

  section4.appendChild(drinkArticle1);

  const drink1H3 = document.createElement("h3");
  drink1H3.innerHTML = "Aspra 164,-";

  drinkArticle1.appendChild(drink1H3);

  const drink1Img1 = document.createElement("img");
  drink1Img1.setAttribute("src", "img/aspra.jpg");

  drinkArticle1.appendChild(drink1Img1);

  ///Drink 2
  const drinkArticle2 = document.createElement("article");

  section4.appendChild(drinkArticle2);

  const drink2H3 = document.createElement("h3");
  drink2H3.innerHTML = "Kokkina 164,-";

  drinkArticle2.appendChild(drink2H3);

  const drink2Img1 = document.createElement("img");
  drink2Img1.setAttribute("src", "img/kokkina.jpg");

  drinkArticle2.appendChild(drink2Img1);

  ///Drink 3
  const drinkArticle3 = document.createElement("article");

  section4.appendChild(drinkArticle3);

  const drink3H3 = document.createElement("h3");
  drink3H3.innerHTML = "Ouzo 179,-";

  drinkArticle3.appendChild(drink3H3);

  const drink3Img1 = document.createElement("img");
  drink3Img1.setAttribute("src", "img/ouzo.jpg");

  drinkArticle3.appendChild(drink3Img1);
}

export { initiateMenuMain };
