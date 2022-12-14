import React,{Component} from 'react';

export default class TimeUtils extends Component{
    constructor(props){
        super(props);
        this.state = {date : new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <h2>现在是:{this.state.date.toLocaleTimeString()}</h2>
        )
    }

}