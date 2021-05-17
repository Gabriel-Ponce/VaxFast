import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import SurveyHome from './Surveys/SurveyHome'
import Survey from './Surveys/Survey'
import SurveyResult from './Surveys/SurveyResult';
import LogoScreen from './Splash-Login/LogoScreen';
import Login from './Splash-Login/Login';
import VaccineMapHome from './VaccineMaps/VaccineMapHome';
import Settingsmain from './Settings/Settingsmain';
import SurveyDisplay from './Settings/SurveyDisplay';
import VaccineMap from './VaccineMaps/VaccineMap';
import VaccineMapSelect from './VaccineMaps/VaccineMapSelect';
import VaccineCountrySelect from './VaccineMaps/VaccineCountrySelect'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const TabHandler = () => {
    return(
    <Tab.Navigator shifting = {true}>
        <Tab.Screen name = "SurveyHome" component = {SurveyHome}  options = {{headerShown: false,  tabBarIcon: ()=> {
        return <Image
        style = {styles.img}
        source= {require('../Assets/Poll.png')}
        
      />
        }, 
        tabBarColor: '#0E92DF'}}/>

        <Tab.Screen name = "VaccineMapHome" component = {VaccineMapHome}  options = {{headerShown: false,  tabBarIcon:() => {
            return <Image
            style = {styles.img2}
            source= {require('../Assets/VaxIco.png')}/>
        }, tabBarColor: '#0EDF97'}}/>

        <Tab.Screen name = "Setting" component = {Settingsmain}  options = {{headerShown: false,  tabBarIcon:() => {
            return <Image
            style = {styles.img2}
            source= {require('../Assets/SettingsIco.png')}/>
        }, tabBarColor: '#8605B5'}}/>
    </Tab.Navigator>
    )
}
const ScreenHandler = () => {

return(
   
    <Stack.Navigator>
        <Stack.Screen name = "LogoScreen" component = {LogoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name = "Login" component = {Login} options = {{ headerShown: false }}/>
        <Stack.Screen name = "TabHandler" component = {TabHandler}  options={{ headerShown: false }}/>
        <Stack.Screen name = "SurveyResult" component = {SurveyResult} options = {{headerShown: false}}/>
        <Stack.Screen name = "Survey" component = {Survey}/>
        <Stack.Screen name = "SurveyDisplay" component = {SurveyDisplay}/>
        <Stack.Screen name = "VaccineMap" component = {VaccineMap}/>
        <Stack.Screen name = "VaccineCountrySelect" component = {VaccineCountrySelect}/>
        <Stack.Screen name = "VaccineMapSelect" component = {VaccineMapSelect}/>
    </Stack.Navigator>
    
    
)

}

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25
    },
    img2: {
        width: 40,
        height: 40,
        bottom: 7
    }
})

export default ScreenHandler;