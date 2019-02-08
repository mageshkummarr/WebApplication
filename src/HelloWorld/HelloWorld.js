import React, { Component } from 'react'
import './HelloWorld.css'

class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.main = this.main.bind(this);
        this.state = {
            text : '',
            i : 0
        }
    }
    main(){
        if(this.state.i === 0){
            this.setState(function(prevState){
                return{
                    text : 'Hello'
                }
            });
        }else{
            this.setState(function(prevState){
                return{
                    text : 'Welcome'
                }
            });
        }
    }
    render(){
        return(
            <div className='HelloWorld'>
                <button onClick={this.main}>Click !</button>
                <h2>{this.state.text} Sittichot</h2>
            </div>
        )
    }
}

export default HelloWorld