import React from 'react';
import {View, Text} from 'react-native';
import LogoScreen from './LogoScreen';
import Login from './Login';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();



const SplashHandler = () => {
    

return(
  <Stack.Navigator>
    <Stack.Screen name = "LogoScreen" component = {LogoScreen} options={{ headerShown: false }}/>
    <Stack.Screen name = "Login" component = {Login} options = {{ headerShown: false }}/>
  </Stack.Navigator>
)
}


export default SplashHandler;