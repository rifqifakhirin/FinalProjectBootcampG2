import React from 'react';
import { 
    ScrollView, 
    View, 
    StyleSheet, 
    Text, 
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDoorOpen, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import BankServices from './../../service/BankServices'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bankAccount : this.props.route.params.bankAccount,
            fullName : "",
            balance : "",
        }
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
            <ScrollView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.containerTitle}>
                <View style={styles.logoTitle}>
                    <FontAwesomeIcon icon={faDoorOpen} size={50} color="white" />
                </View>
                <View style={styles.TeksTitle}>
                    <Text style={styles.TeksTeks}>HI, {this.state.fullName}</Text>
                </View>
            </View>
            <View style={styles.imagePanorama}>
                <Image source={require("../../img/display.png")}
                    style={styles.logoImage1}
                    resizeMode={"contain"}
                />
                <Image source={require("../../img/bpjs.png")}
                    style={styles.logoImage2}
                    resizeMode={"contain"}
                />
                <Image source={require("../../img/login.png")}
                    style={styles.logoImage3}
                    resizeMode={"contain"}
                />
                <Image source={require("../../img/register.png")}
                    style={styles.logoImage4}
                    resizeMode={"contain"}
                />                
            </View>
            <View style={styles.containerFillerTop}>
                <View style={styles.containerFillerTopLeft}>
                    <Text style={styles.topTeks1}>Your Balance:</Text>
                    <Text style={styles.topTeks2}>Rp {this.state.balance}</Text>
                    <Text style={styles.topTeks3}>Your Account Bank</Text>
                    <Text style={styles.topTeks4}>{this.state.bankAccount}</Text>
                </View>
                <View style={styles.containerFillerTopRight}>
                    <FontAwesomeIcon icon={faMoneyBillWave} color="#4481eb" size={80}/>
                </View>                
            </View>
            <View style={styles.titleOther}>
                <Text style={styles.otherTeks1}>
                    Enjoy Our Services :
                </Text>
            </View>
            <View style={styles.containerFiller}>
                <TouchableOpacity style={styles.fillerButton}
                onPress={()=>this.props.navigation.navigate("CheckBpjs", {bankAccount: this.state.bankAccount})}>
                    <Text style={styles.buttonTeks}>BPJS Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fillerButton}
                onPress={()=>this.props.navigation.navigate("CheckPdam", {bankAccount: this.state.bankAccount})}>
                    <Text style={styles.buttonTeks}>PDAM Payment</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.fillerButton2}
            onPress={()=>this.props.navigation.navigate("Login")}>
                    <Text style={styles.buttonTeks}>Logout</Text>
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
        width: '20%',
        marginTop: 15
    },
    imagePanorama: {
        flexDirection: "row"
    },
    logoImage1: {
        width: 100, 
        height: 100,
        marginLeft: 10
    },
    logoImage2: {
        width: 90, 
        height: 90,
        marginLeft: 10,
        marginTop: 5
    },
    logoImage3: {
        width: 80, 
        height: 80,
        marginLeft: 10,
        marginTop: 10
    },
    logoImage4: {
        width: 70, 
        height: 70,
        marginLeft: 10,
        marginTop: 15
    },
    TeksTitle: {
        width: '80%',
        color: 'white'
    },
    TeksTeks: {
        color: 'white',
        marginTop: 20,
        marginLeft: 5,
        fontFamily: 'Poppins-Medium',
        fontSize: 25
    },
    containerFillerTop: {
        height: 180,
        backgroundColor: '#E1E1E1',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        paddingTop: 10,
        flexDirection: "row"
    },
    containerFillerTopLeft: {
        width: '70%'
    },
    containerFillerTopRight: {
        width: '30%',
        paddingTop: 35
    },
    topTeks1: {
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Light',
    },
    topTeks2: {
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Medium',
        color: '#4481eb',
        fontSize: 20
    },
    topTeks3: {
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Light',
    },
    topTeks4: {
        marginLeft: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 20
    },
    containerFiller: {
        height: 190,
        backgroundColor: '#ECEEEE',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        paddingTop: 20
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
    fillerButton2: {
        backgroundColor: '#4481eb',
        marginLeft: 70,
        marginRight: 70,
        marginTop: 25,
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
 
export default Display;