import React, {Component} from 'react';
import './../../index.css';
import 'antd/dist/antd.min.css';
import Cards from "../Utils/Cards";
import {Button, Drawer, message} from "antd";
import {VideoCameraTwoTone} from "@ant-design/icons";
import axios from "axios";
import Step from '../Utils/StepsUtil'



export default class Teamming extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            sessions:[],
            visible:false
        }
    }

    componentDidMount(){
        axios.get("/paly/getSessions",{
            params:{
                type:""
            }
        })
            .then(res =>res.data)
            .then(data=>{
                this.setState({
                    sessions:[...data],
                });
            })
    }


    showDrawer = function (dramaId) {
        // this.setState({
        //     visible:true
        // });
        const w = window.open('_black') //这里是打开新窗口
        //sid是剧本的场次id
        let url = 'http://localhost:3000/HardCore/PlayGames?sid=59'
        w.location.href = url //这样就可以跳转了
    };

    onClose = () => {
        this.setState({
            visible:false,
        });
    };

    joinGame = ()=>{
        const w = window.open('_black') //这里是打开新窗口
        //sid是剧本的场次id
        let url = 'http://localhost:3000/HardCore/PlayGames?sid=59'
        w.location.href = url //这样就可以跳转了
    };

    render(){
        return(
            <div style={{height: '100%',overflow :"auto"}} className="site-drawer-render-in-current-wrapper">
                {
                    this.state.sessions.map((items)=>{
                        return(
                            <div onClick={this.showDrawer.bind(this,items.cId)}>
                                <Cards key={items.cId} title={items.dramaName} imagePath={items.dramaImage} desc={items.sessionDesc}/>
                            </div>
                        )
                    })
                }

                <Drawer
                    title={"操作面板"}
                    placement="right"
                    closable={false}
                    width = '800px'
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{position: 'absolute'}}
                >
                    <div style={{margin: '0px 0 18px 0px'}} >
                        <Button onClick={this.joinGame}  ghost type="primary" shape="round" icon={<VideoCameraTwoTone/>} size='large'>
                            加入
                        </Button>
                    </div>
                </Drawer>

            </div>
        )
    }

}