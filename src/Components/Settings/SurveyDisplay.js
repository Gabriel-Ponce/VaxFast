import React from 'react';
import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database'; 
import auth from '@react-native-firebase/auth';
import UseSDisplay from '../../Hooks/UseSDisplay'
import { ActivityIndicator } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
const SurveyDisplay = () => {
    const [sdisplay, setSDisplay] = UseSDisplay();
    
    
  if (sdisplay.loading == false) {
    console.log(sdisplay);
  }
  const getDPs = () => {
  let buffer = []
    for (let i = 0; i < sdisplay.totalsurvs; i++) {
    if (sdisplay.Percentage[i] >= 70) {
        buffer.push(
        <>
        <View style = {styles.butred}>
          <Text style = {styles.txt}>
            {sdisplay.Percentage[i]}% {" "} {sdisplay.Date[i]}
          </Text>
          
        </View>
        <View style = {styles.space}/>
        </>
        )
        }
    else if (sdisplay.Percentage[i] >= 40) {
      buffer.push(
      <>
      <View style = {styles.butyellow}>
        
        <Text style = {styles.txt}>
          {sdisplay.Percentage[i]}% {" "} {sdisplay.Date[i]}
        </Text>
        
      </View>
      <View style = {styles.space}/>
      </>
      )
    }
    else {
      buffer.push(
        <>
      <View style = {styles.butgreen}>
        <Text style = {styles.txt}>
          {sdisplay.Percentage[i]}% {" "} {sdisplay.Date[i]}
        </Text>
        
      </View>
      <View style = {styles.space}/>
      </>
      )
    }
  }
  
  
  return (
    <View style = {styles.container}>
    {buffer}
    </View>
   
  )
 
  
}
return( 

<SafeAreaView styles = {styles.container}>
  {sdisplay.loading?
  <ActivityIndicator/>
  :
  <ScrollView> 
  
    {getDPs()}
  </ScrollView>
}
</SafeAreaView>)

}
const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#FFFFFF',
    color: '#FFFFFF',
    height: '100%',
    flex: 1,
    paddingBottom: Platform.OS === 'android' ? 500 : 0
    
  },

  space: {
    padding: 10,
  },

  but: {
    left: 40,
    top: 50,
    padding: 30,
    backgroundColor: "#8605B5",
    width:300,
    borderRadius: 50,
    
},

butred: {
  left: 40,
  top: 50,
  padding: 30,
  backgroundColor: "#FF0000",
  width:300,
  borderRadius: 50,
},

butyellow: {
  left: 40,
  top: 50,
  padding: 30,
  backgroundColor: "#FFDF00",
  width:300,
  borderRadius: 50,
},

butgreen: {
  left: 40,
  top: 50,
  padding: 30,
  backgroundColor: "#18A80E",
  width:300,
  borderRadius: 50,
},
txt: {
  fontFamily: 'Segoe UI Bold',
  fontSize: 25,
  
  color: 'white'
  },
  

});


export default SurveyDisplay;