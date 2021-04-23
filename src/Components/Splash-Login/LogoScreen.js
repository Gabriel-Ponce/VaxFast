import React, { useRef, useState, useEffect} from "react";
import {StyleSheet, View, Image, Animated} from 'react-native';
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