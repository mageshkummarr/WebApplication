import React, { Component } from 'react'
import './HelloWorld.css'

class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : '',
            i : 0,
            date: new Date()
        };
    }
    componentDidMount(){
        console.log('componentDidMount is called');       
        // this.timeID = setInterval(
        //     () => this.tick(),1000
        // );
    }
    componentWillMount(){
        console.log('componentWillMount is called');
        // console.log(JSON.parse(this.state));
    }
    componentWillUnmount(){
        console.log('componentWillUnmount is called');
        clearInterval(this.timeID);
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps is called');
        console.log(nextProps);
    }
    componentDidCatch(){
        console.log('componentDidCatch is called');
    }
    componentWillUpdate(){
        console.log('componentWillUpdate is called');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is called');
    }
    tick(){
        // console.log(this.state.i);
        this.setState(function(prevState){
            return {
                // i : prevState.i + 1,
                date : new Date()
            }
        });
    }
    render(){
        return(
            <div className='HelloWorld'>
                {this.props.children}
            </div>
        )
    }
}

export default HelloWorld