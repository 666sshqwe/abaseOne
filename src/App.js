import './App.css';
import 'antd/dist/antd.min.css';
import './CssUtils/StoryMenu.css';
import React,{Component} from 'react';
import {Route,Routes,Link,} from "react-router-dom";
import Supernatural from './Components/Pages/Supernatural'
import HardCore from   './Components/Pages/HardCore'
import {Layout, Menu,Popover} from "antd";
import {Film} from "@icon-park/react";
import {AppstoreOutlined, HddOutlined, LinkOutlined, FireOutlined, SettingOutlined} from "@ant-design/icons";
import Storys from "./Components/Pages/Storys";
import Mainpage from './Components/Mainpage'
import PlayGames from './Components/PlayGames'
import Teamming from './Components/Pages/Teamming'
import {UserOutlined } from '@ant-design/icons';
import axios from "axios";



const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return { key,icon,children,label};
}

const TitleItems = [
    getItem('新手推荐','newerKey'),
    getItem('小助手','tipKey'),
    getItem('待定','stay')
];

const itemsM = [
    getItem('剧本广场', 'squarePlace', <AppstoreOutlined/>, [
        getItem('自由区', 'freeZone'),
        getItem('限定区', 'limitZone')
    ]),
    getItem('档案库', 'tvPlace', <HddOutlined/>,[
        getItem(<Link to="/Supernatural">灵异</Link>,'supernatural'),
        getItem(<Link to="/HardCore">硬核</Link>,'hardCore'),
        getItem(<Link to="/HardCore?id">古风</Link>, 'archaism')
    ]),
    getItem('营地', 'collectionPlace', <FireOutlined/>,[
        getItem('待攻略', 'teamming'),
        getItem('已完成', 'completed'),
        getItem('小伙伴', 'friends')
    ]),
    getItem('限时攻略', 'strategy', <SettingOutlined/>, [
        getItem('最热', 'hots'),
        getItem('最近', 'lately')
    ]),
    getItem(
        <a href="https://ant-design.antgroup.com/components/overview-cn/" target="_windows" rel="noopener noreferrer">
            暂用-前端UI查找
        </a>,
        'link',
        <LinkOutlined />,
    ),
];

var content;

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            userID:"1102",
            pageParam:"",
            userName: "",
            userSex: "",
            dramaStory:""

        }
    }



     username = "未登录";

     text = <span>简介</span>;

    componentDidMount(){
      var param  =  window.location.href.split("?")[1];
      this.setState({
          pageParam:param
      })
    }

    getUserMesg=(data)=>{
        this.setState({
            userName:data.userName,
            userSex: data.userSex,
            dramaStory:data.dramaStory
        });
       content = (
            <div>
                <p>{data.userName}</p>
            </div>
        );
    };

    render(){
        return (
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <Film className="logo" theme="outline" size="46" fill="#4a90e2" strokeWidth={3}/>
                    <Menu theme="dark" mode="horizontal" items={TitleItems} />
                    <Popover placement="bottom" title={this.text} content={content} trigger="click">
                        {this.state.userName!==""&&(<UserOutlined className="touxiang" style={{color:"white"}}/>)}
                    </Popover>
                </Header>
                <Layout className="site-drawer-render-in-current-wrapper">
                    <Sider  width={200} className="site-layout-background">
                        <Menu  mode="inline"  defaultSelectedKeys={['supernatural']} defaultOpenKeys={['tvPlace']}
                         style={{height: '100%',borderRight: 0,}} >
                            <Menu.SubMenu key="tvPlace" title="档案库" icon={<HddOutlined />}>
                                <Menu.Item key="supernatural">
                                 {this.state.pageParam !== ""&&(<Link to={{pathname:"/Supernatural?"+this.state.pageParam}}>灵异</Link>)}
                                 {this.state.pageParam === ""&&(<Link to={{pathname:"/Supernatural"}}>灵异</Link>)}
                                </Menu.Item>
                                <Menu.Item key="hardCore" >
                                 {this.state.pageParam !== ""&&(<Link to={{pathname:"/HardCore?"+this.state.pageParam}}>硬核</Link>)}
                                 {this.state.pageParam === ""&&(<Link to={{pathname:"/HardCore"}}>硬核</Link>)}
                                </Menu.Item>
                                <Menu.Item key="archaism" >
                                 {this.state.pageParam !== ""&&(<Link to={{pathname:"/HardCore?"+this.state.pageParam}}>古风</Link>)}
                                 {this.state.pageParam === ""&&(<Link to={{pathname:"/HardCore"}}>古风</Link>)}
                                </Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="collectionPlace" title="营地" icon={<HddOutlined />}>
                                <Menu.Item key="teamming" >
                                    {this.state.pageParam !== ""&&(<Link to={{pathname:"/Teamming?"+this.state.pageParam}}>组队中</Link>)}
                                    {this.state.pageParam === ""&&(<Link to={{pathname:"/Teamming"}}>组队中</Link>)}
                                </Menu.Item>
                                <Menu.Item key="completed" >
                                    剧本评分
                                </Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="UISELF" title="待命名" icon={<SettingOutlined />}>
                                <Menu.Item key="link" icon={<LinkOutlined />}>
                                    <a href="https://ant-design.antgroup.com/components/overview-cn/" target="_windows" rel="noopener noreferrer">
                                        暂用-前端UI查找
                                    </a>
                                </Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 585,overflow :"auto"}}>
                            <div style={{height: '100%'}}>
                              <Routes>
                                <Route  path="/" element={<Mainpage getMesage = {this.getUserMesg}/>}></Route>
                                <Route  path="/Supernatural/*" element={<Supernatural/>}></Route>
                                <Route  path="/Supernatural/Storys" element={<Storys/>}></Route>
                                <Route  path="/HardCore"  element={<HardCore getMesage = {this.getUserMesg}/>}></Route>
                                <Route  path="/HardCore/PlayGames"  element={<PlayGames/>}></Route>
                                <Route path ="/Teamming" element = {<Teamming/>}></Route>
                            </Routes>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

