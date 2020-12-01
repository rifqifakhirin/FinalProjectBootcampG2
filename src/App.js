import logo from './logo.svg';
import './App.css';
import HeaderApp from './component/template/header';
import FooterApp from './component/template/footer';
import LoginPage from './page/loginPage';
import RegisterPage from './page/registerPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DisplayPage from './page/display';
import PaymentPDAM from './page/paymentpdam';
import PayTransPDAM from './page/paytranspdam';
import PaymentBPJS from './page/paymentbpjs';
import PayTransBPJS from './page/paytransbpjs';

function App() {
  return (
    <Router>
        <Switch>
          <Route path ="/" exact component = {LoginPage}></Route>
          <Route path ="/register" component = {RegisterPage}></Route>
          <Route path ="/login" component = {LoginPage}></Route>
          <Route path ="/display/:bankAccount" component = {DisplayPage}></Route>
          <Route path ="/cekpdam/:bankAccount" component = {PaymentPDAM}></Route>
          <Route path ="/paypdam/:bankAccount/:memberNum" component = {PayTransPDAM}></Route>
          <Route path ="/cekbpjs/:bankAccount" component = {PaymentBPJS}></Route>
          <Route path ="/paybpjs/:bankAccount/:memberNum" component = {PayTransBPJS}></Route>
        </Switch>        
    </Router>    
  );
}

export default App;
