import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from '../Bar/bar';
import HelloWorld from '../HelloWorld/HelloWorld'
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let obj = [
      {text: 'PM 2.5' ,html : 'https://www.google.com/', key: 1},
      {text: 'Gold' ,html : 'https://www.facebook.com/', key: 2},
  ];
    return (
      <div className="App">
        <HelloWorld>
          <Bar item={obj}></Bar>
        </HelloWorld>
      </div>
    );
  }
}

export default App;
