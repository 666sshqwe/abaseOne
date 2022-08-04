import React from 'react';
import './../../index.css';
import Cards from "../Utils/Cards";
import imgPath from "../../resources/images/通远县-封面.png";


export default function Ly1() {
    return (
        <div>
        <Cards title ="通远县" imagePath={imgPath} desc="5人-推理-半封闭"/>
            <Cards title ="通远县2" imagePath={imgPath} desc="5人-推理-半封闭"/>
        </div>
    )
}