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
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import BankServices from './../../service/BankServices'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            password : "",
            bankAccount : "",
        }
    }

    loginAct = () => {
        if (this.state.userName === "" || this.state.password === "") {
            alert("Username atau password tidak boleh kosong")
        } else {           
            let modelLogin = {
                userName : this.state.userName,
                password : this.state.password
            }
            BankServices.logUser(modelLogin)
            .then(response => {
                this.setState({bankAccount: response.data});
                this.props.navigation.navigate("Display", {bankAccount: this.state.bankAccount})
            })
            .catch(error =>{
                console.log(error);
            });
        }
        
    }

    render() { 
        return (
            <ScrollView style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.containerTitle}>
                    <View style={styles.logoTitle}>
                        <Image source={require("../../img/login.png")}
                                style={styles.logoImage}
                                resizeMode={"contain"}
                        />
                    </View>
                    <View style={styles.TeksTitle}>
                        <Text style={styles.TeksTeks}>LOGIN</Text>
                    </View>
                </View>
                <View style={styles.containerFiller}>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faUser} />
                        </View>
                        <TextInput placeholder="User Name" onChangeText={text=>this.setState({userName: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faLock} />
                        </View>
                        <TextInput placeholder="PIN e-Banking" onChangeText={text=>this.setState({password: text})}
                        secureTextEntry
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <TouchableOpacity onPress={this.loginAct}
                    style={styles.fillerButton}>
                        <Text style={styles.buttonTeks}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleOther}>
                    <Text style={styles.otherTeks1}>
                        Don't Have an e-Banking Account Yet?
                    </Text>
                </View>
                <View style={styles.teksOther}>
                    <Text style={styles.otherTeks2}>
                        If you have opened an account at our bank, registering an e-Banking account
                        is very easy. Just fill in the form provided.
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Register")}
                style={styles.fillerButton2}>
                        <Text style={styles.buttonTeks}>Register</Text>
                </TouchableOpacity>                  
            </ScrollView>
        );
    }
}
//#fff 
const styles = StyleSheet.create({
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
        height: 300,
        backgroundColor: '#ECEEEE',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        paddingTop: 40
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
 
export default Login;