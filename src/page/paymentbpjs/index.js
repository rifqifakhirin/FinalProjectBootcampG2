import React, { Component } from 'react';
import "./paybpjs.css"
import Bpjs from "../../img/bpjs.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';

class PaymentBPJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.match.params.bankAccount,
            memberNum : ""
        }
        this.changeMemberNum = this.changeMemberNum.bind(this);
    }

    cekBpjs = (e) => {
        e.preventDefault();
        let modelBill = {
            memberNum : this.state.memberNum,
        }
        BankServices.getBillBpjs(modelBill).then(res =>{
            // let userBank = res.data;
            this.setState({memberNum : res.data});
            this.props.history.push(`/paybpjs/${this.state.bankAccount}/${this.state.memberNum}`);
        });
    }

    changeMemberNum = (event) => {
        this.setState({memberNum : event.target.value});
    }

    backHome = () => {
        this.props.history.push(`/display/${this.state.bankAccount}`);
    }
    

    render() { 
        return ( 
            <div className="paymentBPJS">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">BPJS Payment Check</h2>
                                <p>Insert an ID number :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faUser} /> 
                                    </div> 
                                    <input type="text" placeholder="ID Number"
                                    value={this.state.memberNum} onChange={this.changeMemberNum}></input>
                                </div>
                                <input type="submit" value="Check Bill" className="btn solid"
                                onClick={this.cekBpjs}></input>
                                <input type="submit" value="Back Home" className="btn solid"
                                onClick={this.backHome}></input>
                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>BPJS Services</h3>
                                <p>
                                BPJS is the organizer of the social security program in the health sector which is one of the five programs 
                                in the National Social Security System (SJSN), namely Health Insurance, 
                                Work Accident Insurance, Old Age Security, Pension Security, and Death Security.
                                </p>
                            </div>
                            <img src={Bpjs} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PaymentBPJS;