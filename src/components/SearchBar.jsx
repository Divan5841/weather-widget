import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import '../style/SearchBar.css';
import searchGray from '../img/searchGray.png';
import { handleTownName } from '../store/townWeather/actions';

const SearchBarComponent = ({ inputTownName, handleTownName, requestByTownName }) => {
  const textInput = useRef();

  const handleChange = ({ target: { value } }) => handleTownName(value);

  const handleClick = () => requestByTownName(inputTownName);

  const handleEnterKeyUp = ({ key }) => {
    if (key === 'Enter') {
      requestByTownName(inputTownName);
    }
  };

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <div className="SearchBar">
      <input
        ref={textInput}
        type="text"
        placeholder="введите название города"
        className="SearchInput"
        onChange={handleChange}
        onKeyUp={handleEnterKeyUp}
      />
      <div className="imgSearchBox" onClick={handleClick}>
        <img src={searchGray} alt="search" />
      </div>
    </div>
  );
};

const mapStateToProps = ({ townWeather: { inputTownName } }) => {
  return { inputTownName };
};

const mapDispatchToProps = { handleTownName };

export const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
