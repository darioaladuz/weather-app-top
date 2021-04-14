import _ from 'lodash';
import displayWeather from './components/_DisplayWeather';

function component() {

    const element = document.createElement('div');
    const h1 = document.createElement('h1');

    h1.textContent = 'Weather App Project'

    element.appendChild(h1);

    displayWeather();

    return element;
}

document.body.appendChild(component());