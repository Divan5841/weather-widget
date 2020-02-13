import React from 'react';
import '../Style/InfoTown.css';
import {convertToTime, convertKelvinToCelsius, translateDesc} from "../Utils/Helpers";

export const InfoTown = (props) => (
    <div className='infoTown mainStyle'>
        <div className='containerTown'>
            <h1>{props.data.name}</h1>
            <h1>{convertKelvinToCelsius(props.data.temp) + String.fromCharCode(0x00B0)}</h1>
        </div>
        <div className="containerInfo">
            <p>{translateDesc(props.data.desc)}</p>
            <p>восход: {convertToTime(props.data.sunrise)}</p>
            <p>закат: {convertToTime(props.data.sunset)}</p>
        </div>
    </div>
);