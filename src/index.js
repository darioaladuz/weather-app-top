import _ from 'lodash';
import displayWeather from './components/_DisplayWeather';
import formUI from './components/_FormUI';
import currentWeatherUI from './components/_CurrentWeatherUI';
import dailyForectastUI from './components/_DailyForecastUI';
import footer from './components/_Footer.js';

function component() {

    const element = document.createElement('div');
    const h1 = document.createElement('h1');

    element.className = 'wrapper';

    h1.textContent = 'Weather App Project'

    element.appendChild(formUI());
    element.appendChild(h1);
    element.appendChild(currentWeatherUI());
    element.appendChild(dailyForectastUI());
    element.appendChild(footer());

    setTimeout(() => {
        displayWeather();
    }, 0);

    return element;
}

document.body.appendChild(component());