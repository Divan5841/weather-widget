import React from 'react';
import '../style/Loader.css';
import imgClose from '../img/closeGray.png';

export const Loader = ({ abortRequest }) => (
  <div className="loaderBox">
    <div className="loaderDiv">
      <div />
      <p>Уточняем погоду...</p>
    </div>
    <div className="imgCloseBox" onClick={abortRequest}>
      <img src={imgClose} alt="close" />
    </div>
  </div>
);
