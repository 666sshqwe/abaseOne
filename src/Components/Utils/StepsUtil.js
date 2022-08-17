import React, {Component, useState} from 'react';
import 'antd/dist/antd.css';
import '../testPages/testCss/StepsUtil.css';
import { Image,Steps,Button } from 'antd';
import {IdcardOutlined, VideoCameraTwoTone} from "@ant-design/icons";
import ImgUtils from './ComSource'
import Cards from "./Cards";
import {Link} from "react-router-dom";
import StepContent from "./StepContent";
import QueueAnim from "rc-queue-anim/es";

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
            detailPeople:[ImgUtils.imgCDC,ImgUtils.imgCDCx]
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
                {/**内容展示区,不同的步骤，展示不同的内容**/}
                <div className="steps-content">
                    {
                        this.state.current ===0&&(<StepContent/>)
                    }
                </div>

                {/**按钮**/}
                <div className="steps-action">
                    {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {this.state.current === steps.length - 1 && (
                        <Button type="primary" >
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