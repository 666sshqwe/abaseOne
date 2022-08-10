import {Component} from "react";
import StepsUtil from "./testPages/StepsUtil"
import {Drawer, Popover,Affix} from "antd";
import React from "react";
import SegmentUtil from "./testPages/SegmentUtil";
import { IdcardOutlined } from '@ant-design/icons';
import "../CssUtils/PlayGames.css"

//游玩界面
export default class PlayGames extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:true,
            isSelect:false,
            role:""
        }
    }

    content = (
        <div>
            <p>身份卡</p>
        </div>
    );

    onCloseP = () => {
        if(this.state.isSelect){
            this.setState({
                visible:false,
            });
        }else{
            alert("请先选择角色");
        }


    };

    showDrawerP = ()=> {
        this.setState({
            visible:true,
        });
    };

    getSegmentValue =(data)=>{
        console.log("PlayGames获得Segment的值",data)
        this.setState({
            role:data,
            isSelect:true
        });
    };

    render(){
        return(
          <div>
              <StepsUtil/>
              <Popover className = "Idcard" placement="leftTop" content={this.content} >
               <IdcardOutlined  style={{ fontSize: '751%'}} onClick={this.showDrawerP}/>
              </Popover>
              <Drawer
                  title={"角色分配界面"}
                  placement="left"
                  closable={false}
                  width = '265px'
                  onClose={this.onCloseP}
                  visible={this.state.visible}
                  getContainer={false}
                  style={{position: 'absolute'}}
              >
              <SegmentUtil getVaule={this.getSegmentValue}/>
              </Drawer>
          </div>
      )
    }



}