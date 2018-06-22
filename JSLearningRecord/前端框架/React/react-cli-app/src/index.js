import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Router, Route, hashHistory } from 'react-router';
import routes from './routes'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('root'));
registerServiceWorker();
