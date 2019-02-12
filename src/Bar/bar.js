import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './bar.css'
const Home = () => <h1>Home</h1>
const Home1 = ()=> <h1>/Home</h1>
export default class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            html: []
        };
    }
    componentWillMount(){

    }
    componentDidMount(){
        // this.createBar();
        // console.log(JSON.stringify(this.state.html));
    }
    toComponent(text){

    }
    createBar(){
        console.log('Create Bar');
        this.setState({
            html: <>{this.props.item.map((e)=>(
                <Route path='/HelloWorld' key={e.key} Component={Home} />
                // <a href={e.html} key={e.key}>{e.text}</a>
            ))}</>
        });
        // console.log(this.props.item);
    }
    render(){
        console.log(this.state.html);
        return (
            <div className='Bar'>
                <Route exact path='/' component={Home}/>
                <Route path='/Home' component = {Home1}/>
            </div>
        );
    }
}