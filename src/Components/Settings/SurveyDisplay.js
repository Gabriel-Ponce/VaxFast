import React from 'react';
import {Text, StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database'; 
import auth from '@react-native-firebase/auth';
import UseSDisplay from '../../Hooks/UseSDisplay'
import { ActivityIndicator } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

const SurveyDisplay = ({navigation}) => {
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
  sdisplay.totalsurvs == 0?
  Alert.alert("Alert", "You need to answer at least one survey to check your results", [{text: "ok", onPress: () => {navigation.navigate('TabHandler')}}])
            
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
    paddingBottom: Platform.OS === 'android' ? 500 : 0
    
  },

  space: {
    height: heightPercentageToDP('5%')
  },


butred: {
  left: widthPercentageToDP('10%'),
  top: heightPercentageToDP('5%'),
  height: heightPercentageToDP('12%'),
  width: widthPercentageToDP('78%'),
  borderRadius: heightPercentageToDP('10%'),
  backgroundColor: "#FF0000",
},

butyellow: {
  left: widthPercentageToDP('10%'),
  top: heightPercentageToDP('5%'),
  height: heightPercentageToDP('12%'),
  width: widthPercentageToDP('78%'),
  borderRadius: heightPercentageToDP('10%'),
  backgroundColor: "#FFDF00",
},

butgreen: {
  left: widthPercentageToDP('10%'),
  top: heightPercentageToDP('5%'),
  height: heightPercentageToDP('12%'),
  width: widthPercentageToDP('78%'),
  borderRadius: heightPercentageToDP('10%'),
  backgroundColor: "#18A80E",

},
txt: {
  fontFamily: 'Roboto-Bold',
  fontSize: RFValue(25),
  left: widthPercentageToDP('10%'),
  top: heightPercentageToDP('4%'),
  color: 'white'
  },
  

});


export default SurveyDisplay;