export default function dateFormatter(seconds) {
    const date = new Date(0);
    date.setUTCSeconds(seconds);
    
    const splitDate = date.toDateString().split(' ');

    return `${splitDate[0]}, ${splitDate[2]}`
}