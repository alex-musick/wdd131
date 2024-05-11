const temperature = 69;
const windSpeed = 8;

function getWindChill (temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - Math.pow(35.75 * windSpeed, 0.16) + Math.pow(0.4275 * temperature * windSpeed, 0.16);
}

const windChillLine = document.querySelector('#chill-line');

if (temperature <= 50 && windChillLine > 3) {
    windChill = getWindChill(temperature, windSpeed);
    windChillLine.textContent = "Wind Chill: " + windChill;
} else {
    windChillLine.textContent = "Wind Chill: N/A";
}