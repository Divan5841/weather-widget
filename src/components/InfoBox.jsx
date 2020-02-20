import React from 'react';

import '../style/InfoBox.css';
import { InfoTown } from './InfoTown';
import { InfoWeek } from './InfoWeek';

export const InfoBox = () => (
  <div className="infoBox">
    <InfoTown />
    <InfoWeek />
  </div>
);
