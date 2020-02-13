export const convertKelvinToCelsius = (kelvin) => {
    if (kelvin < (0)) {
        return 'below absolute zero (0 K)';
    } else {
        return (Math.round(kelvin - 273.15));
    }
};

export const convertToTime = (gotSec) => {
    const time = new Date(gotSec * 1000);
    if (time.getMinutes() < 9) {
        return (`${time.getHours()}:0${time.getMinutes()}`)
    } else {
        return (`${time.getHours()}:${time.getMinutes()}`)
    }
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

export const convertToDay = (gotSec) => {
    const daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const time = new Date(gotSec * 1000);
    return (`${daysWeek[time.getDay()]}`);
};

export const convertToUrlImg = (img) => {
    return (`http://openweathermap.org/img/w/${img}.png`)
};



