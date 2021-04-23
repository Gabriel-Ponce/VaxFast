import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database'; 
import auth from '@react-native-firebase/auth';
import UseSDisplay from '../../Hooks/UseSDisplay'
import { ActivityIndicator } from 'react-native-paper';
const SurveyDisplay = () => {
    const [sdisplay, setSDisplay] = UseSDisplay();
    
  if (sdisplay.loading == false) {
    console.log(sdisplay);
  }
  const getDPs = () => {
  let buffer = []
    for (let i = 0; i < sdisplay.totalsurvs; i++) {
    if (sdisplay.Percentage[i] >= 70)
        console.log(i);
  }
  
  return (
    <>
    {buffer}
    </>
   
  )
 
  
}
return( 

<View>
  {sdisplay.loading?
  <ActivityIndicator/>
  :
  <View style = {styles.Signoutbut}>
    <Text>
      Hola
    </Text>
    
  </View>
}
</View>)

}
const styles = StyleSheet.create({
  
  Signoutbut: {
    left: 40,
    top: 50,
    padding: 30,
    backgroundColor: "#8605B5",
    width:300,
    borderRadius: 50,
    
},

});


export default SurveyDisplay;