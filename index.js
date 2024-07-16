function refreshWeather(response) {
  let cityElement = document.querySelector("#city");

  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.current.temperature;
  let descriptionElement = document.querySelector("#description");

  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.location.localtime);
  console.log(response.data);
  cityElement.innerHTML = response.data.request.query;

  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML = response.data.current.weather_descriptions;
  humidityElement.innerHTML = `${response.data.current.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.current.wind_speed}km/h`;
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.current.weather_icons[0]}" class="weather-app-icon" />`;
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
  let apiKey = "c72eac60bd8f11a1d8d75b27289d900d";

  let apiUrl = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}& units=m`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
