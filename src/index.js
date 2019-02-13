import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Link, BrowserRouter as BRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Bar from './components/Bar/Bar';
let obj = [
    {text: 'PM 2.5' ,html : 'https://www.google.com/', key: 1},
    {text: 'Gold' ,html : 'https://www.facebook.com/', key: 2},
];
const Browser = () =>(
    <BRouter>

    </BRouter>
)
ReactDOM.render(<Bar />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
