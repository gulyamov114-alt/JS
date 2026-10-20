const menuSections = [
  {
    title: "Starters",
    items: [
      { name: "Roasted Tomato Soup", description: "Basil oil and toasted sourdough", price: "€6" },
      { name: "Grilled Halloumi", description: "Honey, thyme and lemon", price: "€8" },
      { name: "Olive Plate", description: "Marinated olives, almonds and bread", price: "€5" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Wood-Fired Chicken", description: "Herb potatoes and garlic yoghurt", price: "€16" },
      { name: "Salmon Fillet", description: "Charred greens and lemon butter", price: "€19" },
      { name: "Mushroom Risotto", description: "Parmesan and fresh parsley", price: "€14" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Baked Apple", description: "Cinnamon, oats and vanilla cream", price: "€7" },
      { name: "Chocolate Pot", description: "Dark chocolate and sea salt", price: "€7" },
    ],
  },
];

function createSection({ title, items }) {
  const section = document.createElement("section");
  section.className = "menu-section";

  const heading = document.createElement("h3");
  heading.textContent = title;
  section.appendChild(heading);

  items.forEach(({ name, description, price }) => {
    const item = document.createElement("div");
    item.className = "menu-item";

    const text = document.createElement("div");
    const itemName = document.createElement("strong");
    itemName.textContent = name;
    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    text.append(itemName, itemDescription);

    const itemPrice = document.createElement("span");
    itemPrice.className = "price";
    itemPrice.textContent = price;

    item.append(text, itemPrice);
    section.appendChild(item);
  });

  return section;
}

export default function loadMenu() {
  const content = document.querySelector("#content");

  const page = document.createElement("div");
  page.className = "page menu";

  const headline = document.createElement("h2");
  headline.textContent = "Our Menu";

  page.appendChild(headline);
  menuSections.forEach((section) => page.appendChild(createSection(section)));
  content.appendChild(page);
}
