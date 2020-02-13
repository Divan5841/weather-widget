import React from "react";
import '../Style/InfoDay.css';
import {convertToDay, convertKelvinToCelsius, convertToUrlImg} from "../Utils/Helpers";

export const InfoDay = (props) => (
    <div className='containerDay'>
        <p>{convertToDay(props.day.date)}</p>
        <p>мин: {convertKelvinToCelsius(props.day.minTemp)+ String.fromCharCode(0x00B0)}</p>
        <p>макс: {convertKelvinToCelsius(props.day.maxTemp)+ String.fromCharCode(0x00B0)}</p>
        <img src={convertToUrlImg(props.day.img)} alt="img"/>
    </div>
);