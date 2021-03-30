import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import {Percentage} from './Survey'
var image = 'aa'
import Survey from './Survey';

var username;
const user = firebase.auth().currentUser;
    if (user) {
     username = user.displayName;
     console.log("user: " + username);
    }
  
const path = "users/" + username;
var val = 0
database().ref(path + '/surveys').once('value').then(snapshot => {
val = snapshot.val()
    console.log(snapshot.val());
});

  


const getDate = () => {

    var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      return ('' + date + '/' + month + '/' + year);

}
const SurveyResult = ({navigation}) => {
    const selectBackground = () => {
        if (Percentage >= 70) {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyRed.png';
            database().ref(path).update({
                surveys:  val + 1
            });
            const ref = database().ref('users/' + username + '/' + val)
            ref.update({
                Percentage: Percentage,
                Date: getDate()
            })
        }
        else if (Percentage >= 50) {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyYellow.png';
            database().ref('users/' + username).update({
                surveys: val + 1
            });
             database().ref('users/' + username + '/' + val).update({
                Percentage: Percentage,
                Date: getDate()
            })
        
        }
        else {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyGreen.png';
            database().ref('users/' + username).update({
                surveys: val + 1
            });
             database().ref('users/' + username + '/' + val).update({
                Percentage: Percentage,
                Date: getDate()
            })
        
        }
    }
    selectBackground();
    
    if (Percentage >= 70) {
    return(

    <View>
        
        <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyRed.png')}/>
        <Text style = {styles.prctxt}> 
        {Percentage}%
        </Text>
        <Image style = {styles.vac} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Injectionwhite.png')}/>
        <Text style = {styles.txt}>
            We consider that there is a high chance that you have covid-19 our app is just for basic information so we don't have any warranty that this is true, however we recommend considering taking a covid 19 test
        </Text>
        <Pressable style = {styles.buttonred} onPress = {() => navigation.navigate('TabHandler')}>
        <Text style = {styles.buttontxt}>
            Home
        </Text>
        </Pressable>

    </View>
    
);
}
    else if (Percentage >= 50) {
        return(
        <View>
        
            <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyYellow.png')}/>
            <Text style = {styles.prctxt}> 
            {Percentage}%
            </Text>
            <Image style = {styles.vac} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Injectionwhite.png')}/>
            <Text style = {styles.txt}>
                We consider you are in risk of having Covid-19 this is not a high risk
            </Text>
            <Pressable style = {styles.buttonyellow} onPress = {() => console.log("")}>
            <Text style = {styles.buttontxt}>
                Home
            </Text>
            </Pressable>
    
        </View>
        );
    }
        else {
        return(
        <View>
        
            <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyGreen.png')}/>
            <Text style = {styles.prctxt}> 
            {Percentage}%
            </Text>
            <Image style = {styles.vac} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Injectionwhite.png')}/>
            <Text style = {styles.txt}>
                Congratulations we have evaluated that you are risk free!
            </Text>
            <Pressable style = {styles.buttongreen} onPress = {() => navigation.navigate('SurveyHome')}>
            <Text style = {styles.buttontxt}>
                Home
            </Text>
            </Pressable>
    
        </View>
        );
    }
}

const styles = StyleSheet.create({
    
    buttonred: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#FF0000',
        bottom: 400
    },
    buttonyellow: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#FFDF00',
        bottom: 250
    },
    buttongreen: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#18A80E',
        bottom: 250
    },
    buttontxt : {
        fontSize: 25,
        fontFamily: 'Segoe UI Bold',
        color: 'white',
        width: 300,
        left: 140,
        
        
    },
    vac: {
        bottom: 500,
        height: 200,
        width: 200,
        left: 100
        
    },
    img: {
        left: 45,
        top: 50
    },
    prctxt: {
        fontSize: 40,
        fontFamily: 'Segoe UI Bold',
        color: 'white',
        width: 300,
        left: 160,
        bottom: 470
        
        
    },
    txt: {
        fontSize: 20,
        fontFamily: 'Segoe UI',
        color: 'white',
        width: 270,
        left: 70,
        bottom: 470
        
        
    }
})
export default SurveyResult