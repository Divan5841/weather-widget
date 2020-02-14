import React from 'react';
import '../Style/MainBox.css';
import {InfoBox} from './InfoBox';
import {WelcomBar} from './WelcomBar';
import SearchBar from "./SearchBar";
import {Loader} from './Loader';
import {Error} from "./Error";

class MainBox extends React.Component {
    state = {
        request: {
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily',
            key: 'dc963d586e747302682e9144d2ec250c',
        },
        // nameTown: '',
        showWelcomBar: true,
        showLoader: false,
        showErrorBox: false,
        showInfoBox: false,
        errorMessage: '',
        controller: new AbortController(),
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

    requestWeather = () => {
        this.setState({showLoader: true});
        fetch(`${this.state.request.url}?` + this.state.urlParams, {signal: this.state.controller.signal})
            .then(response => response.json())
            .then(data => {
                this.setData(data);
                this.setState({showLoader: false, showInfoBox: true});
            })
            .catch(error => {
                this.setState({showLoader: false});
                if (error.name === 'AbortError')
                    this.displayError('Поиск отменен');
                else if (error.name === 'TypeError')
                    this.displayError(`Город ${this.state.nameTown} не найден`);
                else
                    throw error;
            })
    };

    pressEscape = (event) => {
        if (event.key === 'Escape') {
            this.hideError();
        }
    };

    abortRequest = () => {
        this.state.controller.abort();
        this.setState({controller: new AbortController(), showLoader: false});
    };

    displayError = (errorMessage) => {
        this.setState({errorMessage, showErrorBox: !this.state.showErrorBox});
    };

    hideError = () => {
        this.setState({showErrorBox: !this.state.showErrorBox});
    };

    startGeoRequest = (pos) => {
        this.setState({
            urlParams: new URLSearchParams({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                mode: 'json',
                appid: this.state.request.key,
            })
        }, () => this.requestWeather());
    };

    simpleRequest = (nameTown) => {
        if (nameTown === '') {
            this.displayError('Вы не ввели название города');
        } else {

            this.setState({
                urlParams: new URLSearchParams({
                    q: nameTown,
                    mode: 'json',
                    appid: this.state.request.key,
                }), nameTown
            }, () => this.requestWeather());
        }
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.startGeoRequest);
        document.addEventListener("keyup", this.pressEscape, false);
    };

    render() {
        return (
            <div className='mainBox'>
                {this.state.showWelcomBar ?
                    <WelcomBar
                        hideWelcomBar={() => this.setState({showWelcomBar: !this.state.showWelcomBar})}
                    /> :
                    <>
                        {this.state.showLoader ?
                            <Loader
                                abortRequest={this.abortRequest}
                            />
                            : this.state.showErrorBox ?
                                <Error
                                    errorMessage={this.state.errorMessage}
                                    hideError={this.hideError}
                                /> :
                                <SearchBar
                                    simpleRequest={this.simpleRequest}
                                />}
                        {this.state.showInfoBox ?
                            <InfoBox data={this.state.data}
                            /> : null
                        }
                    </>
                }
            </div>
        )
    }

}

export default MainBox;