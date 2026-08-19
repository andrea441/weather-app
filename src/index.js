import './styles.css';
import initEvents from './modules/events.js';
import getCleanWeatherData from './modules/weatherApi.js';
import { setWeatherData } from './modules/state.js';
import { renderWeather } from './modules/render.js';

const initialData = await getCleanWeatherData('Chihuahua');
setWeatherData(initialData);
renderWeather(initialData);

initEvents();
