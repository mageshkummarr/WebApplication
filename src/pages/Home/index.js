import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
export default () => (
    <h1>Hello World</h1>
)
serviceWorker.unregister();