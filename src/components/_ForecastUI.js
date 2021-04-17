import dateFormatter from './_DateFormatter';

export default function forecastUI(forecast) {
    const container = document.createElement('div');
    const date = document.createElement('h2');
    const temperature = document.createElement('h3');
    const icon = document.createElement('div');
    const dataDiv = document.createElement('div');
    const dateText = dateFormatter(forecast.dt);

    container.className = 'forecast-container';
    date.className = 'forecast-date';
    temperature.className = 'forecast-temperature';
    icon.className = 'forecast-icon';
    dataDiv.className = 'forecast-data';

    date.textContent = dateText;
    temperature.textContent = `${Math.round(forecast.main.temp)} ºC`;
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png">`;

    container.appendChild(dataDiv);
    container.appendChild(icon);
    dataDiv.appendChild(date);
    dataDiv.appendChild(temperature);

    return container;
}