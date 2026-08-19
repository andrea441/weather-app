const baseUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const apiKey = 'W3MAJYM9F5CUVXSBV9M68M56B';

function createAPIUrl(city) {
  return `${baseUrl}${city}?key=${apiKey}&unitGroup=metric`;
}

function formatWeatherData(data) {
  return {
    datetime: data.currentConditions.datetime,
    address: data.resolvedAddress,
    currentTemperature: data.currentConditions.temp,
    tempMax: data.days[0].tempmax,
    tempMin: data.days[0].tempmin,
    conditions: data.currentConditions.conditions,
    icon: data.currentConditions.icon,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
    visibility: data.currentConditions.visibility,
    pressure: data.currentConditions.pressure,
  };
}

async function getWeatherData(city) {
  const url = createAPIUrl(city);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Request wasn't valid");
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export default async function getCleanWeatherData(city) {
  const data = await getWeatherData(city);
  return formatWeatherData(data);
}
