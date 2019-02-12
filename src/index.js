import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Bar from './Bar/bar';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
let obj = [
    {text: 'PM 2.5' ,html : 'https://www.google.com/', key: 1},
    {text: 'Gold' ,html : 'https://www.facebook.com/', key: 2},
];
const Home = () => <h1>Home</h1>
const Home1 = ()=> <h1>/Home</h1>
const Browser = () =>(
    <Router>
        <Bar />
    </Router>
)
ReactDOM.render(<Browser />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
