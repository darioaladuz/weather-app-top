export default function filterForecast(object) {
    const arr = object.list.filter(item => item.dt_txt.split(' ')[1] === object.list[0].dt_txt.split(' ')[1])
    return arr;
}