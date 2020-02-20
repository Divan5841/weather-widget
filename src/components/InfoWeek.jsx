import React from 'react';
import { connect } from 'react-redux';

import { InfoDay } from './InfoDay';
import '../style/InfoWeek.css';

const InfoWeekComponent = ({ week }) => (
  <div className="infoWeek mainStyle">
    {week.map((day, index) => (
      <InfoDay key={index} day={day} />
    ))}
  </div>
);

const mapSateToProps = ({ townWeather: { week } }) => {
  return { week };
};

export const InfoWeek = connect(mapSateToProps)(InfoWeekComponent);
