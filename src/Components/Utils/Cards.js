import React from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';

const {Meta} = Card;

const Cards = (props) => (
        <Card hoverable style={{width: 225,float: 'left', margin: '0px 10px 18px 0px'}} cover={<img src={props.imagePath}/>}>
            <Meta title={props.title} description= {props.desc}/>
        </Card>
);
export default Cards;