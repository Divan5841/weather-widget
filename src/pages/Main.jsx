import React from 'react';
import { getShortTownName } from '../utils/helpers';
import { Error, InfoBox, Loader, SearchBar, WelcomeBar } from '../components';
import '../style/Main.css';

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
const API_KEY = 'dc963d586e747302682e9144d2ec250c';

const defaultParams = {
  mode: 'json',
  appid: API_KEY,
  units: 'metric',
};

export class Main extends React.Component {
  state = {
    isWelcomeBarShow: true,
    isSearchBarShow: false,
    isLoaderShow: false,
    isInfoBoxShow: false,
    errorMessage: null,
    controller: new AbortController(),
  };

  setData = ({ city: { name }, list }) => {
    const data = {
      name,
      temp: list[0].temp.day,
      desc: list[0].weather[0].main,
      sunrise: list[0].sunrise,
      sunset: list[0].sunset,
      week: list.map(({ dt, temp: { min, max }, weather }) => ({
        date: dt,
        minTemp: min,
        maxTemp: max,
        img: weather[0].icon,
      })),
    };

    this.setState({ data });
  };

  requestWeather = () => {
    const {
      urlParams,
      controller: { signal },
    } = this.state;

    this.setState({ isLoaderShow: true, isSearchBarShow: false });

    fetch(`${API_URL}?${urlParams}`, {
      signal,
    })
      .then(response => response.json())
      .then(data => {
        this.setData(data);

        this.setState({ isLoaderShow: false, isInfoBoxShow: true, isSearchBarShow: true });
      })
      .catch(error => {
        this.setState({ isLoaderShow: false });
        const townName = urlParams.get('q');
        const shortTownName = getShortTownName(townName);
        const errorName = error.name;

        if (errorName === 'AbortError') {
          this.toggleError('Поиск отменен');
          return;
        }

        if (errorName === 'TypeError') {
          this.toggleError(`Город ${shortTownName} не найден`);
          return;
        }

        throw error;
      });
  };

  handleKeyUp = ({ key }) => {
    if (key === 'Escape') {
      this.toggleError();
    }
  };

  abortRequest = () => {
    this.state.controller.abort();
    this.setState({
      controller: new AbortController(),
      isLoaderShow: false,
      isSearchBarShow: true,
    });
  };

  toggleError = errorMessage =>
    errorMessage
      ? this.setState({ errorMessage, isSearchBarShow: false })
      : this.setState({ errorMessage: null, isSearchBarShow: true });

  requestByCoords = ({ coords: { latitude, longitude } }) => {
    this.setState(
      {
        urlParams: new URLSearchParams({
          ...defaultParams,
          lat: latitude,
          lon: longitude,
        }),
      },
      () => this.requestWeather(),
    );
  };

  requestByTownName = townName => {
    if (townName) {
      this.setState(
        {
          urlParams: new URLSearchParams({
            ...defaultParams,
            q: townName,
          }),
        },
        () => this.requestWeather(),
      );
    } else {
      this.toggleError('Вы не ввели название города');
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.requestByCoords);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const {
      isWelcomeBarShow,
      isSearchBarShow,
      isLoaderShow,
      isInfoBoxShow,
      errorMessage,
      data,
    } = this.state;

    if (isWelcomeBarShow) {
      return (
        <div className="mainBox">
          <WelcomeBar
            hideWelcomeBar={() => this.setState({ isWelcomeBarShow: false, isSearchBarShow: true })}
          />
        </div>
      );
    }

    return (
      <div className="mainBox">
        {isSearchBarShow && <SearchBar simpleRequest={this.requestByTownName}
        />}
        {isLoaderShow && <Loader abortRequest={this.abortRequest} />}
        <Error errorMessage={errorMessage} hideError={this.toggleError} />
        {isInfoBoxShow && <InfoBox data={data} />}
      </div>
    );
  }
}
