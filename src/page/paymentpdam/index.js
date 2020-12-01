import React, { Component } from 'react';
import "./paypdam.css"
import Pdam from "../../img/pdam.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';


class PaymentPDAM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.match.params.bankAccount,
            memberNum : ""
        }
        this.changeMemberNum = this.changeMemberNum.bind(this);
    }

    cekPdam = (e) => {
        e.preventDefault();
        let modelBill = {
            memberNum : this.state.memberNum,
        }
        console.log(modelBill.memberNum);
        BankServices.getBillPdam(modelBill).then(res =>{
            // let userBank = res.data;
            this.setState({memberNum : res.data});
            this.props.history.push(`/paypdam/${this.state.bankAccount}/${this.state.memberNum}`);
        });
    }

    changeMemberNum = (event) => {
        this.setState({memberNum : event.target.value});
        console.log(this.state.memberNum);
    }

    backHome = () => {
        this.props.history.push(`/display/${this.state.bankAccount}`);
    }

    render() { 
        return ( 
            <div className="paymentPDAM">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">PDAM Payment Check</h2>
                                <p>Insert a member number :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faUser} /> 
                                    </div> 
                                    <input type="text" placeholder="Member number"
                                     value={this.state.memberNum} onChange={this.changeMemberNum}></input>
                                </div>
                                <input type="submit" value="Check Bill" className="btn solid"
                                onClick={this.cekPdam}></input>
                                <input type="submit" value="Back Home" className="btn solid"
                                onClick={this.backHome}></input>
                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>PDAM Services</h3>
                                <p>
                                PDAM is a regionally owned business unit, which is engaged 
                                in the distribution of clean water for the general public.
                                </p>
                            </div>
                            <img src={Pdam} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PaymentPDAM;


                                