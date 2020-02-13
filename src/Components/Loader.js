import React from "react";
import '../Style/Loader.css';
import imgClose from "../Img/closeGray.png";

export const Loader = (props) => {
    return (
        <div className='loaderBox'>
            <div className='loaderDiv'>
                <div></div>
                <p>Уточняем погоду...</p>
            </div>
            <div className='imgCloseBox'
                onClick={props.abortRequest}
            >
                <img src={imgClose} alt="close"/>
            </div>
        </div>
    )
};