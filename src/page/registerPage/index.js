import React, { Component } from 'react';
import "./register.css"
import registerIMG from "../../img/register.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faMoneyCheckAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : 0,
            debetNum : "",
            pinATM : "",
            username : "",
            password : "",
            repassword : "",
            passwordTransaction : "",
            repasswordTransaction : ""
        }
        this.signIn = this.signIn.bind(this);
        this.changeBankAccount = this.changeBankAccount.bind(this);
        this.changeDebetNum = this.changeDebetNum.bind(this);
        this.changePinATM = this.changePinATM.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeRePassword = this.changeRePassword.bind(this);
        this.changePasswordTransaction = this.changePasswordTransaction.bind(this);
        this.changeRePasswordTransaction = this.changeRePasswordTransaction.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.repassword
            && this.state.passwordTransaction === this.state.repasswordTransaction){
                let modelRegister = {
                    bankAccount : this.state.bankAccount, 
                    debetNum : this.state.debetNum,
                    pinATM : this.state.pinATM, 
                    username : this.state.username, 
                    password : this.state.password,
                    passwordTransaction : this.state.passwordTransaction
                }
                BankServices.regUser(modelRegister).then(res =>{
                    this.props.history.push("/login");
                });
                alert("registration success");
                
        } else {
            console.log("registration failed")
            this.props.history.push("/register");
        }
    }

    changeBankAccount = (event) => {
        this.setState({bankAccount : event.target.value});
    }
    changeDebetNum = (event) => {
        this.setState({debetNum : event.target.value});
    }
    changePinATM = (event) => {
        this.setState({pinATM : event.target.value});
    }
    changeUsername = (event) => {
        this.setState({username : event.target.value});
    }
    changePassword = (event) => {
        this.setState({password : event.target.value});
    }
    changeRePassword = (event) => {
        this.setState({repassword : event.target.value});
    }
    changePasswordTransaction = (event) => {
        this.setState({passwordTransaction : event.target.value});
    }
    changeRePasswordTransaction = (event) => {
        this.setState({repasswordTransaction : event.target.value});
    }
    signIn = () => {
        this.props.history.push("/login");
    } 

    render() { 
        return ( 
            <div className="register">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">REGISTRATION</h2>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faMoneyCheckAlt} /> 
                                    </div> 
                                    <input type="number" placeholder="Bank Account"
                                        value={this.state.bankAccount} onChange={this.changeBankAccount}></input>                                    
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faCreditCard} /> 
                                    </div>
                                    <input type="text" placeholder="Debet Number"
                                    value={this.state.debetNum} onChange={this.changeDebetNum}></input>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="ATM PIN"
                                    value={this.state.pinATM} onChange={this.changePinATM}></input>
                                </div>
                                <p>min 6 chars, at least one uppercase, </p>
                                <p>one lowercase and one number :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faUser} /> 
                                    </div>
                                    <input type="text" placeholder="Create Username"
                                    value={this.state.username} onChange={this.changeUsername}></input>
                                </div>
                                <p>must have 6 chars, all numbers :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="Create PIN e-banking"
                                    value={this.state.password} onChange={this.changePassword}></input>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="Retype PIN e-banking"
                                    value={this.state.repassword} onChange={this.changeRePassword}></input>
                                </div>
                                <p>min 6 chars, at least one letter </p>
                                <p>and one number :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="Create PIN transaction"
                                    value={this.state.passwordTransaction} onChange={this.changePasswordTransaction}></input>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="Retype PIN transaction"
                                    value={this.state.repasswordTransaction} onChange={this.changeRePasswordTransaction}></input>
                                </div>                                
                                <input type="submit" value="Register" className="btn solid"
                                    onClick={this.registerUser}></input>
                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Already Have an e-Banking Account?</h3>
                                <p>
                                    Discover the latest features of our services. Enjoy the convenience of transactions for your needs.
                                </p>
                                <button className="btn transparent" id="sign-in-btn" onClick={this.signIn}>
                                    Login
                                </button>
                            </div>
                            <img src={registerIMG} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default RegisterPage;