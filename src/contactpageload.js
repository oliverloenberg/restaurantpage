function initiateContactMain() {
  const contentContainer = document.getElementById("content");

  const mainContainer = document.createElement("main");
  mainContainer.className = "contact";

  contentContainer.appendChild(mainContainer);

  //Contact form

  const formSection = document.createElement("section");
  formSection.className = "form-section";

  mainContainer.appendChild(formSection);

  const formH2 = document.createElement("h2");
  formH2.innerHTML = "Get in touch";

  formSection.appendChild(formH2);

  const formOuterContainer = document.createElement("div");
  formOuterContainer.className = "form-outer-container";

  formSection.appendChild(formOuterContainer);

  const formContainer = document.createElement("article");
  formContainer.className = "form-container";

  formOuterContainer.appendChild(formContainer);

  const form = document.createElement("form");
  form.setAttribute("action", "");
  form.setAttribute("method", "");

  formContainer.appendChild(form);

  ///Name field

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerHTML = "Name";

  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");

  form.appendChild(nameInput);

  ///Email field
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerHTML = "Email";

  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");

  form.appendChild(emailInput);

  ///Phone field
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.innerHTML = "Phone";

  form.appendChild(phoneLabel);

  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone");
  phoneInput.setAttribute("name", "phone");

  form.appendChild(phoneInput);

  ///Msg area
  const msgLabel = document.createElement("label");
  msgLabel.setAttribute("for", "msg");
  msgLabel.innerHTML = "Got any questions or requests?";

  form.appendChild(msgLabel);

  const msgArea = document.createElement("textarea");
  msgArea.setAttribute("id", "msg");
  msgArea.setAttribute("name", "msg");

  form.appendChild(msgArea);

  const submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Send";

  form.appendChild(submitBtn);

  ///Image

  const formImgContainer = document.createElement("article");
  formImgContainer.className = "form-img-container";

  formOuterContainer.appendChild(formImgContainer);

  const formImg = document.createElement("img");
  formImg.setAttribute("src", "img/waiter.jpg");

  formImgContainer.appendChild(formImg);

  //Contact info
  const infoSection = document.createElement("section");
  infoSection.className = "info-section";

  mainContainer.appendChild(infoSection);

  const xtraInfoContainer = document.createElement("div");
  xtraInfoContainer.className = "xtra-info-container";

  infoSection.appendChild(xtraInfoContainer);

  const xtraInfoH2 = document.createElement("h2");
  xtraInfoH2.innerHTML = "Find us here";

  xtraInfoContainer.appendChild(xtraInfoH2);

  const xtraInfoP = document.createElement("p");
  xtraInfoP.innerHTML = "Address: Vesterbrogade 678, 1620 København";

  xtraInfoContainer.appendChild(xtraInfoP);

  const mapContainer = document.createElement("div");
  mapContainer.className = "map-container";
  infoSection.appendChild(mapContainer);

  const map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.4840099989223!2d12.552434634394313!3d55.672712371781124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530aca9223d7%3A0xde72980de62373a1!2sRestaurant%20Madklubben%20Vesterbro!5e0!3m2!1sen!2sdk!4v1622549685833!5m2!1sen!2sdk"
  );
  map.setAttribute("allowfullscreen", "");
  map.setAttribute("loading", "lazy");

  mapContainer.appendChild(map);
}

export { initiateContactMain };
