import sunny from '../images/clear-day.svg';
import clearNight from '../images/clear-night.svg';
import partlyCloudDay from '../images/partly-cloudy-day.svg';
import partlyCloudNight from '../images/partly-cloudy-night.svg';
import cloudy from '../images/cloudy.svg';
import rain from '../images/rain.svg';

import { getUnits, getWeatherData } from './state.js';

function capitalizeWords(text) {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function formatTemperature(celsius) {
  let temperature = celsius;

  const units = getUnits();

  if (units === 'F') {
    temperature = celsius * (9 / 5) + 32;
  }

  return temperature.toFixed(1);
}

const weatherImages = {
  'clear-day': sunny,
  'partly-cloudy-day': partlyCloudDay,
  rain: rain,
  cloudy: cloudy,
  'partly-cloudy-night': partlyCloudNight,
  'clear-night': clearNight,
};

function renderMainWeather() {
  const data = getWeatherData();

  const weatherPlaceholder = document.querySelector(
    '#weather-placeholder span'
  );
  const minPlaceholder = document.querySelector('#min span');
  const maxPlaceholder = document.querySelector('#max span');
  const addressPlaceholder = document.querySelector('#city-placeholder span');
  const iconPlaceholder = document.querySelector('#weather-icon');

  const address = capitalizeWords(data.address);
  let temperature = formatTemperature(data.currentTemperature);
  let min = formatTemperature(data.tempMin);
  let max = formatTemperature(data.tempMax);

  addressPlaceholder.textContent = address;
  weatherPlaceholder.textContent = `${temperature}°`;
  minPlaceholder.textContent = `${min}°`;
  maxPlaceholder.textContent = `${max}°`;

  console.log(data.icon);
  iconPlaceholder.src = weatherImages[data.icon];
}

function renderDetails() {
  const data = getWeatherData();

  const feelPlaceholder = document.querySelector('#feels-like');
  const humidityPlaceholder = document.querySelector('#humidity');
  const windPlaceholder = document.querySelector('#wind');
  const visibilityPlaceholder = document.querySelector('#visibility');
  const pressurePlaceholder = document.querySelector('#pressure');

  let feelsLike = formatTemperature(data.feelsLike);

  feelPlaceholder.textContent = `${feelsLike}°`;
  humidityPlaceholder.textContent = `${data.humidity}%`;
  windPlaceholder.textContent = `${data.windSpeed} km/h`;
  visibilityPlaceholder.textContent = `${data.visibility} km`;
  pressurePlaceholder.textContent = `${data.pressure} hPa`;
}

function renderUnitToggle() {
  const celsius = document.getElementById('celsius');
  const farenheit = document.getElementById('farenheit');

  const units = getUnits();

  celsius.classList.toggle('active', units === 'C');
  farenheit.classList.toggle('active', units === 'F');
}

function renderWeather() {
  renderMainWeather();
  renderDetails();
  renderUnitToggle();
}

export { renderWeather };
