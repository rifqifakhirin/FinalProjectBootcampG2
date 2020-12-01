import React from 'react';
import { 
    ScrollView, 
    View, 
    StyleSheet, 
    Text, 
    StatusBar, 
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faIdCard, faLock, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import BankServices from './../../service/BankServices'

class PayPdam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.route.params.bankAccount,
            memberNum : this.props.route.params.memberNum,
            fullName : "",
            bill : "",
            activePassTrans: ""
        }
    }

    pdamPay =()=> {
        if (this.state.activePassTrans === "") {
            alert("password tidak boleh kosong")
        } else {
            let modelTrans = {
                activePassTrans : this.state.activePassTrans
            }
            BankServices.letPayPDAM(this.state.memberNum, modelTrans).then(res =>{
                alert("payment success");
                this.props.navigation.navigate("Display", {bankAccount: this.state.bankAccount});
            });
        }
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

    render() { 
        return (
            <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.containerTitle}>
                <View style={styles.logoTitle}>
                    <Image source={require("../../img/pdam.png")}
                            style={styles.logoImage}
                            resizeMode={"contain"}
                    />
                </View>
                <View style={styles.TeksTitle}>
                    <Text style={styles.TeksTeks}>PDAM Payment Transaction</Text>
                </View>
            </View>
            <View style={styles.containerFiller}>
                <Text style={styles.detailInput}>Name :</Text>
                <View style={styles.containerInput2}>
                    <View style={styles.inputIcon2}>
                        <FontAwesomeIcon icon={faUser} />
                    </View>
                    <Text style={styles.inputTeks2}>{this.state.fullName}</Text>
                </View>
                <Text style={styles.detailInput}>Member Number :</Text>
                <View style={styles.containerInput2}>
                    <View style={styles.inputIcon2}>
                        <FontAwesomeIcon icon={faIdCard} />
                    </View>
                    <Text style={styles.inputTeks2}>{this.state.memberNum}</Text>
                </View>
                <Text style={styles.detailInput}>Total Bill :</Text>
                <View style={styles.containerInput2}>
                    <View style={styles.inputIcon2}>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </View>
                    <Text style={styles.inputTeks2}>Rp {this.state.bill}</Text>
                </View>
                <Text style={styles.detailInput}>Password Transaction :</Text>
                <View style={styles.containerInput}>
                    <View style={styles.inputIcon}>
                        <FontAwesomeIcon icon={faLock} />
                    </View>
                    <TextInput placeholder="Insert your password here"
                    secureTextEntry onChangeText={text=>this.setState({activePassTrans: text})}
                    style={styles.inputTeks}></TextInput>
                </View>
                <TouchableOpacity style={styles.fillerButton}
                onPress={this.pdamPay}>
                    <Text style={styles.buttonTeks}>Pay Now</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.fillerButton2}
            onPress={()=>this.props.navigation.navigate("CheckPdam", {bankAccount: this.state.bankAccount})}>
                    <Text style={styles.buttonTeks}>Back</Text>
                </TouchableOpacity>                  
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    detailInput: {
        fontFamily: 'Poppins-Medium',
        marginLeft: 20
    },
    container: {
        backgroundColor: '#4481eb',
    },
    containerTitle: {
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
        // borderColor: '#EC6848',
        // borderWidth:1
    },
    logoTitle: {
        width: '30%',
        paddingTop: 10
    },
    logoImage: {
        width: 100, 
        height: 100,
        borderTopLeftRadius:150,
        borderBottomRightRadius: 520
    },
    TeksTitle: {
        width: '70%',
        color: 'white'
    },
    TeksTeks: {
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
        fontFamily: 'Poppins-Medium',
        fontSize: 30
    },
    containerFiller: {
        height: 480,
        backgroundColor: '#ECEEEE',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        paddingTop: 20
    },
    containerInput2: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 5,
        height: 40
    },
    inputIcon2: {
        width: '15%',
        marginTop: 10,
        marginLeft: 20,
        marginRight: -20,
    },
    inputTeks2: {
        width: '85%',
        fontFamily: 'Poppins-Light',
        color: 'blue',
        fontSize: 20,
        backgroundColor: '#E1E1E1',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#ADADAD'
    },
    containerInput: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 5
    },
    inputIcon: {
        width: '15%',
        marginTop: 15,
        marginLeft: 15,
        marginRight: -15,
    },
    inputTeks: {
        width: '85%',
        fontFamily: 'Poppins-Light',
        color: '#333',
        backgroundColor: '#E1E1E1',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#ADADAD'
    },
    fillerButton: {
        backgroundColor: '#4481eb',
        margin: 15,
        height: 50,
        borderRadius: 30,
        paddingTop: 15,
        // borderBottomWidth: 7,
        // borderBottomColor: '#396ECB',
        // borderLeftWidth: 3,
        // borderLeftColor: '#396ECB',
        // borderRightColor:'#396ECB',
        // borderRightWidth: 3
    },
    buttonTeks: {
        textAlign: "center",
        fontSize: 15,
        color: 'white'
    },
    teksOther: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 20
    },
    otherTeks2: {
        textAlign: "center",
        color: 'white',
        fontFamily: 'Poppins-Light',
        fontSize: 15
    },
    fillerButton2: {
        backgroundColor: '#4481eb',
        marginLeft: 70,
        marginRight: 70,
        marginTop: 15,
        marginBottom: 15,
        height: 50,
        borderRadius: 30,
        paddingTop: 15,
        borderBottomWidth: 7,
        borderBottomColor: '#396ECB',
        borderLeftWidth: 3,
        borderLeftColor: '#396ECB',
        borderRightColor:'#396ECB',
        borderRightWidth: 3
    },
})
 
export default PayPdam;