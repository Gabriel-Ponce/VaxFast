import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth'
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const VaccineMapHome = ({navigation}) => {


return(

<View style = {styles.container}>
    <Image source = {require('../../Assets/Vax_Rec.png')}
    style = {styles.imgsty}/>
    <Text style = {styles.tittletxt}>
        Check places were the vaccine is available 
    </Text>
    <Text style = {styles.txt}>
    See our map to see were is the nearest vaccines and export the places to Google Maps
    </Text>
    <Pressable style = {styles.button} onPress = {() => navigation.navigate('VaccineCountrySelect')}>
        <Text style = {styles.buttxt}>
        Check
        </Text>
    </Pressable>
</View>
);
}


export default VaccineMapHome;



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
        backgroundColor: '#0E92DF',
        borderRadius: heightPercentageToDP('5%')
        
        
    },
    
    
    
    tittletxt: {
        fontFamily: 'Segoe UI Bold',
        color: 'white',
        fontSize:  RFValue(25),
        width: widthPercentageToDP('75%'),
        bottom: heightPercentageToDP('70%'),
        left: widthPercentageToDP('15%')
    
       
    },
    
    txt: {
        fontFamily: 'Segoe UI',
       
        fontSize: RFValue(25),
        width: widthPercentageToDP('80%'),
        bottom: heightPercentageToDP('65%'),
        left: 47,
        color: 'white'
    
    },
    
    buttxt: {
        fontFamily: 'Segoe UI Bold',
        top: heightPercentageToDP('2%'),
        fontSize: RFValue(30),
        left: widthPercentageToDP('20%')
    },
    
    button: {
        
        borderRadius: heightPercentageToDP('5%'),
        backgroundColor: 'white',
        left: widthPercentageToDP('20%'),
        bottom: heightPercentageToDP('40'),
        height: heightPercentageToDP('9%'),
        width: widthPercentageToDP('60%')
    }
    

});