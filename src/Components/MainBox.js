import React from 'react';
import '../Style/MainBox.css';
import {InfoBox} from './InfoBox';
import {WelcomBar} from './WelcomBar';
import SearchBar from "./SearchBar";

class MainBox extends React.Component {
    state = {
        request: {
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily',
            key: 'dc963d586e747302682e9144d2ec250c',
        },
        showWelcomBar: true,
        showInfoBox: false,
        welcomBarClasses: ['WelcomBar'],
    };

    setData = (response) => {
        const data = {
            name: response.city.name,
            temp: response.list[0].temp.day,
            desc: response.list[0].weather[0].main,
            sunrise: response.list[0].sunrise,
            sunset: response.list[0].sunset,
            week: response.list.map(({dt, temp: {min, max}, weather}) => ({
                    date: dt,
                    minTemp: min,
                    maxTemp: max,
                    img: weather[0].icon
                })
            )
        };
        this.setState({data});
    };

    displayData = () => {

    };

    requestWeather = (nameTown) => {
        fetch(`${this.state.request.url}?` + new URLSearchParams({
            q: nameTown,
            mode: 'json',
            appid: this.state.request.key
        }))
            .then(response => response.json())
            .then(data => {
                this.setData(data);
                this.setState({showInfoBox: true});
                this.displayData();
            })
    };


    render() {
        return (
            <div className='mainBox'>
                {this.state.showWelcomBar ?
                    <WelcomBar
                        welcomBarClasses={this.state.welcomBarClasses}
                        onChangeBar={this.onChangeBar}
                    /> : <>
                        <SearchBar requestWeather={this.requestWeather}
                        />
                        {this.state.showInfoBox ?
                            <InfoBox data={this.state.data}
                            /> : null
                        }
                    </>
                }
            </div>
        )
    }

    onChangeBar = () => {
        this.setState({welcomBarClasses: ['WelcomBar', 'WelcomBarAmin']});
        setTimeout(() => (this.setState({showWelcomBar: !this.state.showWelcomBar})), 500);
    };
}

export default MainBox;