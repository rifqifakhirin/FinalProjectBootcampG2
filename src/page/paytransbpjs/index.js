import React, { Component } from 'react';
import "./transbpjs.css"
import Bpjs from "../../img/bpjs.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';

class PayTransBPJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.match.params.bankAccount,
            memberNum : this.props.match.params.memberNum,
            fullName : "",
            bill : "",
            activePassTrans: ""
        }
        this.changeActivePassTrans = this.changeActivePassTrans.bind(this);
    }

    payBPJS = (e) => {
        e.preventDefault();
        let modelTrans = {
            activePassTrans : this.state.activePassTrans
        }
        BankServices.letPayBPJS(this.state.memberNum, modelTrans).then(res =>{
            alert("payment success");
            this.props.history.push(`/display/${this.state.bankAccount}`);
        });
    }

    changeActivePassTrans = (event) => {
        this.setState({activePassTrans : event.target.value});
    }

    componentDidMount(){
        BankServices.getDisplayBPJS(this.state.memberNum).then( (res) => {
            let memberBPJS = res.data;
            this.setState({
                fullName : memberBPJS.fullName,
                bill : memberBPJS.bill
            });
        });
    }

    backHome = () => {
        this.props.history.push(`/display/${this.state.bankAccount}`);
    }

    render() { 
        return ( 
            <div className="paytransBPJS">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">BPJS Payment</h2>
                                <h2 className="title">Transaction</h2>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <p className="detail">Name :</p>
                                    </div>
                                    <p className="memberName">{this.state.fullName}</p>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <p className="detail">Number:</p>
                                    </div>
                                    <p className="memberName">{this.state.memberNum}</p>
                                </div>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <p className="detail">Bill (Rp):</p>
                                    </div>
                                    <p className="memberName">{this.state.bill}</p>
                                </div>
                                <p>Insert Password Transaction Here :</p>
                                <div className="input-field">
                                    <div className="iconLogin">
                                        <FontAwesomeIcon icon={faLock} /> 
                                    </div> 
                                    <input type="text" placeholder="Password Transaction"
                                    value={this.state.activePassTrans} onChange={this.changeActivePassTrans}></input>
                                </div>
                                <input type="submit" value="Pay Now" className="btn solid"
                                onClick={this.payBPJS}></input>
                                <input type="submit" value="Back to Pay Check" className="btn solid"
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
 
export default PayTransBPJS;