import './../App.css';
import React, {Component} from "react";


// 父子组件传递信息，联动示例
export default class TestOneChild extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            drawerData:""
        }
    }

    changeValue=()=> {
        var con = false;
        if (!this.state.visible) {
            con = true;
            this.setState({
                visible: con
            })
        }

        if (this.state.visible) {
            con = false;
            this.setState({
                visible: con
            })
        }
        this.handleChildMes(con);
    };


    handleChildMes=(data)=>{
        this.props.getMesage(data);
    }



    render(){
        return(
            <div>
                <ul>
                    <li><a>父组件说：{this.props.text}</a></li>
                    <li> <a onClick={this.changeValue}>这个是点击传回去的值true：{this.state.visible.toString()}</a></li>
                    <li> <a onClick={this.change}>重置按钮：重置后的值{this.state.visible.toString()}</a></li>
                </ul>
            </div>

        )
    }



}