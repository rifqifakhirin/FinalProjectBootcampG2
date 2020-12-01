import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "../src/page/loginPage"
import RegisterPage from "../src/page/registerPage"
import DisplayPage from "../src/page/display"
import PaymentBPJS from "../src/page/paymentbpjs"
import PayTransBPJS from "../src/page/paytransbpjs"
import PayTransPDAM from "../src/page/paytranspdam"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
