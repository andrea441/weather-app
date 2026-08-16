function capitalizeWords(text) {
  return text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function renderMainWeather(data) {
  const weatherPlaceholder = document.querySelector(
    '#weather-placeholder span'
  );
  const minPlaceholder = document.querySelector('#min span');
  const maxPlaceholder = document.querySelector('#max span');
  const addressPlaceholder = document.querySelector('#city-placeholder span');

  const address = capitalizeWords(data.address);

  addressPlaceholder.textContent = address;
  weatherPlaceholder.textContent = `${data.currentTemperature}°`;
  minPlaceholder.textContent = `${data.tempMin}°`;
  maxPlaceholder.textContent = `${data.tempMax}°`;
}

function renderDetails(data) {
  const feelPlaceholder = document.querySelector('#feels-like');
  const humidityPlaceholder = document.querySelector('#humidity');
  const windPlaceholder = document.querySelector('#wind');
  const visibilityPlaceholder = document.querySelector('#visibility');
  const pressurePlaceholder = document.querySelector('#pressure');

  feelPlaceholder.textContent = `${data.feelsLike}°`;
  humidityPlaceholder.textContent = `${data.humidity}%`;
  windPlaceholder.textContent = `${data.windSpeed} km/h`;
  visibilityPlaceholder.textContent = `${data.visibility} km`;
  pressurePlaceholder.textContent = `${data.pressure} hPa`;
}

function renderWeather(data) {
  renderMainWeather(data);
  renderDetails(data);
}

export { renderWeather };
