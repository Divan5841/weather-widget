import { createReducer } from 'redux-act';

import { setData, handleTownName } from './actions';

export const townWeather = createReducer(
  {
    [setData]: (state, { city: { name }, list }) => {
      return {
        ...state,
        name,
        temp: list[0].temp.day,
        desc: list[0].weather[0].main,
        sunrise: list[0].sunrise,
        sunset: list[0].sunset,
        week: list.map(({ dt, temp: { min, max }, weather }) => ({
          date: dt,
          minTemp: min,
          maxTemp: max,
          img: weather[0].icon,
        })),
      };
    },
    [handleTownName]: (state, payload) => {
      return { ...state, inputTownName: payload };
    },
  },
  {},
);
