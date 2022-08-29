
import './../App.css';
import React, {Component} from "react";
import TestOneChild from './TestOneChild'

export default class TestOneParent extends Component{
    state = {
        parentText:"卡比兽最强",
        childMessage:false
    };

    getChildMesg=(data)=>{
        console.log("子组件传递过来的值",data)
        this.setState({
            childMessage:data
        })

    };


    render() {
        return (
            <div className="App">
                <TestOneChild text = {this.state.parentText} getMesage = {this.getChildMesg}/>
                <h2>子不服，说：{this.state.childMessage?"皮卡丘yyds":"卡比兽最强"}</h2>
            </div>
        );
    }
}
