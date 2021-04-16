import dateFormatter from './_DateFormatter';
import timeFormatter from './_TimeFormatter';

export default function displayCurrentWeather(weather) {
    const location = document.querySelector('.location');
    const date = document.querySelector('.current-date');
    const temperature = document.querySelector('.current-temperature');
    const formattedDate = dateFormatter(weather.dt);

    const temperatureFeels = document.querySelector('.temperature-feels');
    const humidity = document.querySelector('.humidity');
    const sunrise = document.querySelector('.sunrise');
    const sunset = document.querySelector('.sunset');
    const formattedSunrise = timeFormatter(weather.sys.sunrise);
    const formattedSunset = timeFormatter(weather.sys.sunset);
    const currentWeather = document.querySelector('.weather-current');
    const icon = document.querySelector('.icon');

    location.textContent = weather.name;
    date.textContent = formattedDate;
    temperature.textContent = `${Math.round(weather.main.temp)} ºC`;
    temperatureFeels.textContent = `Feels like: ${Math.round(weather.main.feels_like)} ºC`;
    humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    sunrise.textContent = `Sunrise at: ${formattedSunrise}`;
    sunset.textContent = `Sunset at: ${formattedSunset}`;
    currentWeather.textContent = weather.weather[0].main;
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png">`;
}