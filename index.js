import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");
const tabButtons = document.querySelectorAll("nav button");

const tabs = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function showTab(name) {
  content.replaceChildren(); // wipe out the current tab
  tabs[name](); // build the new one

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === name;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => showTab(button.dataset.tab));
});

showTab("home"); // initial page load
