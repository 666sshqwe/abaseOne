import './App.css';
import 'antd/dist/antd.min.css';
import './CssUtils/StoryMenu.css';
import React,{Component} from 'react';
import {Route,Routes,Link,} from "react-router-dom";
import Supernatural from './Components/Pages/Supernatural'
import HardCcore from   './Components/Pages/HardCcore'
import {Breadcrumb, Layout, Menu} from "antd";
import {Film} from "@icon-park/react";
import {AppstoreOutlined, HddOutlined, LinkOutlined, FireOutlined, SettingOutlined} from "@ant-design/icons";
import Storys from "./Components/Pages/Storys";
import Mainpage from './Components/Mainpage'
import PlayGames from './Components/PlayGames'
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
        getItem(<Link to="/HardCcore">硬核</Link>,'hardCcore'),
        getItem('古风', 'archaism')
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



export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
      var param  =  window.location.href.split("?")[1];
      
    }

    render(){
        return (
            <Layout style={{height: '100%'}}>
                <Header className="header">
                    <Film className="logo" theme="outline" size="46" fill="#4a90e2" strokeWidth={3}/>
                    <Menu theme="dark" mode="horizontal" items={TitleItems} />
                </Header>
                <Layout className="site-drawer-render-in-current-wrapper">
                    <Sider  width={200} className="site-layout-background">
                        <Menu  mode="inline"  defaultSelectedKeys={['supernatural']} defaultOpenKeys={['tvPlace']}
                         style={{height: '100%',borderRight: 0,}} items={itemsM}/>
                    </Sider>

                    <Layout style={{padding: '0 24px 24px',}}>
                        <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 585,}}>
                            <div style={{height: '100%'}}>
                              <Routes>
                                      <Route  path="/" element={<Mainpage/>}></Route>
                                      <Route  path="/Supernatural/*" element={<Supernatural/>}></Route>
                                      <Route  path="/Supernatural/Storys" element={<Storys/>}></Route>
                                      <Route  path="/HardCcore"  element={<HardCcore/>}></Route>
                                      <Route  path="/HardCcore/PlayGames"  element={<PlayGames/>}></Route>
                              </Routes>
                            </div>
                        </Content>
                    </Layout>

                </Layout>

            </Layout>
        );
    }
}

