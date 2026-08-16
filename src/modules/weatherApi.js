const baseUrl =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const apiKey = '';

function createAPIUrl(city) {
  return `${baseUrl}${city}?key=${apiKey}&unitGroup=metric`;
}

function formatWeatherData(data) {
  return {
    datetime: data.currentConditions.datetime,
    currentTemperature: data.currentConditions.temp,
  };
}

async function getWeatherData(city) {
  try {
    const url = createAPIUrl(city);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request wasn't valid");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function getCleanWeatherData(city) {
  const data = await getWeatherData(city);
  return formatWeatherData(data);
}
