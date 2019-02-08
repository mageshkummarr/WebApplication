import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App/App';
import HelloWorld from './HelloWorld/HelloWorld';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld />, document.getElementById('hello'));
function tick(){
    ReactDOM.render(<HelloWorld />, document.getElementById('hello'));
}

setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
