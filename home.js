import heroImage from "./hero.svg";

// Initial page-load function: builds the Home page with JavaScript only
// and appends it to div#content.
export default function loadHome() {
  const content = document.querySelector("#content");

  const page = document.createElement("div");
  page.className = "page home";

  const image = document.createElement("img");
  image.className = "hero";
  image.src = heroImage;
  image.alt = "A bowl of fresh food";

  const headline = document.createElement("h2");
  headline.textContent = "Fire-cooked food, made with care";

  const intro = document.createElement("p");
  intro.textContent =
    "Ember & Olive is a small neighbourhood restaurant. We cook with seasonal " +
    "ingredients over an open flame and keep the menu short, so everything on " +
    "the plate is made fresh every day.";

  const hours = document.createElement("p");
  hours.className = "highlight";
  hours.textContent = "Open Tuesday to Sunday, 12:00 – 22:00";

  page.append(image, headline, intro, hours);
  content.appendChild(page);
}
