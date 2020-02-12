export const convertKelvinToCelsius = (kelvin) => {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (Math.round(kelvin - 273.15));
    }
};

export const convertToClock = (gotSec) => {
    const time = new Date(gotSec * 1000);
    return (`${time.getHours()}:${time.getMinutes()}`)
};

export const translateDesc = (desc) => {
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
        'clouds': 'Облачно',
    };
    if (descRu[desc.toLowerCase()] !== undefined)
        return descRu[desc.toLowerCase()];
    else
        return desc
};


// function getDay(gotSec) {
//     const daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
//     const time = new Date(gotSec * 1000);
//     return (`${daysWeek[time.getDay()]}`);
// }
//
//
//

