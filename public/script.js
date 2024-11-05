document.getElementById('weather-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    const weatherDataDiv = document.getElementById('weather-data');
    if (response.ok) {
        weatherDataDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } else {
        weatherDataDiv.innerHTML = `<p>Error: ${data.message}</p>`;
    }
});
