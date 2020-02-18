import React from 'react';
import '../style/SearchBar.css';
import searchGray from '../img/searchGray.png';

export class SearchBar extends React.Component {
  state = {
    input: '',
  };

  handleEnterKeyUp = ({ key }) => {
    if (key === 'Enter') {
      this.props.simpleRequest(this.state.input);
    }
  };

  handleChange = ({ target: { value } }) => this.setState({ input: value });

  handleClick = () => this.props.simpleRequest(this.state.input);

  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          ref={inputRef => (this.inputRef = inputRef)}
          type="text"
          placeholder="введите название города"
          className="SearchInput"
          onChange={this.handleChange}
          onKeyUp={this.handleEnterKeyUp}
        />
        <div className="imgSearchBox" onClick={this.handleClick}>
          <img src={searchGray} alt="search" />
        </div>
      </div>
    );
  }
}
