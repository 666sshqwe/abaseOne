import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Mainpage from './Components/Mainpage'

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
    <BrowserRouter>
    <App />
        {/*<Mainpage />*/}
    </BrowserRouter>
);

reportWebVitals();
