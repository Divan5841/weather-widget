import React from 'react';
import { connect } from 'react-redux';

import '../style/InfoTown.css';
import { getFormattedDate, getTranslatedDescription } from '../utils/helpers';

const InfoTownComponent = ({ townWeather: { name, temp, desc, sunrise, sunset } }) => {
  const celsiusSymbol = String.fromCharCode(0x00b0);
  const tempFormatted = `${Math.round(temp)}${celsiusSymbol}`;
  const translatedDesc = getTranslatedDescription(desc);
  const formattedSunrise = getFormattedDate(sunrise);
  const formattedSunset = getFormattedDate(sunset);

  return (
    <div className="infoTown mainStyle">
      <div className="containerTown">
        <h1>{name}</h1>
        <h1>{tempFormatted}</h1>
      </div>
      <div className="containerInfo">
        <p>{translatedDesc}</p>
        <p>восход: {formattedSunrise}</p>
        <p>закат: {formattedSunset}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ townWeather }) => {
  return { townWeather };
};

export const InfoTown = connect(mapStateToProps)(InfoTownComponent);
