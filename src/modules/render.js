import sunny from '../images/clear-day.svg';
import clearNight from '../images/clear-night.svg';
import partlyCloudDay from '../images/partly-cloudy-day.svg';
import partlyCloudNight from '../images/partly-cloudy-night.svg';
import cloudy from '../images/cloudy.svg';
import rain from '../images/rain.svg';

import { getUnits } from './state.js';

function capitalizeWords(text) {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const weatherImages = {
  'clear-day': sunny,
  'partly-cloudy-day': partlyCloudDay,
  rain: rain,
  cloudy: cloudy,
  'partly-cloudy-night': partlyCloudNight,
  'clear-night': clearNight,
};

function renderMainWeather(data) {
  const weatherPlaceholder = document.querySelector(
    '#weather-placeholder span'
  );
  const minPlaceholder = document.querySelector('#min span');
  const maxPlaceholder = document.querySelector('#max span');
  const addressPlaceholder = document.querySelector('#city-placeholder span');
  const iconPlaceholder = document.querySelector('#weather-icon');

  const address = capitalizeWords(data.address);
  let temperature = data.currentTemperature;
  let min = data.tempMin;
  let max = data.tempMax;

  const units = getUnits();

  if (units === 'F') {
    temperature = temperature * (9 / 5) + 32;
    min = min * (9 / 5) + 32;
    max = max * (9 / 5) + 32;
  }

  addressPlaceholder.textContent = address;
  weatherPlaceholder.textContent = `${temperature}°`;
  minPlaceholder.textContent = `${min}°`;
  maxPlaceholder.textContent = `${max}°`;

  console.log(data.icon);
  iconPlaceholder.src = weatherImages[data.icon];
}

function renderDetails(data) {
  const feelPlaceholder = document.querySelector('#feels-like');
  const humidityPlaceholder = document.querySelector('#humidity');
  const windPlaceholder = document.querySelector('#wind');
  const visibilityPlaceholder = document.querySelector('#visibility');
  const pressurePlaceholder = document.querySelector('#pressure');

  let feelsLike = data.feelsLike;

  const units = getUnits();

  if (units === 'F') {
    feelsLike = feelsLike * (9 / 5) + 32;
  }

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

function renderWeather(data) {
  renderMainWeather(data);
  renderDetails(data);
  renderUnitToggle();
}

export { renderWeather, renderUnitToggle };
