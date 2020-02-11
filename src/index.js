import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import MainBox from './Components/MainBox';
import './index.css';

ReactDOM.render(
    <MainBox/>,
    document.getElementById('root')
);

serviceWorker.unregister();
