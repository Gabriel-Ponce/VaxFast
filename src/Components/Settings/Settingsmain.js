import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {onGooglesignOut} from '../Social-Login/GoogleLogin'
import auth from '@react-native-firebase/auth';


const Settingsmain = ({navigation}) => {
    return(
    <View style = {styles.container}>
        <Pressable style = {styles.Signoutbut} onPress = {() => onGooglesignOut().then(() => navigation.navigate('Login'))}>
            <Text style = {styles.Signouttxt}>
                Sign Out
            </Text>
        </Pressable>
        <Pressable style = {styles.but} onPress = {() => {}}>
            <Text style = {styles.Signouttxt}>
                Info
            </Text>
        </Pressable>
        <Pressable style = {styles.but2} onPress = {() => navigation.navigate('SurveyDisplay')}>
            <Text style = {styles.Signouttxt}>
                Surveys' Result
            </Text>
        </Pressable>
    </View>
    )
}

export default Settingsmain;

const styles = StyleSheet.create({

container: {
    backgroundColor: 'white',
    position: 'absolute',
    width: 500,
    height: 1000
},

Signoutbut: {
    left: 40,
    top: 50,
    padding: 30,
    backgroundColor: "#8605B5",
    width:300,
    borderRadius: 50,
    
},

Signouttxt: {
fontFamily: 'Segoe UI Bold',
fontSize: 25,

color: 'white'
},

but: {
    left: 40,
    top: 100,
    padding: 30,
    backgroundColor: "#8605B5",
    width:300,
    borderRadius: 50,  
},
but2: {
    left: 40,
    top: 150,
    padding: 30,
    backgroundColor: "#8605B5",
    width:300,
    borderRadius: 50,  
},

   
});