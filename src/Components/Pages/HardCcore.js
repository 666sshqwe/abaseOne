import React, {Component} from 'react';
import {Button} from 'antd';
import axios from "axios";
import Request from '../../service/request';
import { VideoCameraTwoTone } from '@ant-design/icons';
import './../../index.css';
import 'antd/dist/antd.min.css';
import Cards from "../Utils/Cards";
import imgPath from "../../resources/images/硬核/蓝色大丽花/封面-蓝色大丽花.png";
import imgPathYZ from "../../resources/images/硬核/已知死亡/封面-已知死亡.jpg";
import imgPathQZ from "../../resources/images/硬核/漆昼之翁/封面 -漆昼之翁.jpg";
import '../../CssUtils/HardCcore.css'
import {Drawer} from "antd";
import imgPathBG from "../../resources/images/硬核/已知死亡/故事背景.jpg";
import imgCDC from "../../resources/images/硬核/已知死亡/陈大川/陈大川_1.jpg";
import imgCDCx from "../../resources/images/硬核/已知死亡/陈小川/陈小川_C (1).jpg";
import imgSY from "../../resources/images/硬核/已知死亡/宋羽/宋羽_ (1).jpg";
import imgLXZ from "../../resources/images/硬核/已知死亡/李星泽/李星泽_ (1).jpg";
import imgLYY from "../../resources/images/硬核/已知死亡/林妍妍/林妍妍_ (1).jpg";
import imgFYY from "../../resources/images/硬核/已知死亡/方雅云/方雅云_ (1).jpg";
import imgQZRW from "../../resources/images/硬核/漆昼之翁/故事简介.jpg";
import imgFS from "../../resources/images/硬核/漆昼之翁/冯时/冯时 (1).jpg";
import imgHR from "../../resources/images/硬核/漆昼之翁/何茹/何茹(1).jpg";
import imgLL from "../../resources/images/硬核/漆昼之翁/刘恋/刘恋 (1).jpg";
import imgKL from "../../resources/images/硬核/漆昼之翁/孔力/孔力 (1).jpg";
import imgSZ from "../../resources/images/硬核/漆昼之翁/孙政/孙政 (1).jpg";
import imgLSS from "../../resources/images/硬核/漆昼之翁/李思思/李思思 (1).jpg";
import imgHB from "../../resources/images/硬核/漆昼之翁/胡彪/胡彪 (1).jpg";
import {Link,} from "react-router-dom";

export default class HardCcore extends Component {
    constructor(props){
        super(props);
        this.state = {
            storys: [
                {title:"已知死亡",imagePath:imgPathBG,name:"故事背景"},
                {title:"已知死亡",imagePath:imgCDC,name:"陈大川"},
                {title:"已知死亡",imagePath:imgCDCx,name:"陈小川"},
                {title:"已知死亡",imagePath:imgSY,name:"宋羽"},
                {title:"已知死亡",imagePath:imgLXZ,name:"李星泽"},
                {title:"已知死亡",imagePath:imgLYY,name:"林妍妍"},
                {title:"已知死亡",imagePath:imgFYY,name:"方雅云"}
            ],
            visible:false,
            drawerData:""
        }
    }

    componentDidMount(){
        //通用写法
        axios.get("/store/get",{
            params:{
                roleID:"1102"
            }
        })
            .then(res =>res.data)
            .then(data=>{
                console.log("接受到的消息是："+data);
            })
    }

     storysYzsw=[
        {title:"已知死亡",imagePath:imgPathBG,name:"故事简介"},
        {title:"已知死亡",imagePath:imgCDC,name:"陈大川"},
        {title:"已知死亡",imagePath:imgCDCx,name:"陈小川"},
        {title:"已知死亡",imagePath:imgSY,name:"宋羽"},
        {title:"已知死亡",imagePath:imgLXZ,name:"李星泽"},
        {title:"已知死亡",imagePath:imgLYY,name:"林妍妍"},
        {title:"已知死亡",imagePath:imgFYY,name:"方雅云"}
        ];
     storysQzzw = [
        {title:"漆昼之翁",imagePath:imgQZRW,name:"故事简介"},
        {title:"漆昼之翁",imagePath:imgFS,name:"冯时"},
        {title:"漆昼之翁",imagePath:imgLL,name:"刘恋"},
        {title:"漆昼之翁",imagePath:imgHR,name:"何茹"},
        {title:"漆昼之翁",imagePath:imgKL,name:"孔力"},
        {title:"漆昼之翁",imagePath:imgSZ,name:"孙政"},
        {title:"漆昼之翁",imagePath:imgLSS,name:"李思思"},
        {title:"漆昼之翁",imagePath:imgHB,name:"胡彪"}
    ];
     storysLsdlh = [
        {title:"蓝色大丽花",imagePath:imgPathBG,name:"故事简介"},
        {title:"蓝色大丽花",imagePath:imgCDC,name:"陈大川"},
        {title:"蓝色大丽花",imagePath:imgCDCx,name:"陈小川"},
        {title:"蓝色大丽花",imagePath:imgSY,name:"宋羽"},
        {title:"蓝色大丽花",imagePath:imgLXZ,name:"李星泽"},
        {title:"蓝色大丽花",imagePath:imgLYY,name:"林妍妍"},
        {title:"蓝色大丽花",imagePath:imgFYY,name:"方雅云"}
    ];

     showDrawer = function (title) {
        if(title === "漆昼之翁"){
            var data =this.storysQzzw;
            this.setState({
                storys:[...data],
                visible:true,
                drawerData:title

            });
        }
        if(title === "蓝色大丽花"){
            var data =this.storysLsdlh;
            this.setState({
                storys:[...data],
                visible:true,
                drawerData:title
            });
        }
         if(title === "已知死亡"){
             var data =this.storysYzsw;
             this.setState({
                 storys:[...data],
                 visible:true,
                 drawerData:title
             });
         }
    };

     onClose = () => {
         this.setState({
             visible:false,
         });
    };

     createSession = () =>{
         var data = {
             storyName:this.state.drawerData,
             createId:1102,
             userIds:"",
             userNum:0,
             roleNum:7
         };
         Request("post","/store/CSessions",data).then(
             (res)=>{
                 console.log("执行post完成，返回值："+res);
             });
     };

    render(){
        return(
            <div style={{height: '100%'}} className="site-drawer-render-in-current-wrapper">
                <div onClick={this.showDrawer.bind(this, "已知死亡")} >
                    <Cards title="已知死亡" imagePath={imgPathYZ} desc="6人-推理"/>
                </div>

                <div onClick={this.showDrawer.bind(this, "漆昼之翁")} >
                    <Cards title="漆昼之翁" imagePath={imgPathQZ} desc="7人-推理"/>
                </div>

                <div onClick={this.showDrawer.bind(this, "蓝色大丽花")} >
                    <Cards title="蓝色大丽花" imagePath={imgPath} desc="5人-推理"/>
                </div>
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
                         <Link to='/yh1/PlayGames'>
                             <Button onClick={this.createSession} ghost type="primary" shape="round" icon={<VideoCameraTwoTone/>} size='large'>
                                 点击创建
                             </Button>
                         </Link>
                 </div>
                    {
                        this.state.storys.map((item)=>{
                            return(
                                <Cards key={item.imagePath} title={item.title} imagePath={item.imagePath} desc={item.name}/>
                            )
                        })
                    }
                </Drawer>
            </div>
        )
    }

}


