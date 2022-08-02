import './App.css';
import React,{Component} from 'react';
import {Route,Redirect,BrowserRouter,Routes} from "react-router-dom";
import Home from './Components/testPages/Home'
import Tool from './Components/testPages/ManyTool'
import StoryMenu from   './Components/testPages/StoryMenu'

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route  path="/Storymenu"  element={<StoryMenu/>}></Route>
                    <Route  path="/tool"  element={<Tool/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

