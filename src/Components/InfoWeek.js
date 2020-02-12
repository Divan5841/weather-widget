import React from 'react';
import {InfoDay} from './InfoDay';
import '../Style/InfoWeek.css';

export const InfoWeek = (props) => (
    <div className='infoWeek mainStyle'>
        {props.week.map((day, index) => (
        <InfoDay key={index} day={day}
        />))}
    </div>
);