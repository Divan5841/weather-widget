import React from 'react';
import '../style/InfoDay.css';
import { convertSecToDay, getImageUrl } from '../utils/helpers';

export const InfoDay = ({ day: { minTemp, maxTemp, date, img } }) => {
  const celsiusSymbol = String.fromCharCode(0x00b0);
  const minTempRounded = `${Math.round(minTemp)}${celsiusSymbol}`;
  const maxTempRounded = `${Math.round(maxTemp)}${celsiusSymbol}`;

  return (
    <div className="containerDay">
      <p>{convertSecToDay(date)}</p>
      <p>мин: {minTempRounded}</p>
      <p>макс: {maxTempRounded}</p>
      <img src={getImageUrl(img)} alt="img" />
    </div>
  );
};
