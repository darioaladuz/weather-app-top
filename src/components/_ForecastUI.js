export default function forecastUI() {
    const container = document.createElement('div');
    const date = document.createElement('h2');
    const temperature = document.createElement('h3');
    const icon = document.createElement('div');
    const dataDiv = document.createElement('div');

    container.className = 'forecast-container';
    date.className = 'forecast-date';
    temperature.className = 'forecast-temperature';
    icon.className = 'forecast-icon';
    dataDiv.className = 'forecast-data';

    container.appendChild(dataDiv);
    container.appendChild(icon);
    dataDiv.appendChild(date);
    dataDiv.appendChild(temperature);
}