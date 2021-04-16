export default function timeFormatter(seconds) {
    const date = new Date(0);
    date.setUTCSeconds(seconds);

    return `${date.getHours()}:${date.getMinutes()}`
}