import React from 'react';
import '../Style/InfoBox.css';
import {InfoTown} from './InfoTown';
import {InfoWeek} from './InfoWeek';

export const InfoBox = () => {
    return (
        <div className='infoBox'>
            <InfoTown/>
            <InfoWeek/>
        </div>
    )
};

