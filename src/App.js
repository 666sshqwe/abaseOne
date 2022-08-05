import './App.css';
import 'antd/dist/antd.css';
import './CssUtils/StoryMenu.css';
import React,{Component} from 'react';
import {Route,Routes,Link,} from "react-router-dom";
import Ly1 from   './Components/Pages/Ly1'
import Yh1 from   './Components/Pages/Yh1'
import {Layout, Menu} from "antd";
import {Film} from "@icon-park/react";
import {AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import Storys from "./Components/Pages/Storys";


const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const items1 = [
    getItem('新手推荐','newerKey'),
    getItem('小助手','tipKey'),
    getItem('待定','stay')
];

const itemsM = [
    getItem('聚集地', 'tvKey', <MailOutlined />,[
        getItem(
            <Link to="/ly1">
                灵异
            </Link>
            , 'ly1'),
        getItem(
            <Link to="/yh1">
            硬核
            </Link>
            , 'yh1'),
        getItem('古风', 'gf1'),
    ]),
    getItem('收藏地', 'storeKey', <CalendarOutlined />,[
        getItem('待组队', 'dzd1'),
        getItem('已完成', 'ywc1'),
        getItem('小伙伴', 'hb1'),
    ]),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            联系我们
        </a>,
        'link',
        <LinkOutlined />,
    ),
];

export default class App extends Component{
    render(){
        return (
            <Layout>
                <Header className="header">
                    <Film className="logo" theme="outline" size="46" fill="#4a90e2" strokeWidth={3}/>
                    <Menu theme="dark" mode="horizontal" items={items1} />
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu  mode="inline" defaultSelectedKeys={['storeKey']} defaultOpenKeys={['storeKey']} style={{
                            height: '100%',
                            borderRight: 0,}} items={itemsM}/>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px',}}>
                        <Content className="site-layout-background" style={{padding: 24, margin: 0, minHeight: 585,}}>
                            <div>
                              <Routes>
                                <Route  path="/ly1/*" element={<Ly1/>}></Route>
                                  <Route  path="/ly1/Storys" element={<Storys/>}></Route>
                                <Route  path="/yh1"  element={<Yh1/>}></Route>
                              </Routes>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>

        );
    }
}

