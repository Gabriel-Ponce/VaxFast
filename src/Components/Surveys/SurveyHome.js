import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import auth, { firebase } from '@react-native-firebase/auth';

const SurveyHome = ({navigation}) => {


return(

<View style = {styles.container}>
    <View style = {styles.imgsty}/>
    <Text style = {styles.tittletxt}>
        Answer an effective poll to determine your Covid-19 chances
    </Text>
    <Text style = {styles.txt}>
    This poll will help you determine if it's really necessary to get out and expose people to Covid-19 or if you are free of having the virus
    </Text>
    <Pressable style = {styles.button} onPress = {() => navigation.navigate("Survey")} >
        <Text style = {styles.buttxt}>
        Start
        </Text>
    </Pressable>
</View>
);
}


export default SurveyHome;


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
    bottom: heightPercentageToDP('50%'),
    height: heightPercentageToDP('9%'),
    width: widthPercentageToDP('60%')
}

});