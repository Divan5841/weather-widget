import React from 'react';
import '../style/Error.css';
import imgClose from '../img/closeGray.png';

export const Error = ({ errorMessage, hideError }) => {
  if (!errorMessage) return null;

  return (
    <div className="errorBox">
      <div className="errorDiv">
        <p>{errorMessage}</p>
      </div>
      <div className="imgCloseBox" onClick={() => hideError()}>
        <img src={imgClose} alt="close" />
      </div>
    </div>
  );
};
