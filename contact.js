const contactDetails = [
  { label: "Address", value: "12 Old Mill Street, Riga" },
  { label: "Phone", value: "+371 2000 0000" },
  { label: "Email", value: "hello@emberandolive.example" },
  { label: "Hours", value: "Tue – Sun, 12:00 – 22:00" },
];

export default function loadContact() {
  const content = document.querySelector("#content");

  const page = document.createElement("div");
  page.className = "page contact";

  const headline = document.createElement("h2");
  headline.textContent = "Contact Us";

  const intro = document.createElement("p");
  intro.textContent = "Book a table or ask us anything. We are happy to help.";

  const list = document.createElement("dl");
  contactDetails.forEach(({ label, value }) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    list.append(term, description);
  });

  page.append(headline, intro, list);
  content.appendChild(page);
}
