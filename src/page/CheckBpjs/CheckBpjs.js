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
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BankServices from './../../service/BankServices'

class CheckBpjs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.route.params.bankAccount,
            memberNum : ""
        }
    }

    bpjsCheck = () => {
        if (this.state.memberNum === "") {
            alert("data tidak boleh kosong")
        } else {
            let modelBill = {
                memberNum : this.state.memberNum,
            }
            BankServices.getBillBpjs(modelBill)
                .then(res =>{this.setState({memberNum : res.data});
                    this.props.navigation.navigate("PayBpjs", {bankAccount: this.state.bankAccount,
                    memberNum: this.state.memberNum});
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
                        <Image source={require("../../img/bpjs.png")}
                                style={styles.logoImage}
                                resizeMode={"contain"}
                        />
                    </View>
                    <View style={styles.TeksTitle}>
                        <Text style={styles.TeksTeks}>BPJS Payment Check</Text>
                    </View>
                </View>
                <View style={styles.teksOther}>
                    <Text style={styles.otherTeks2}>
                        BPJS is the organizer of the social security program in the health sector which is one of the five programs 
                        in the National Social Security System (SJSN), namely Health Insurance, 
                        Work Accident Insurance, Old Age Security, Pension Security, and Death Security.
                    </Text>
                </View>
                <View style={styles.containerFiller}>
                    <View style={styles.containerInput}>
                        <View style={styles.inputIcon}>
                            <FontAwesomeIcon icon={faUser} />
                        </View>
                        <TextInput placeholder="Insert the ID Number" onChangeText={text=>this.setState({memberNum: text})}
                        style={styles.inputTeks}></TextInput>
                    </View>
                    <TouchableOpacity style={styles.fillerButton} onPress={this.bpjsCheck}> 
                        <Text style={styles.buttonTeks}>Check Bill</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.fillerButton2}
                onPress={()=>this.props.navigation.navigate("Display")}>
                        <Text style={styles.buttonTeks}>Back</Text>
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
        height: 180,
        backgroundColor: '#ECEEEE',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        paddingTop: 20
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
 
export default CheckBpjs;