import React from 'react';
import '../Style/InfoBox.css';
import {InfoTown} from './InfoTown';
import {InfoWeek} from './InfoWeek';

export const InfoBox = (props) => {
    return (
        <div className='infoBox'>
            <InfoTown data={props.data}/>
            <InfoWeek week={props.data.week}/>
        </div>
    )
};

