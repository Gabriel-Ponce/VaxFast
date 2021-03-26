import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import database from '@react-native-firebase/database';
import {Percentage} from './Survey'
var image = 'aa'
import Survey from './Survey';



const SurveyResult = ({navigation}) => {
    const selectBackground = () => {
        if (Percentage >= 70) {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyRed.png';
            
        }
        else if (Percentage >= 50) {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyYellow.png';
        }
        else {
            image = 'C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyGreen.png';
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
        <Pressable style = {styles.buttonred} onPress = {() => navigation.navigate('SurveyHome')}>
        <Text style = {styles.buttontxt}>
            Home
        </Text>
        </Pressable>

    </View>
    
);
}
    if (Percentage >= 50) {
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
            <Pressable style = {styles.buttonred} onPress = {() => navigation.navigate('SurveyHome')}>
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
        bottom: 400
    },
    buttongreen: {
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#FFDF00',
        bottom: 400
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