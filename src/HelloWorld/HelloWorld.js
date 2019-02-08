import React, { Component } from 'react'
import './HelloWorld.css'

class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.main = this.main.bind(this);
        this.changeState = this.changeState.bind(this);
        this.state = {
            text : '',
            i : 0,
        }
    }
    main(){
        if(this.state.i%2 === 0){
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
        this.setState(function(prevState){
            return{
                i : prevState.i + 1
            }
        })
    }
    changeState(paramKey, paramValue){
        console.log(paramKey + paramValue);
    }
    getClock() {
        return new Date().toLocaleString();    
        // return "DADWWW";
    }
    render(){
        return(
            <div className='HelloWorld'>
                {/* <button onClick={(e) => this.changeState(e, this.state.i+1)}>Click !</button> */}
                <h2>{this.state.text} Sittichot {this.state.i} Time : {this.getClock()}</h2>
            </div>
        )
    }
}

export default HelloWorld