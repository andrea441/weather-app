let units = 'C';
let weatherData = null;

function getUnits() {
  return units;
}

function setUnits(unit) {
  units = unit;
}

function getWeatherData() {
  return weatherData;
}

function setWeatherData(data) {
  weatherData = data;
}

export { getUnits, setUnits, getWeatherData, setWeatherData };
