dateSelector = document.getElementById("date-selector");
dayContent = document.getElementById("day-content");
saveButton = document.getElementById("save-button");

let activeDate = new Date().toISOString().slice(0,10);
dateSelector.value = activeDate;
loadDayContent(activeDate);

function loadDayContent(selectedDate) {
    selectedDateContent = localStorage.getItem(selectedDate);
    dayContent.value = selectedDateContent;
};

dateSelector.addEventListener("change", () => {
    activeDate = dateSelector.value;
    loadDayContent(activeDate);
});

saveButton.addEventListener("click", () => {
    localStorage.setItem(activeDate, dayContent.value);
});