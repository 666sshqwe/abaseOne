import {Component} from "react";
import {Spin, Image} from 'antd';
import {Button} from "antd";
import React from "react";
import Texty from 'rc-texty';
import QueueAnim from 'rc-queue-anim';
import axios from "axios";

export default class StepContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            roleID:0,
            current:0,
            roleInfo:[],
            sessionId:"",
            storySession:{}
        }
    }

    componentDidMount(){
        var param  = window.location.href.split("?")[1].split("=")[1];
        this.setState({
            sessionId:param
        });

        // 还需要判断，当前用户是否在该场次中了，如果已经在了，直接跳过第一步，在准备界面中
        // 获取场次信息,获得所有角色图片
        axios.get("/store/getSessions",{
            params:{
                sessionId:param
            }
        })
            .then(res =>res.data)
            .then(data=>{
                  this.setState({
                      roleInfo:[...data.roleInfo],
                      storySession:data.storySession
                })
            });

    }

    /** 选择角色 */
    chooseRadm = () => {
        var userId = this.state.sessionId;
        console.info("userId is "+userId);
        /** max-min+1 **/
        var num = Math.floor(Math.random()*3)+1;
        var sNum = 0;
        var eNum = 0;
        if(num ===1){
            eNum = 1;
        }else{
            sNum = num-1;
            eNum = num;
        }
        let content = this.state.roleInfo.concat();
        let data1 = content.splice(sNum,eNum);
        this.setState({
            roleInfo:[...data1]
        })
    };




    render(){
        return(
            <div style={{ fontSize: 27,color: 'dodgerblue',overflow :"auto"}}>
                <Texty type={'mask-bottom'} mode={'random'} >请先确认自己的身份</Texty>
                <Button onClick={this.chooseRadm} ghost type="primary" shape="round"  size='large'>
                    开始随机
                </Button>
                <QueueAnim component ='div' delay={300} type={['right']} leaveReverse>
                    {
                        this.state.roleInfo.map((item)=>{
                            return(
                                <div  style={{width: 225,float: 'left', margin: '0px 10px 18px 0px'}} key={item.id}>
                                        <Image key={item.id}
                                               width={200}
                                               src={item.roleImage}
                                        />
                                </div>
                            )
                        })
                    }
                </QueueAnim>

            </div>

        )
    }


}
