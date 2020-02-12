import React from "react";
import '../Style/InfoDay.css';

export const InfoDay = (props) => (
    <div>
        <p>{props.day.date}</p>
        <p>{props.day.minTemp}</p>
        <p>{props.day.maxTemp}</p>
        <p>{props.day.img}</p>
    </div>
);