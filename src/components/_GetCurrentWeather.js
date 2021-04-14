export default async function getCurrentWeather(city) {
    console.log('hello');
    const endpoint = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5a039a4782b0f61f2e8b397c0b32ffb8`);
    const json = await endpoint.json();
    
    return json;
}

