import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import PM2dot5 from '../../pages/PM2dot5/index'
import './Bar.css'
const navBar = 
    <>
        <Link to='/'>Home</Link>
        <Link to='/PM2.5'>PM 2.5</Link>
        <Link to='/Gold'>Gold</Link>

        <Route path='/' component={PM2dot5} />
        <Route path='/PM2.5' component={PM2dot5} />
        {/* <Route path='/' Component={} /> */}
    </>;
const Home  = () => (
    <h1>
        Hello World
    </h1>
);
class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            <div>
                {navBar}
            </div>
        );
    }
}
export default Bar;