import {Component} from "react";
import StepsUtil from "./Utils/StepsUtil"
import {Drawer, Popover,Affix} from "antd";
import React from "react";
import SegmentUtil from "./Utils/SegmentUtil";
import { IdcardOutlined } from '@ant-design/icons';
import "../CssUtils/PlayGames.css"

//游玩界面
export default class PlayGames extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            isSelect:false,
            role:"",
            roleID:[],
            pageParam:""
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

        var param  = window.location.href.split("?")[1].split("=")[1];
        this.setState({
            pageParam:param
        });

    }

    content = (
        <div>
            <p>身份卡</p>
        </div>
    );


    onCloseP = () => {
            this.setState({
                visible:false,
            });
    };

    showDrawerP = ()=> {
        this.setState({
            visible:true,
        });

    };

    getSegmentValue =(data)=>{
        this.setState({
            role:data,
            isSelect:true
        });
    };

    render(){
        return(
          <div style={{overflow :"auto"}}>
              <StepsUtil/>
              {/**右下角身份牌**/}
              <Popover className = "Idcard" placement="leftTop" content={this.content} >
               <IdcardOutlined  style={{ fontSize: '751%'}} onClick={this.showDrawerP}/>
              </Popover>
              <Drawer
                  title={"角色信息"}
                  placement="left"
                  closable={false}
                  width = '265px'
                  onClose={this.onCloseP}
                  visible={this.state.visible}
                  getContainer={false}
                  style={{position: 'absolute'}}
              >
                  <h1>你的身份</h1>
                  <h2>你的任务</h2>
              </Drawer>
          </div>
      )
    }



}