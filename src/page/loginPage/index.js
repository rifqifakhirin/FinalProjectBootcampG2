import React, { Component } from 'react';
import "./login.css"
import loginIMG from "../../img/login.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName : "",
            password : "",
            bankAccount : "",
        }
        this.signUp = this.signUp.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    logUser = (e) => {
        e.preventDefault();
        let modelLogin = {
            userName : this.state.userName,
            password : this.state.password
        }
        BankServices.logUser(modelLogin).then(res =>{
            // let userBank = res.data;
            this.setState({bankAccount : res.data});
            this.props.history.push(`/display/${this.state.bankAccount}`);
        });
    }

    changeUserName = (event) => {
        this.setState({userName : event.target.value});
    }
    changePassword = (event) => {
        this.setState({password : event.target.value});
    }

    signUp = () => {
        this.props.history.push("/register");
    }
    

    render() { 
        return ( 
            <div className="login">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">LOGIN</h2>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faUser} /> 
                                    </div>                                                   
                                    <input type="text" placeholder="User Name"
                                    value={this.state.userName} onChange={this.changeUserName}></input>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="password" placeholder="PIN e-Banking"
                                    value={this.state.password} onChange={this.changePassword}></input>
                                </div>
                                <input type="submit" value="Login" className="btn solid"
                                onClick={this.logUser}></input>
                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Don't Have an e-Banking Account Yet?</h3>
                                <p>
                                    If you have opened an account at our bank, registering an e-Banking account
                                    is very easy. Just fill in the form provided.
                                </p>
                                <button className="btn transparent" id="sign-up-btn" onClick={this.signUp}>
                                    Register
                                </button>
                            </div>
                            <img src={loginIMG} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LoginPage;