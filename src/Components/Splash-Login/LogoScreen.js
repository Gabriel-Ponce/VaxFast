import React, { useRef } from "react";
import {StyleSheet, View, Image, Animated} from 'react-native';
import { create } from 'react-test-renderer';

const LogoScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    

    setTimeout(() => {
        navigation.navigate('Login')
    }, 2000);
    const fadeIn = () => {
        
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 5000
        }).start();
      };
    return(
    <View style = {styles.container}>
        <Animated.View styles = {[{
            opacity: fadeIn
        }]}>
    <Image source = {require('/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Vax-Fast.png')}
     style = {styles.logo}/>
        </Animated.View>
    </View>
    )

};

const styles = StyleSheet.create({
container: {

    flex:6,
    backgroundColor: 'white'
},
logo: {
top: 120,
bottom: -50,
right: 130,
left: -25


    }
});



export default LogoScreen;