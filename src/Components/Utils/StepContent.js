import {Component} from "react";
import {Drawer, Image} from 'antd';
import {Button} from "antd";
import React from "react";
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';
import Request from '../../service/request';
import ImgUtils from './ComSource'
import axios from "axios";
import imgSY from "../../resources/images/硬核/已知死亡/宋羽/宋羽_ (1).jpg";
import imgLYY from "../../resources/images/硬核/已知死亡/林妍妍/林妍妍_ (1).jpg";
import imgFYY from "../../resources/images/硬核/已知死亡/方雅云/方雅云_ (1).jpg";

export default class StepContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            roleID:0,
            current:0,
            roleImge:[
                <div style={{float: 'left'}} key='VimgSY'>
                <Image key='VimgSY'
                    width={200}
                    src={imgSY}
            /></div>,
                <div style={{float: 'left'}} key='VimgLYY'>
                    <Image key='VimgLYY'
                    width={200}
                    src={imgLYY}
            /></div>,

                <div style={{float: 'left'}} key='VimgFYY'>
                    <Image key='VimgFYY'
                    width={200}
                    src={imgFYY}
            /></div>]
        }
    }

    componentDidMount(){
        // //通用写法
        // axios.get("/store/roleInfo",{
        //     params:{
        //         roleID:"1102"
        //     }
        // })
        //     .then(res =>res.data)
        //     .then(data=>{
        //         console.log("接受到的消息是："+data);
        //     })



    }

    /** 选择角色 */
    chooseRadm = () => {
                             /** max-min+1 **/
        var num = Math.floor(Math.random()*3)+1;
        var sNum = 0;
        var eNum = 0;
        if(num ===1){
            eNum = 1;
        }else{
            sNum = num-1;
            eNum = num-1;
        }
        let content = this.state.roleImge.concat();
        let data1 = content.splice(sNum,eNum);
        this.setState({
            roleImge:[...data1]
        })
    };




    render(){
        return(
            <div style={{ fontSize: 27,color: 'dodgerblue'}}>
                <Texty type={'mask-bottom'} mode={'random'} >请先确认自己的身份</Texty>
                <Button onClick={this.chooseRadm} ghost type="primary" shape="round"  size='large'>
                    开始随机
                </Button>
                <QueueAnim component ='div' delay={300} type={['right', 'left']} leaveReverse>
                    {
                        this.state.roleImge.map((item)=>{
                            return(
                                item
                            )
                        })
                    }
                </QueueAnim>
            </div>

        )
    }


}