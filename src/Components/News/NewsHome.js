import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import auth, { firebase } from '@react-native-firebase/auth';


const NewsHome = ({navigation}) => {


return(

<View style = {styles.container}>
    <View style = {styles.imgsty}/>
    <Text style = {styles.tittletxt}>
        Check all the news related to covid-19
    </Text>
    <Text style = {styles.txt}>
    Here you can see all the news about covid-19 from reliable sources 
    </Text>
    <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate("News")} >
        <Text style = {styles.buttxt}>
        Check
        </Text>
    </TouchableOpacity>
</View>
);
}


export default NewsHome;


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
    backgroundColor: '#FF0000',
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

});