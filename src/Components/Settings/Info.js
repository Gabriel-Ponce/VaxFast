import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize'
import useSDisplay from '../../Hooks/UseSDisplay';
import { ActivityIndicator } from 'react-native-paper';

const Info = ({navigation}) => {

    const [survs, setSurvs] = useSDisplay();

    const user = firebase.auth().currentUser;
    var username;
    var usermail
    if (user) {
        username = user.displayName;
        usermail = user.email;
        
    }
    return(
        <>
        
        {
        survs.loading?
        <ActivityIndicator/>
        :
        <View style = {styles.container}>
            <View style = {styles.imgsty}/>
            <Text style = {styles.tittletxt}>
                Info
            </Text>
            <Text style = {styles.txt}>
                Name: {` ${username}`}
            </Text>
            <Text style = {styles.txt}>
                Email: {` ${usermail}`}
            </Text>
            <Text style = {styles.txt}>
                    Surveys answered: {` ${survs.totalsurvs}`}
            </Text>
            <Text style = {styles.txt}>
                Version: 0.8
            </Text>
        </View>}
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%'),
        backgroundColor: 'white'
    },
    imgsty: {
    
        top: heightPercentageToDP('5%'),
        left: widthPercentageToDP('10%'),
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('80%'),
        backgroundColor: '#8605B5',
        borderRadius: heightPercentageToDP('5%')
        
        
    },
    
    
    
    tittletxt: {
        fontFamily: 'Roboto-Bold',
        color: 'white',
        fontSize:  RFValue(25),
        width: widthPercentageToDP('75%'),
        bottom: heightPercentageToDP('70%'),
        left: widthPercentageToDP('15%')
    
       
    },
    
    txt: {
        fontFamily: 'Roboto-Regular',
       
        fontSize: RFValue(25),
        width: widthPercentageToDP('80%'),
        bottom: heightPercentageToDP('65%'),
        left: 47,
        color: 'white'
    
    },
    
    buttxt: {
        fontFamily: 'Roboto-Bold',
        top: heightPercentageToDP('2%'),
        fontSize: RFValue(30),
        left: widthPercentageToDP('20%')
    },
    
    button: {
        
        borderRadius: heightPercentageToDP('5%'),
        backgroundColor: 'white',
        left: widthPercentageToDP('20%'),
        bottom: heightPercentageToDP('40%'),
        height: heightPercentageToDP('9%'),
        width: widthPercentageToDP('60%')
    }
    })

export default Info;