import React from "react";
import '../Style/SearchBar.css';
import searchGray from '../Img/searchGray.png';

class SearchBar extends React.Component {
    state = {
        input: '',
    };

    pressEnterInput = (key) => {
        if (key === 'Enter') {
            this.props.requestWeather(this.state.input);
        }
    };

    render() {
        return (
            <div className='SearchBar'>
                <input type="text" placeholder='ПОИСК' className='SearchInput'
                onChange={(event) => this.setState({input: event.target.value})}
                onKeyUp={(event) => this.pressEnterInput(event.key)}
                />
                <div className='imgSearchBox'
                     onClick={() => this.props.requestWeather(this.state.input)}>
                    <img src={searchGray} alt="search"/>
                </div>
            </div>
        )
    }
}

export default SearchBar;