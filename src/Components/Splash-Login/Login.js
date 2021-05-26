import React from 'react';
import {StyleSheet, View, Text, Image, Animated, Pressable} from 'react-native';
import { create } from 'react-test-renderer';
import { set } from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import onGoogleLogin from '../Social-Login/GoogleLogin';




const Login = ({navigation}) => {
    
return(

    <View style = {styles.container}>
        
        <Image style = {styles.logo} source = {require('../../Assets/Vax-Fast.png')} />
        <Pressable style = {styles.loginbutton} title = "Login with Google" 
        onPress = {() => onGoogleLogin().then(() => navigation.navigate('TabHandler')).catch(console.log('LoginError'))}>
            <Text style = {styles.text}>
            Login with Google
            </Text>
        </Pressable>
        
        
        
    </View>
)
};

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

loginbutton: {
    
    
    borderRadius: heightPercentageToDP('10%'),
    backgroundColor: 'red',
    height: heightPercentageToDP('10%'),
    width: widthPercentageToDP('80%'),


    top: heightPercentageToDP('20%'),
    left: 40,
    right: 40
    //left: -25*/
},
logo : {
    width: 200,
    height: 200,
    
}
});
