import React, { Component } from 'react'
import './bar.css'
class Bar extends Component{
    constructor(props){
        super(props);
        this.state = {
            html: []
        };
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.createBar();
        console.log(JSON.stringify(this.state.html));
    }
    createBar(){
        console.log('Create Bar');
        this.setState({
            html: <>{this.props.item.map((e)=>(
                <a href={e.html} key={e.key}>{e.text}</a>
            ))}</>
        });
        console.log(this.props.item);
    }
    render(){
        return (
            <div className='Bar'>
                {this.state.html}
            </div>
        );
    }
}
export default Bar;