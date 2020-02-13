import React from "react";
import '../Style/Error.css';
import imgClose from "../Img/closeGray.png";


export const Error = (props) => {
    return (
        <div className='errorBox'>
            <div className='errorDiv'>
                <p>{props.errorMessage}</p>
            </div>
            <div className='imgCloseBox'
                 onClick={props.hideError}
            >
                <img src={imgClose} alt="close"/>
            </div>
        </div>
    )
};