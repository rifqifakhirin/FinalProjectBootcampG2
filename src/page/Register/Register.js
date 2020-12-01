import React from 'react';
import { 
    ScrollView, 
    StyleSheet,
    View,
    Text,
    StatusBar, 
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
    faUser, 
    faLock,
    faMoneyCheckAlt,
    faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import BankServices from './../../service/BankServices'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : "",
            debetNum : "",
            pinATM : "",
            username : "",
            password : "",
            repassword : "",
            passwordTransaction : "",
            repasswordTransaction : ""
        }
    }

    registerAct = () => {
        if (this.state.password === this.state.repassword 
            && 
            this.state.passwordTransaction === this.state.repasswordTransaction) {
            let modelRegister = {
                bankAccount : this.state.bankAccount, 
                debetNum : this.state.debetNum,
                pinATM : this.state.pinATM, 
                username : this.state.username, 
                password : this.state.password,
                passwordTransaction : this.state.passwordTransaction
            }
            BankServices.regUser(modelRegister)
            .then(res =>{
                this.props.navigation.navigate("Login");
            })
            .catch(error =>{
                console.log(error);
            });
        } else {
            alert("pin e-banking atau password transaksi tidak sama");
        }

    }

    render() { 
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.containerTitle}>
                    <View style={styles.logoTitle}>
                        <Image source={require("../../img/register.png")}
                                style={styles.logoImage}
                                resizeMode={"contain"}
                        />
                    </View>
                    <View style={styles.TeksTitle}>
                        <Text style={styles.TeksTeks}>REGISTRATION</Text>
                    </View>
                </View>
                <View style={styles.containerFiller}>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faMoneyCheckAlt} />
                        </View>
                        <TextInput placeholder="Bank Account"
                        onChangeText={text=>this.setState({bankAccount: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faCreditCard} />
                        </View>
                        <TextInput placeholder="Debet Number"
                        onChangeText={text=>this.setState({debetNum: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="ATM PIN"
                        secureTextEntry onChangeText={text=>this.setState({pinATM: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <Text style={styles.detailInput}>Username min 6 chars, at least one uppercase,</Text>
                    <Text style={styles.detailInput}>one lowercase and one number :</Text>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faUser} />
                        </View>
                        <TextInput placeholder="Create Username"
                        onChangeText={text=>this.setState({username: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <Text style={styles.detailInput}>e-PIN must have 6 chars, all numbers :</Text>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="Create PIN e-banking"
                        secureTextEntry onChangeText={text=>this.setState({password: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="Retype PIN e-banking"
                        secureTextEntry onChangeText={text=>this.setState({repassword: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <Text style={styles.detailInput}>PIN min 6 chars, at least one letter </Text>
                    <Text style={styles.detailInput}>and one number :</Text>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="Create PIN transaction"
                        secureTextEntry onChangeText={text=>this.setState({passwordTransaction: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="Retype PIN transaction"
                        secureTextEntry onChangeText={text=>this.setState({repasswordTransaction: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <TouchableOpacity onPress={this.registerAct} style={styles.fillerButton}>
                        <Text style={styles.buttonTeks}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleOther}>
                    <Text style={styles.otherTeks1}>
                        Already Have an e-Banking Account?
                    </Text>
                </View>
                <View style={styles.teksOther}>
                    <Text style={styles.otherTeks2}>
                        Discover the latest features of our services. 
                        Enjoy the convenience of transactions for your needs.
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}
                style={styles.fillerButton2}>
                        <Text style={styles.buttonTeks}>Login</Text>
                </TouchableOpacity>                  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4481eb',
    },
    containerTitle: {
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 15,
        marginRight: 15,
    },
    logoTitle: {
        width: '30%'
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
        height: 800,
        backgroundColor: '#ECEEEE',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        paddingTop: 40
    },
    detailInput: {
        marginLeft: 20
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
    },
    buttonTeks: {
        textAlign: "center",
        fontSize: 15,
        color: 'white'
    },
    titleOther: {
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    otherTeks1: {
        textAlign: "center",
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: 'white'
    },
    teksOther: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10
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
 
export default Register;