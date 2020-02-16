export const getFormattedDate = sec => {
  const date = new Date(sec * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return minutes < 9 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;
};

export const getTranslatedDescription = description => {
  const weatherDescriptionDictionary = {
    clear: 'Чистое небо',
    'few clouds': 'Мало облаков',
    'scattered clouds': 'Рассеянные облака',
    'broken clouds': 'Облачность',
    'shower rain': 'Град',
    rain: 'Дождь',
    thunderstorm: 'Гроза',
    snow: 'Снег',
    mist: 'Туман',
    clouds: 'Облачно',
  };
  const descriptionTranslated = weatherDescriptionDictionary[description.toLowerCase()];

  return descriptionTranslated || description;
};

export const convertSecToDay = sec => {
  const daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const time = new Date(sec * 1000);

  return `${daysWeek[time.getDay()]}`;
};

export const getImageUrl = imageCode => `http://openweathermap.org/img/w/${imageCode}.png`;

export const getShortTownName = townName =>
  townName.length > 14
    ? `${townName
        .split('')
        .splice(0, 10)
        .join('')}...`
    : townName;
