import React from "react";
import "../Style/WelcomBar.css";
import sunRevers from '../Img/sunRevers.png';

export const WelcomBar = (props) => {


    return (
        <div className={props.welcomBarClasses.join(' ')}
             onClick={props.onChangeBar}>
            <div className='imgSunBox'>
                <img src={sunRevers} alt="sun"/>
            </div>
        </div>
    )
};

