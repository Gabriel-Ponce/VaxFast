import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import {onGooglesignOut} from '../Social-Login/GoogleLogin'
import auth from '@react-native-firebase/auth';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen'
import { provider } from '../../libs/libs';
import { onFacebookSignout } from '../Social-Login/FacebookLogin';


const Settingsmain = ({navigation}) => {
    
    
    
    return(
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.Signoutbut} onPress = {() => {
           
                onGooglesignOut();
                onFacebookSignout().then(() => navigation.navigate('Login'))
            
        }}>
            <Text style = {styles.Signouttxt}>
                Sign Out
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.but} onPress = {() => {navigation.navigate('Info')}}>
            <Text style = {styles.Signouttxt}>
                Info
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.but2} onPress = {() => navigation.navigate('SurveyDisplay')}>
            <Text style = {styles.Signouttxt}>
                Surveys' Result
            </Text>
        </TouchableOpacity>
    </View>
    )
}

export default Settingsmain;

const styles = StyleSheet.create({

container: {
    backgroundColor: 'white',
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%')
},

Signoutbut: {
    left: widthPercentageToDP('10%'),
    top: heightPercentageToDP('10%'),
    height: heightPercentageToDP('13%'),
    backgroundColor: "#8605B5",
    width: widthPercentageToDP('80%'),
    borderRadius: heightPercentageToDP('10%'),
    
},

Signouttxt: {
fontFamily: 'Roboto-Bold',
fontSize: RFValue(25),
left: widthPercentageToDP('10%'),
top: heightPercentageToDP('4%'),
color: 'white'
},

but: {
    left: widthPercentageToDP('10%'),
    top: heightPercentageToDP('20%'),
    height: heightPercentageToDP('13%'),
    backgroundColor: "#8605B5",
    width: widthPercentageToDP('80%'),
    borderRadius: heightPercentageToDP('10%'),
},
but2: {
    left: widthPercentageToDP('10%'),
    top: heightPercentageToDP('30%'),
    height: heightPercentageToDP('13%'),
    backgroundColor: "#8605B5",
    width: widthPercentageToDP('80%'),
    borderRadius: heightPercentageToDP('10%'), 
},

   
});