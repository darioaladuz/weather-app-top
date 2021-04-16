export default function currentWeatherUI() {
    const wrapper = document.createElement('div');
    const mainContainer = document.createElement('div');
    const dateContainer = document.createElement('div');
    const statsContainer = document.createElement('div');
    const location = document.createElement('h2');
    const date = document.createElement('h3');
    const temperature = document.createElement('h2');
    const temperatureFeels = document.createElement('h3');
    const humidity = document.createElement('h3');
    const sunrise = document.createElement('h3');
    const sunset = document.createElement('h3');
    const currentWeather = document.createElement('h3');
    const icon = document.createElement('div');

    wrapper.className = 'current-weather';
    mainContainer.className = 'container main-container';
    dateContainer.className = 'container date-container';
    statsContainer.className = 'container stats-container';
    location.className = 'location';
    date.className = 'date current-date';
    temperature.className = 'temperature current-temperature'
    temperatureFeels.className = 'stats temperature-feels';
    humidity.className = 'stats humidity';
    sunrise.className = 'stats sunrise';
    sunset.className = 'stats sunset';
    currentWeather.className = 'stats weather-current';
    icon.className = 'icon';

    wrapper.appendChild(mainContainer);
    wrapper.appendChild(statsContainer);
    mainContainer.appendChild(dateContainer);
    mainContainer.appendChild(temperature);    
    dateContainer.appendChild(location);
    dateContainer.appendChild(date);
    statsContainer.appendChild(temperatureFeels);
    statsContainer.appendChild(humidity);
    statsContainer.appendChild(sunrise);
    statsContainer.appendChild(sunset);
    statsContainer.appendChild(currentWeather);
    statsContainer.appendChild(icon);

    return wrapper;
}