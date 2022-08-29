
import './../CssUtils/Mainpage.css';
import React,{Component} from "react";
import Request from '../service/request';
import {Button, Checkbox, Form, message, Tabs} from 'antd';
import {LockOutlined,MobileOutlined,UserOutlined} from '@ant-design/icons';
import {ProFormText} from '@ant-design/pro-components';
import History from "./History"
import {Link, useNavigate} from "react-router-dom";


const { TabPane } = Tabs;



export default class Mainpage extends Component{

    constructor(props){
        super(props);
        this.state = {
            loginType:"account",
            loginStatus:"ok",
            tabType:"account"
        }
    }


    login = async (data) => {
        var msg = "";
        await Request("post", "/login/Authentica", data).then(
            (res) => {
                console.log("登录成功，返回值：" + res);
                msg = res;
            });
        if (msg === "success") {
            History.push({pathname:'/HardCcore?id=10235'});
            History.go(0);
        }
        return msg;
    };


    onFinish=(value)=>{
        let data = {
            userName: value.username,
            userPassword: value.password
        };
       this.login(data);
    };

    onChange = (key) => {
        this.setState({
            tabType:key
        })
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
                            <TabPane key="special" tab="特殊认证"/>
                        </Tabs>

                        {this.state.status === 'error' && this.state.loginType === 'account' && (
                            message.error('账户或密码错误(admin/ant.design)')
                        )}
                        {this.state.tabType === 'account' && (
                            <>
                                <ProFormText
                                    name="username"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <UserOutlined className="prefixIcon" />,
                                    }}
                                    placeholder='用户名: admin or user'

                                    rules={[
                                        {
                                            required: true,
                                            message: (
                                                <div
                                                    id="pages.login.username.required"
                                                    defaultMessage="请输入用户名!"
                                                />
                                            ),
                                        },
                                    ]}
                                />
                                <ProFormText.Password
                                    name="password"
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className="prefixIcon}"/>,
                                    }}
                                    placeholder='密码: ant.design'

                                    rules={[
                                        {
                                            required: true,
                                            message: (
                                                "请输入密码！"
                                            ),
                                        },
                                    ]}
                                />
                            </>
                        )}

                        {this.state.status === 'error' && this.state.loginType === 'mobile' &&
                        <div content="验证码错误" />}
                        {this.state.tabType === 'special' && (
                            <>
                                <ProFormText
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <MobileOutlined className="prefixIcon" />,
                                    }}
                                    name="InvName"
                                    placeholder="特殊账号"
                                />
                                <ProFormText.Password
                                    fieldProps={{
                                        size: 'large',
                                        prefix: <LockOutlined className="prefixIcon" />,
                                    }}
                                    captchaProps={{
                                        size: 'large',
                                    }}
                                    placeholder='邀请码'
                                    name="InvCode"
                                    rules={[
                                        {
                                            required: true,
                                            message: (
                                                "请输入邀请码！"
                                            ),
                                        },
                                    ]}
                                />
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
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            Or <a href="">注册!</a>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
