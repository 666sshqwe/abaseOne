
import './App.css';
import React,{Component} from 'react';
import {Route,Redirect,BrowserRouter,Routes} from "react-router-dom";
import Home from './Components/testPages/Home'
import Menu from './Components/testPages/Menu'
import Tool from './Components/testPages/ManyTool'

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <hr />
                    <Routes>
                    <Route exact path="/home" element={<Home/>}></Route>
                    <Route  path="/menu"  element={<Menu/>}></Route>
                    <Route  path="/tool"  element={<Tool/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

