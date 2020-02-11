function getClock(gotSec) {
    const time = new Date(gotSec * 1000);
    return (`${time.getHours()}:${time.getMinutes()}`)
}

function getDay(gotSec) {
    const daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const time = new Date(gotSec * 1000);
    return (`${daysWeek[time.getDay()]}`);
}

function convertKelvinToCelsius(kelvin) {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (kelvin - 273.15);
    }
}

function translateDesc(desc) {
    const descRu = {
        'clear': 'Чистое небо',
        'few clouds': 'Мало облаков',
        'scattered clouds': 'Рассеянные облака',
        'broken clouds': 'Облачность',
        'shower rain': 'Град',
        'rain': 'Дождь',
        'thunderstorm': 'Гроза',
        'snow': 'Снег',
        'mist': 'Туман',
    };
    if (descRu[desc.toLowerCase()] !== undefined)
        return descRu[desc.toLowerCase()];
    else
        return desc
}