import React, {Component, useState} from 'react';
import 'antd/dist/antd.min.css';
import {Drawer} from 'antd';
import Cards from "./Cards";
import imgPathBG from "../../resources/images/硬核/已知死亡/故事背景.jpg";
import imgCDC from "../../resources/images/硬核/已知死亡/陈大川/陈大川_1.jpg";


export default class Drawers extends Component{
    render(){
        return(
            <Drawer
                title="111"
                placement="right"
                closable={false}
                // onClose={onClose}
                // visible={visible}
                getContainer={false}
                style={{position: 'absolute'}}
                >
                <Cards title ="已知死亡" imagePath={imgPathBG} desc="故事背景"/>
                <Cards title ="已知死亡" imagePath={imgCDC} desc="陈大川"/>
                </Drawer>

        )
    }
};

