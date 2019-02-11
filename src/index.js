import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import Bar from './Bar/bar';
import * as serviceWorker from './serviceWorker';
let obj = [
    {text: 'PM 2.5' ,html : 'https://www.google.com/', key: 1},
    {text: 'Gold' ,html : 'https://www.facebook.com/', key: 2},
];
ReactDOM.render(<Bar item = {obj}/>, document.getElementById('bar'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
