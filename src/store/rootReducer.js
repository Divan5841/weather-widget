import { combineReducers } from 'redux';

import { townWeather } from './townWeather/reducer';

export const rootReducer = () => combineReducers({ townWeather });
