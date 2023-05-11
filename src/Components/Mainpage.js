
import './../CssUtils/Mainpage.css';
import React,{Component} from "react";
import Request from '../service/request';
import {Radio,Button, Checkbox, Form, message, Tabs,Input} from 'antd';
import {LockOutlined,MobileOutlined,UserOutlined} from '@ant-design/icons';
import {ProFormText} from '@ant-design/pro-components';
import History from "./History";
import {initHeader} from "../service/request";
import axios from "axios";
import App from './../App';

const { TabPane } = Tabs;



export default class Mainpage extends Component{
    constructor(props){
        super(props);
        this.state = {
            status:"",
            loginType:"account",
            loginStatus:"ok",
            tabType:"account"
        }
    }


    login = async (data) => {
        var msg = "";
        await Request("post", "/user/login", data).then(
            (res) => {
                msg = res;
            });

        this.setState({
            status:msg.status
        });

        if (msg.status === "success") {
            History.push({pathname:'/Supernatural?id='+msg.userInfo.cid});
            History.go(0);
        }

        return msg;
    };

    logon = async (data) => {
        var msg = "";
        await Request("post", "/user/logon", data).then(
            (res) => {
                msg = res;
            });
        if (msg.status === "success") {
            History.push({pathname:'/Mainpage'});
            History.go(0);
        }
        return msg;
    };

    onFinish=(value)=>{
        if(this.state.tabType === 'account'){
            let data = {
                userName: value.username,
                userPassword: value.password,
            };
            this.login(data);
        }else{
            let data = {
                userName: value.invName,
                userPassword: value.invPassword,
                userPhone:value.invPhone,
                userSex:value.invSex
            };
            this.logon(data);
        }
    };

    onChange = (key) => {
        this.setState({
            tabType:key
        })
    };

    RadioOn = (e) => {
        // console.log(e.target.value);
    };

    render() {
        return (
            <div className="mainpage-container">
                <div className="mainpage-content">
                    <Form name="normal_login" className="login-form"
                          initialValues={{
                              remember: true,
                          }}
                          onFinish={this.onFinish}
                    >
                        <Tabs activeKey={this.state.tabType} onChange={this.onChange}>
                            <TabPane key="account" tab="账号密码登录"/>
                            <TabPane key="special" tab="注册"/>
                        </Tabs>

                        {this.state.status === 'error' && this.state.loginType === 'account' && (
                            message.error('账户或密码错误')
                        )}
                        {this.state.tabType === 'account' && (
                            <>
                                <ProFormText
                                    name="username"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <UserOutlined className="prefixIcon" />,
                                    }}
                                    placeholder='用户名'
                                    rules={[{ required: true, message: '请输入用户名' }]}
                                />
                                <ProFormText.Password
                                    name="password"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className="prefixIcon}"/>,
                                    }}
                                    placeholder='密码'
                                    rules={[{ required: true, message: '请输入密码' }]}
                                />
                            </>
                        )}

                        {this.state.status === 'error' && this.state.loginType === 'special' &&
                        <div content="未知错误" />}
                        {this.state.tabType === 'special' && (
                            <>
                                <ProFormText
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <UserOutlined className="prefixIcon" />,
                                    }}
                                    name="invName"
                                    placeholder="账号"
                                    rules={[{ required: true, message: '请输入用户名' }]}
                                />
                                <ProFormText.Password
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className="prefixIcon" />,
                                    }}
                                    captchaProps={{
                                        size: 'large',
                                    }}
                                    placeholder='密码'
                                    name="invPassword"
                                    rules={[{ required: true, message: '请输入密码' }]}
                                />
                                <ProFormText
                                    maxLength={11}
                                             fieldProps={{
                                                 size: 'large',
                                                 prefix: <MobileOutlined className="prefixIcon" />,
                                             }}
                                    name="invPhone"
                                    placeholder="手机号"
                                    size="large"
                                />
                            <Form.Item label="性别" name="invSex" rules={[
                                {
                                    required: true,
                                    message: '请选择性别',
                                },
                            ]}>
                                <Radio.Group name="invSex" onChange={this.RadioOn} >
                                    <Radio value="男">男</Radio>
                                    <Radio value="女">女</Radio>
                                </Radio.Group>
                            </Form.Item>
                            </>
                        )}
                        <Form.Item>

                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="">
                                    忘记密码
                                </a>

                        </Form.Item>

                        <Form.Item>
                            {this.state.tabType === 'account' &&(
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>)}

                            {this.state.tabType === 'special' &&(
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>)}

                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
