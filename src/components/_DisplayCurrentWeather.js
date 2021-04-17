import dateFormatter from './_DateFormatter';
import timeFormatter from './_TimeFormatter';

export default function displayCurrentWeather(weather) {
    const images = {
        clear: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80',
        clouds: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        rain: 'https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        thunderstorm: 'https://images.unsplash.com/photo-1597075490504-8832142f85cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        drizzle: 'https://images.unsplash.com/photo-1505404919723-002ecad81b92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        snow: 'https://images.unsplash.com/photo-1593435713463-e8bf5bea9786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
        mist: 'https://images.unsplash.com/photo-1512798738109-af8814836728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    };

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

    switch(weather.weather[0].main) {
        case "Clear":
            document.body.background = `${images.clear}`;
            break;
        case "Clouds":
            document.body.background = `${images.clouds}`;
            break;
        case "Rain":
            document.body.background = `${images.rain}`;
            break;
        case "Thunderstorm":
            document.body.background = `${images.thunderstorm}`
            break;
        case "Drizzle":
            document.body.background = `${images.drizzle}`;
            break;
        case "Snow":
            document.body.background = `${images.snow}`;
            break;
        default:
            document.body.background = `${images.mist}`
    }
}