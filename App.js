/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SplashHandler from './src/Components/Splash-Login/SplashHandler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return(
  <NavigationContainer>
    <SplashHandler/>
  </NavigationContainer>
  );
};



export default App;
