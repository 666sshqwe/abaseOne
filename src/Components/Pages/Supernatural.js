import React from 'react';
import './../../index.css';
import 'antd/dist/antd.min.css';
import Cards from "../Utils/Cards";
import imgPathTy from "../../resources/images/灵异/通远县/通远县-封面.png";
import imgPathS from "../../resources/images/灵异/瘆/封面-瘆.jpg";
import {Link,} from "react-router-dom";


export default function Supernatural() {
    return (
        <div>
            <Link to='/Supernatural/Storys'><Cards title ="通远县" imagePath={imgPathTy} desc="5人-推理-灵异"/></Link>
        <Cards title ="瘆" imagePath={imgPathS} desc="7人-推理-灵异"/>
        </div>
    )
}