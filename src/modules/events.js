import getCleanWeatherData from './weatherApi.js';

const searchForm = document.querySelector('form');
const cityInput = document.querySelector('input');

async function handleSearch(event) {
  event.preventDefault();

  const city = cityInput.value;
  const data = await getCleanWeatherData(city);

  console.log(data);
}

export default function initEvents() {
  searchForm.addEventListener('submit', handleSearch);
}
