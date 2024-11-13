document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '265c76f9e54fd95c0afb2b186c1e16f0';  // Replace with your OpenWeatherMap API key

  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === '404') {
      alert('City not found');
      return;
    }

    // Extract weather details
    const temp = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    // Display the weather information
    document.getElementById('weatherInfo').innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${temp}°C</p>
      <p>Description: ${weatherDescription}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    `;
  } catch (error) {
    alert('Error fetching weather data');
  }
}
