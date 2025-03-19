
const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key_here&units=metric` ;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML = "City not found!";
            } else {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = "Error fetching data!";
        });
}