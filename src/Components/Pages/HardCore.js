import React, {Component} from 'react';
import {Button,message} from 'antd';
import axios from "axios";
import Request from '../../service/request';
import { VideoCameraTwoTone } from '@ant-design/icons';
import './../../index.css';
import 'antd/dist/antd.min.css';
import Cards from "../Utils/Cards";
import '../../CssUtils/HardCcore.css'
import {Drawer} from "antd";
import History from "../History";

class HardCore extends Component {

    constructor(props){
        super(props);
        this.state = {
            storyRoles: [],
            visible:false,
            drawerData:"",
            drama:[],
            pageParam:"",
            sessionId:"",
            dramaId:""
        }
    }

    componentDidMount(){
        var param  = window.location.href.split("?")[1].split("=")[1];
        this.setState({
            pageParam:param
        });
        axios.get("/userInfo/qUserById",{
            params:{
                useId:param
            }
        })
            .then(res =>res.data)
            .then(data=>{
                this.props.getMesage(data);
            });

        axios.get("/store/getDrama",{
            params:{
                type:"硬核"
            }
        })
            .then(res =>res.data)
            .then(data=>{
                this.setState({
                    drama:[...data],
                });
            })
    }


     showDrawer = function (dramaId) {
         axios.get("/store/getDramaRole",{
             params:{
                 dramaId:dramaId
             }
         })
             .then(res =>res.data)
             .then(data=>{
                 if(data.length ===0 ){
                     message.warn("该剧本暂无数据，敬请期待！")
                 }
                 this.setState({
                     storyRoles:[...data],
                     visible:true,
                     drawerData:data[0].title,
                     dramaId:dramaId
                 });
             })
    };

     onClose = () => {
         this.setState({
             visible:false,
         });
    };

    createSession = async () =>{
         var data = {
             dramaName:this.state.drawerData,
             createId:this.state.pageParam,
             userIds:this.state.pageParam,
             dramaId:this.state.dramaId
         };
         await   Request("post","/paly/CSessions",data).then(
             (res)=>{
                 this.state.sessionId = res;
             });
         if (this.state.sessionId>0) {
             // sid是该场次的id
             History.push({pathname:"/HardCore/PlayGames?sid="+this.state.sessionId});
             History.go(0);
         }
     };

    render(){
        return(
            <div style={{height: '100%',overflow :"auto"}} className="site-drawer-render-in-current-wrapper">
                {
                 this.state.drama.map((items)=>{
                   return(
                     <div onClick={this.showDrawer.bind(this,items.id)}>
                       <Cards key={items.id} title={items.dramaName} imagePath={items.dramaImage} desc={items.dramaDesc}/>
                     </div>
                   )
                 })
                }
                <Drawer
                    title={this.state.drawerData}
                    placement="right"
                    closable={false}
                    width = '566px'
                    onClose={this.onClose}
                    visible={this.state.visible}
                    getContainer={false}
                    style={{position: 'absolute'}}
                >
                 <div style={{margin: '0px 0 18px 0px'}} >
                      <Button onClick={this.createSession} ghost type="primary" shape="round" icon={<VideoCameraTwoTone/>} size='large'>
                          点击创建
                      </Button>
                 </div>
                    {
                        this.state.storyRoles.map((item)=>{
                            return(
                                <Cards key={item.id} title={item.title} imagePath={item.roleImage} desc={item.roleDesc}/>
                            )
                        })
                    }
                </Drawer>
            </div>
        )
    }

}

export default HardCore;

