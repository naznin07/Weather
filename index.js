function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.location.name;
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.current.temp_c;

  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.current.wind_mph}km/h`;
  humidityElement.innerHTML = `${response.data.current.humidity}%`;
  temperatureElement.innerHTML = Math.round(temperature);
  let timeElement = document.querySelector("#time");

  let date = new Date(response.data.location.localtime);
  timeElement.innerHTML = formatDate(date);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.current.condition.text;
  let iconElement = document.querySelector(".weather-app-icon");
  let iconUrl = response.data.current.condition.icon;

  iconElement.src = `https:${iconUrl}`;
  getForecast(response.data.location.name);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "063d8a4225924dfc97512815241907";
  let apiUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=en&key=${apiKey}`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "063d8a4225924dfc97512815241907";
  let apiUrl = `https://api.weatherapi.com/v1/forecast.json?q=${city}&lang=en&key=${apiKey}&days=7&aqi=no&alerts=no`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastHtml = "";

  response.data.forecast.forecastday.forEach(function (day, index) {
    if (index < 5) {
      let dayOfWeek = formatDay(day.date_epoch);

      forecastHtml =
        forecastHtml +
        `
           <div class="weather-forecast-day">
          <div class="weather-forecast-date">${dayOfWeek}</div>
            <div class="weather-forecast-icon">
              <img src="https:${day.day.condition.icon}" alt="${
          day.day.condition.text
        }" />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>${Math.round(day.day.maxtemp_c)}º</strong>
            </div>
            <div class="weather-forecast-temperature">${Math.round(
              day.day.mintemp_c
            )}º</div>
          </div>
        </div>
      `;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("New York");

