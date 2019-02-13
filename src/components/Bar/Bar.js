import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './Bar.css'
class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            html : <>
                <a href='https:\\www.google.com'>google</a>
            </>
        };
    }
    render(){
        return (
            <div>

            </div>
        );
    }
}
export default Bar;