import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

ReactDOM.render(
    <Nav />,
    document.getElementById('site-nav')
);

registerServiceWorker();
