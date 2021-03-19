import React from 'react';
import {StyleSheet, View, Text, Image, Animated, Pressable} from 'react-native';
import { create } from 'react-test-renderer';
import { set } from 'react-native-reanimated';



const Login = ({navigation}) => {
    
return(

    <View style = {styles.container}>
        <Pressable style = {styles.loginbutton} title = "Login with Google" onPress = {() => navigation.navigate('LogoScreen')}>
            <Text style = {styles.text}>
            Login with Google
            </Text>
        </Pressable>
        
        
        
    </View>
)
};

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
}
});



export default Login;