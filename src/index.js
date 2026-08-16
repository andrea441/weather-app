import './styles.css';
import initEvents from './modules/events.js';
import getCleanWeatherData from './modules/weatherApi.js';
import { renderWeather } from './modules/render.js';

const initialData = await getCleanWeatherData('Chihuahua');
renderWeather(initialData);

initEvents();
