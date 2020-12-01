import React, { Component } from 'react';
import "./transpdam.css"
import Pdam from "../../img/pdam.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import BankServices from '../../services/BankServices';


class PayTransPDAM extends Component {
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

    payPDAM = (e) => {
        e.preventDefault();
        let modelTrans = {
            activePassTrans : this.state.activePassTrans
        }
        BankServices.letPayPDAM(this.state.memberNum, modelTrans).then(res =>{
            alert("payment success");
            this.props.history.push(`/display/${this.state.bankAccount}`);
        });
    }

    changeActivePassTrans = (event) => {
        this.setState({activePassTrans : event.target.value});
    }

    componentDidMount(){
        BankServices.getDisplayPDAM(this.state.memberNum).then( (res) => {
            let memberPDAM = res.data;
            this.setState({
                fullName : memberPDAM.fullName,
                bill : memberPDAM.bill
            });
        });
    }
    
    backHome = () => {
        this.props.history.push(`/display/${this.state.bankAccount}`);
    }

    render() { 
        return ( 
            <div className="paytransPDAM">
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form action="#" className="sign-in-form">
                                <h2 className="title">PDAM Payment</h2>
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
                                onClick={this.payPDAM}></input>
                                <input type="submit" value="Back to Pay Check" className="btn solid"
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
 
export default PayTransPDAM;