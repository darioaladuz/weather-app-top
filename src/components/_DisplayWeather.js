import getCurrentWeather from './_GetCurrentWeather';
import getWeekWeather from './_GetWeekWeather';
import currentWeatherUI from './_CurrentWeatherUI';
import displayCurrentWeather from './_DisplayCurrentWeather';
import displayDailyForecast from './_DisplayDailyForecast';

export default function displayWeather() {
    const input = document.querySelector('input');
    const form = document.querySelector('form');

    // function display(weather) {
    //     const h1 = document.querySelector('h1');
    //     h1.textContent = `Current temperature in ${weather.name} is : ${weather.main.temp} ºC`
    // }

    async function getFullWeather(city) {
        const weather = await getCurrentWeather(city);
        const weekWeather = await getWeekWeather(city);
        
        console.log(weather);
        console.log(weekWeather);
        // setTimeout(display(weather), 0);
        setTimeout(displayCurrentWeather(weather), 0);
        setTimeout(displayDailyForecast(weekWeather), 0);
}

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = input.value;
        getFullWeather(city);
        input.value = "";
    })

    getFullWeather('barcelona');
}

/* 
Stuff to do:
***1: find out how to use the API to get weekly forecast.
***2: use the icons for weather
***3: display sunrise and sunset times using the formula found on stackoverflow & `${d.getHours}:${d.getMinutes}`
***4: style that motherfucker and give it as many possibilities as possible (lmao)
*/