import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import BrosPage from './components/bros/BrosPage';
import BroPage from './components/bros/BroPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/bros" component={BrosPage} />
    </Route>
);