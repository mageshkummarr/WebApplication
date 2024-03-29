import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as BRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Bar from './components/Bar/Bar';
const Browser = () =>(
    <BRouter>
        <Bar />
    </BRouter>
)
ReactDOM.render(<Browser />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
