import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
