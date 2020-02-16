import React from 'react';
import { InfoDay } from './InfoDay';
import '../style/InfoWeek.css';

export const InfoWeek = ({ week }) => (
  <div className="infoWeek mainStyle">
    {week.map((day, index) => (
      <InfoDay key={index} day={day} />
    ))}
  </div>
);
