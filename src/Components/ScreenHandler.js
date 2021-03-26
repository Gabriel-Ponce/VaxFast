import React from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SurveyHome from './Surveys/SurveyHome'
import Survey from './Surveys/Survey'
import SurveyResult from './Surveys/SurveyResult';
import LogoScreen from './Splash-Login/LogoScreen';
import Login from './Splash-Login/Login';
const Stack = createStackNavigator();

const ScreenHandler = () => {

return(
    
    <Stack.Navigator>
        <Stack.Screen name = "LogoScreen" component = {LogoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Login" component = {Login} options = {{ headerShown: false }}/>
        <Stack.Screen name = "SurveyHome" component = {SurveyHome} options = {{headerShown: false}}/>
        <Stack.Screen name = "Survey" component = {Survey}/>
        <Stack.Screen name = "SurveyResult" component = {SurveyResult} options = {{headerShown: false}}/>
    </Stack.Navigator>

)

}

export default ScreenHandler;