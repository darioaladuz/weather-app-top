import forecastUI from './_ForecastUI';
import filterForecast from './_FilterForecast';

export default function displayDailyForecast(forecast) {
    console.log(forecast);
    const dailyForecast = document.querySelector('.daily-forecast');
    const days = filterForecast(forecast);
    console.log(days);
    dailyForecast.innerHTML = '';

    days.forEach(day => {
        console.log(day);
        const dayForecast = forecastUI(day);
        dayForecast.className = 'day-forecast';
        dailyForecast.appendChild(dayForecast);
    })
}