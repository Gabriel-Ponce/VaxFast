import React, { useRef, useState, useEffect} from "react";
import {StyleSheet, View, Image, Animated} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen'
import { create } from 'react-test-renderer';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';




const LogoScreen = ({navigation}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    setTimeout(() => {
        navigation.navigate('Login');
     }, 2000);
  }

    else {
      
      console.log("buenas");
        setTimeout(() => {
            navigation.navigate('TabHandler');
         }, 2000);  
    }
    
    
    
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
    <Image source = {require('../../Assets/Vax-Fast.png')}
     style = {styles.logo}/>
        </Animated.View>
    </View>
    )

};

const styles = StyleSheet.create({
container: {

    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('100%'),
    backgroundColor: 'white'
},
logo: {
    
    
    left: widthPercentageToDP('20%'),
    top: heightPercentageToDP('25%'),
    width: widthPercentageToDP('65%'),
    height: heightPercentageToDP('50%'),
    }
});



export default LogoScreen;