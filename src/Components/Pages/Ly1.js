import React from 'react';
import './../../index.css';
import 'antd/dist/antd.css';
import Cards from "../Utils/Cards";
import imgPath from "../../resources/images/通远县-封面.png";
import {Route,Routes,Link,} from "react-router-dom";
import Storys from './Storys'

export default function Ly1() {
    return (
        <div>
        <Link to="/ly1/Storys"><Cards title ="通远县" imagePath={imgPath} desc="5人-推理-半封闭"/></Link>
        <Cards title ="通远县2" imagePath={imgPath} desc="5人-推理-半封闭"/>
        </div>
    )
}