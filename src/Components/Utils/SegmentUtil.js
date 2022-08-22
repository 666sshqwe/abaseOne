import React, {Component} from 'react';
import 'antd/dist/antd.min.css';
import '../testPages/testCss/SegmentUtil.css';
import { Avatar, Segmented } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default class SegmentUtil extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            drawerData:""
        }
    }


    getChange=(value)=>{
        console.log("选中的值",value)
        this.props.getVaule(value);
    };

    render(){
        return(
            <Segmented onChange={this.getChange}
                options={[
                    {
                        label: (
                            <div style={{ padding: 4 }}>
                                <Avatar style={{ backgroundColor: '#f52039' }}>K</Avatar>
                                <div>女</div>
                            </div>
                        ),
                        value: '女',
                    },
                    {
                        label: (
                            <div style={{ padding: 4 }}>
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                <div>男</div>
                            </div>
                        ),
                        value: '男',
                    },
                ]}
            />

        )
    }

}

