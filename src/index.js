import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
