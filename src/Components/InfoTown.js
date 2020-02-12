import React from 'react';
import '../Style/InfoTown.css';
import {convertToClock, convertKelvinToCelsius, translateDesc} from "../Utils/Helpers";

export const InfoTown = (props) => (
    <div className='infoTown mainStyle'>
        <div className='containerTown'>
            <h1>{props.data.name}</h1>
            <h1>{convertKelvinToCelsius(props.data.temp) + String.fromCharCode(0x00B0)}</h1>
        </div>
        <div className="containerInfo">
            <p>{translateDesc(props.data.desc)}</p>
            <p>восход: {convertToClock(props.data.sunrise)}</p>
            <p>закат: {convertToClock(props.data.sunset)}</p>
        </div>
    </div>
);