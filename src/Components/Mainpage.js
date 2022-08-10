import logo from './../logo.svg';
import './../App.css';
import React, {Component} from "react";
import Clock from './../Components/TimeUtils'


export default class Mainpage extends Component{
    state = {
        parentText:"卡比兽最强",
        childMessage:false
    }

    getChildMesg=(data)=>{
     console.log("子组件传递过来的值",data)
        this.setState({
            childMessage:data
        })

    }


    render() {
        return (
            <div className="App">
                <h1>欢迎欢迎~~~~</h1>
            </div>
        );
    }
}
