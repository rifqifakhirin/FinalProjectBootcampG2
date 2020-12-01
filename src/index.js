import React from 'react';
import {
    CheckBpjs,
    CheckPdam,
    Display,
    Login,
    PayBpjs,
    PayPdam,
    Register
} from './page'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
                    <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                    <Stack.Screen name="Display" component={Display} options={{headerShown:false}} />
                    <Stack.Screen name="CheckBpjs" component={CheckBpjs} options={{headerShown:false}} />
                    <Stack.Screen name="CheckPdam" component={CheckPdam} options={{headerShown:false}} />
                    <Stack.Screen name="PayBpjs" component={PayBpjs} options={{headerShown:false}} />
                    <Stack.Screen name="PayPdam" component={PayPdam} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
         );
    }
}
 
export default App;