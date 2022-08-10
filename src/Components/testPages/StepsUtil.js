import React, {Component, useState} from 'react';
import 'antd/dist/antd.css';
import './testCss/StepsUtil.css';
import { Popover,Steps } from 'antd';
import {IdcardOutlined} from "@ant-design/icons";

const { Step } = Steps;
const steps = [
    {
        title: '准备-角色分配',
        // content: '第一幕',
    },
    {
        title: '第一幕',
        // content: '第一幕',
    },
    {
        title: '第二幕',
        // content: 'Second-content',
    },
    {
        title: '第三幕',
        // content: 'Last-content',
    },
];

export default class StepsUtil extends Component {


    constructor(props){
        super(props);
        this.state = {
            current:0,
        }
    }

     next = () => {
        this.setState({
            current:this.state.current+1
        });
    };

     prev = () => {
         this.setState({
             current:this.state.current-1
         });
    };

    render(){
        return (
            <>
                <Steps current={this.state.current}>
                    {steps.map((item) => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">

                </div>

            </>
        );
    }

};
//待启用
/**
 *
 <div className="steps-action">
 {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
 {this.state.current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
 {this.state.current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => this.prev()}
                        >
                            Previous
                        </Button>
                    )}
 </div>
 * ***/