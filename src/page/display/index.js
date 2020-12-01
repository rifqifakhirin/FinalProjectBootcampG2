import React, { Component } from 'react';
import "./display.css"
import Display from "../../img/display.png"
import BankServices from '../../services/BankServices';


class DisplayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.match.params.bankAccount,
            fullName : "",
            balance : "",
        }
        this.pDAM = this.pDAM.bind(this);
        this.bPJS = this.bPJS.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    pDAM = () => {
        this.props.history.push(`/cekpdam/${this.state.bankAccount}`);
    }
    bPJS = () => {
        this.props.history.push(`/cekbpjs/${this.state.bankAccount}`);
    }
    logOut = () => {
        this.props.history.push("/login");
    }

    componentDidMount(){
        BankServices.getDisplay(this.state.bankAccount).then( (res) => {
            let userBank = res.data;
            this.setState({
                fullName : userBank.fullName,
                balance : userBank.balance
            });
        });
    }
    

    render() { 
        return ( 
            <div className="display">
                <div className="container sign-up-mode">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                            <h2 className="title">Hi {this.state.fullName},</h2>
                                <p>Bank Account: {this.state.bankAccount}</p>
                                <br></br>
                                <br></br>
                                <p>Your Balance:</p>
                                <br></br>
                                <h2>Rp {this.state.balance} ,-</h2>
                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Enjoy Our Services</h3>
                                <br></br>
                                <button className="btn transparent" id="sign-in-btn" onClick={this.bPJS}>
                                    BPJS Payment
                                </button>
                                <br></br>
                                <br></br>
                                <button className="btn transparent" id="sign-in-btn" onClick={this.pDAM}>
                                    PDAM Payment
                                </button>
                                <br></br>
                                <br></br>
                                <button className="btn transparent" id="sign-in-btn" onClick={this.logOut}>
                                    Logout
                                </button>
                            </div>
                            <br></br>
                            <img src={Display} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DisplayPage;