import getCleanWeatherData from './weatherApi.js';
import { renderWeather } from './render.js';
import { getUnits, setUnits, setWeatherData } from './state.js';
import loading from './loading.js';

const searchForm = document.querySelector('form');
const cityInput = document.querySelector('input');
const unitsSelector = document.querySelector('#unit-toggle');
const errorMessage = document.querySelector('#error');

async function handleSearch(event) {
  event.preventDefault();

  errorMessage.classList.add('hidden');
  errorMessage.textContent = '';

  loading.showLoading();

  try {
    const city = cityInput.value;
    const data = await getCleanWeatherData(city);

    setWeatherData(data);
    renderWeather();
  } catch (error) {
    errorMessage.classList.remove('hidden');
    errorMessage.textContent =
      'Could not find that location. Please try again.';

    console.error(error);
  } finally {
    loading.hideLoading();
  }
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
