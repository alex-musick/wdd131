const currentYear = document.querySelector("#currentyear");
const thisYear = new Date().getFullYear();

currentYear.innerHTML = thisYear;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`
