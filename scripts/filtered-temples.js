const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "St. Louis Missouri",
	  location: "St. Louis, Missouri, United States",
	  dedicated: "1997, June, 1",
	  area: 58749,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/1280x800/st-louis-temple-lds-903363-wallpaper.jpg"
	},
	{
	  templeName: "Manila Philippines",
	  location: "Quezon City, Metro Manila, Philippines",
	  dedicated: "1984, September, 25",
	  area: 26683,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/1280x800/manila-philippines-temple-lds-129585-wallpaper.jpg"
	},
	{
	  templeName: "San Diego California",
	  location: "San Diego, California, United States",
	  dedicated: "1993, April, 25",
	  area: 72000,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/1280x800/san-diego-temple-765109-wallpaper.jpg"
	},
  ];

const templeContainer = document.getElementById("temple-pictures");

const homeButton = document.getElementById("home-button");
const oldButton = document.getElementById("old-button");
const newButton = document.getElementById("new-button");
const largeButton = document.getElementById("large-button");
const smallButton = document.getElementById("small-button");

createTempleCards(temples);

const selectionTitle = document.getElementById("selection-title");

homeButton.addEventListener("click", () => {
	createTempleCards(temples);
	selectionTitle.textContent = "Home";
})

oldButton.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) < 1900);
	createTempleCards(filteredTemples);
	selectionTitle.textContent = "Old";
})

newButton.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => Number(temple.dedicated.split(",")[0]) > 2000);
	createTempleCards(filteredTemples);
	selectionTitle.textContent = "New";
})

largeButton.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.area > 90000);
	createTempleCards(filteredTemples);
	selectionTitle.textContent = "Large";
})

smallButton.addEventListener("click", () => {
	let filteredTemples = temples.filter(temple => temple.area < 10000);
	createTempleCards(filteredTemples);
	selectionTitle.textContent = "Small";
})

function createTempleCards (temples) {
	templeContainer.innerHTML = '';
	temples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.textContent = `Location: ${temple.location}`;
		dedication.textContent = `Dedicated: ${temple.dedicated}`;
		area.textContent = `${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		templeContainer.appendChild(card);
	})
}