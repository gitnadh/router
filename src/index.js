import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App.js';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));
