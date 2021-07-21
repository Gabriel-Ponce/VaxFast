import React from 'react';
import {StyleSheet, View, Text, Image, Animated, Pressable, TouchableOpacity } from 'react-native';
import { create } from 'react-test-renderer';
import { set } from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import onGoogleLogin from '../Social-Login/GoogleLogin';
import onFacebookLogin from '../Social-Login/FacebookLogin';




const Login = ({navigation}) => {
    
return(

    <View style = {styles.container}>
        
        <Image style = {styles.logo} source = {require('../../Assets/Vax-Fast.png')} />
        <TouchableOpacity style = {styles.googleloginbutton} 
        onPress = {() => onGoogleLogin().then(() => navigation.navigate('TabHandler')).catch(console.log('LoginError'))}>
            <Text style = {styles.text}>
                Login with Google
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.facebookloginbutton}
        onPress = {() => onFacebookLogin().then(() => navigation.navigate('TabHandler')).catch(console.log('LoginError'))}>
            <Text style = {styles.text}>
                Login with Facebook
            </Text>
        </TouchableOpacity>
        
        
        
    </View>
);
}

export default Login;

const styles = StyleSheet.create({
container: {

    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
    backgroundColor: 'white'
},

text: {

    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'tw-cen-classified-mt-std-bold',
    fontSize:RFValue(20),
    top: heightPercentageToDP('3%')
    

},

googleloginbutton: {
    
    
    borderRadius: heightPercentageToDP('10%'),
    backgroundColor: '#DB4437',
    height: heightPercentageToDP('10%'),
    width: widthPercentageToDP('80%'),


    top: widthPercentageToDP('20%'),
    left: widthPercentageToDP('10%'),
    
    },
facebookloginbutton: {
    
    
    borderRadius: heightPercentageToDP('10%'),
    backgroundColor: '#3B5998',
    height: heightPercentageToDP('10%'),
    width: widthPercentageToDP('80%'),
    top: heightPercentageToDP('15%'),
    left: widthPercentageToDP('10%'),


  
},
logo : {
    width: widthPercentageToDP('37%'),
    height: heightPercentageToDP('30%'),
    left: widthPercentageToDP('5%')
    
}
});
