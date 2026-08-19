import getCleanWeatherData from './weatherApi.js';
import { renderWeather } from './render.js';
import { getUnits, setUnits, setWeatherData } from './state.js';

const searchForm = document.querySelector('form');
const cityInput = document.querySelector('input');
const unitsSelector = document.querySelector('#unit-toggle');

async function handleSearch(event) {
  event.preventDefault();

  const city = cityInput.value;
  const data = await getCleanWeatherData(city);

  setWeatherData(data);

  renderWeather();
}

function handleToggleUnits(event) {
  if (event.target.tagName !== 'BUTTON') return;

  const units = getUnits();

  if (event.target.id === 'celsius' && units !== 'C') setUnits('C');
  else if (event.target.id === 'farenheit' && units !== 'F') setUnits('F');

  renderWeather();
}

export default function initEvents() {
  searchForm.addEventListener('submit', handleSearch);
  unitsSelector.addEventListener('click', handleToggleUnits);
}
