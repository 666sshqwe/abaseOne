import React from 'react';
import './../../index.css';
import 'antd/dist/antd.css';
import Cards from "../Utils/Cards";
import imgPath from "../../resources/images/通远县-封面.png";
import '../../CssUtils/Yh1.css'


export default function Yh1() {
    return (
        <div>
            <Cards title ="硬核1" imagePath={imgPath} desc="5人-推理-半封闭"/>
            <Cards title ="硬核2" imagePath={imgPath} desc="5人-推理-半封闭"/>
            <Cards title ="硬核3" imagePath={imgPath} desc="5人-推理-半封闭"/>
        </div>
    )
}