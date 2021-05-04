import React from 'react';
import {StyleSheet, View, Text, Image, Animated, Pressable} from 'react-native';
import { create } from 'react-test-renderer';
import { set } from 'react-native-reanimated';
import auth from '@react-native-firebase/auth';
import onGoogleLogin from '../Social-Login/GoogleLogin';




const Login = ({navigation}) => {
    
return(

    <View style = {styles.container}>
        
        <Image style = {styles.logo} source = {require('/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Vax-Fast.png')} />
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

    flex:1,
    backgroundColor: 'white'
},

text: {

    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'tw-cen-classified-mt-std-bold',
    fontSize:20,
    top:20
    

},

loginbutton: {
    
    padding:2,
    borderRadius: 50,
    backgroundColor: 'red',
    height: 70,
    width: 300,


    top: 300,
    bottom: -100,
    left: 40,
    right: 40
    //left: -25*/
},
logo : {
    width: 200,
    height: 200,
    
}
});
