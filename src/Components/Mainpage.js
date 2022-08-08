import logo from './../logo.svg';
import './../App.css';
import React from "react";
import Clock from './../Components/TimeUtils'

function Mainpage(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    欢迎来到玩家俱乐部
                </h2>
                <Clock/>
            </header>
        </div>
    );
}

export default Mainpage;