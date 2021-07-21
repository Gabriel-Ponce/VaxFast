import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/database';
import {SurveyResulttxt} from '../../libs/Text'
import { ActivityIndicator } from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { acc } from 'react-native-reanimated';




  

/**
 * Returns the Date
 * @returns DD/MM/YYYY
 */
const getDate = () => {

    var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      return ('' + date + '/' + month + '/' + year);

}

    

/**  asyncronous functions that returns the survey percentage
 * from the firebase database
 *  @link https://rnfirebase.io/database/usage 
*/
const getPercentage = async() => {    
var Percentage;
var username;
const user = firebase.auth().currentUser;
    if (user) {
     username = user.uid;
     console.log("user: " + username);
    } 
    const path = "users/" + username;
 return await database().ref(path + '/lastpercentage/').once('value').then((snapshot) => 
{

    Percentage = snapshot.val();
    console.log(Percentage);
    console.log(path);
    return snapshot.val();
});
}
/**  asyncronous functions that returns the numbers of surveys that have been answered
 * from the firebase database
 *  @link https://rnfirebase.io/database/usage 
*/
export const getVal = async() => {
    const user = firebase.auth().currentUser;
    var username;
    if (user) {
     username = user.uid;
     console.log("user: " + username);
    } 
    const path = "users/" + username;

    return database().ref(path + '/surveys').once('value').then((snapshot) => {
    return snapshot.val()
    
});
    }



const SurveyResult = ({navigation}) => {

const [percentage, setpercentage] = useState(0);
const [val, setval] = useState(0);
const [message, setmessage] = useState(0);
const [loading, setloading] = useState(true);
var username;

const user = firebase.auth().currentUser;
    if (user) {
     username = user.uid;
     console.log("user: " + username);
    } 
    const path = "users/" + username;
    
    
    /**
     * Updates the percentage to the database
     * @link https://rnfirebase.io/database/usage 
     */
    const updatedbPercentage = async() => {
        await database().ref(path).update({
            surveys:  val + 1
        });
        const ref = database().ref('users/' + username + '/' + val)
        await ref.update({
            Percentage: percentage,
            Date: getDate()
     
});
}

/**
 * Selects the message and the color of it, according to its percentage
 * @param Percentage
 * Its the percentage from the survey
 * @returns
 * render of the survey result in a jsx element
 */
const getMessage = (Percentage) => {
    var number = 0;
    var string = "";
    console.log("PER: ", Percentage)
        if (Percentage >= 70){
            number = 0;
            string = "red";
            console.log(string);
            
    }
        else if (Percentage >= 40){
            number = 1;
            string = "yellow";
            console.log(string);
            
        }

        else {
            number = 2;
            string = "green";
            console.log(string);
            
        }

    
    return (<View>
        
        <View style = {eval(`styles.${string}box`)} />
        <Text style = {styles.prctxt}> 
        {Percentage}%
        </Text>
        <Image style = {styles.vac} source = {require('../../Assets/Injectionwhite.png')}/>
        <Text style = {styles.txt}>
        {SurveyResulttxt[number]}    
        </Text>
        <TouchableOpacity style = {eval(`styles.button${string}`)} onPress = {() => navigation.navigate('TabHandler')}>
        <Text style = {styles.buttontxt}>
            Home
        </Text>
        </TouchableOpacity>

    </View>)
}
    

useEffect(async() => { 
     await getPercentage().then((result) => {
        setpercentage(result);
    });
    await getVal().then((result) => {
        setval(result);
        setloading(false);
        
    });
    



    
    
},[]);

if (loading == false) {
updatedbPercentage();
}
    
    
    
    console.log(val , percentage);
    console.log(loading);
   
    
   return (
    <>
        {
            loading ?
            <ActivityIndicator/>
            :
            <View>
           
                {
                    getMessage(percentage)
                }
            </View>
        }   
    </>
   )
}


const styles = StyleSheet.create({
    
    buttonred: {
        height: heightPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('10%'),
        bottom: heightPercentageToDP('45%'),
        width: widthPercentageToDP('80%'),
        left: widthPercentageToDP('10%'),
        backgroundColor: '#FF0000'
    },
    buttonyellow: {
        height: heightPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('10%'),
        bottom: heightPercentageToDP('30%'),
        width: widthPercentageToDP('80%'),
        left: widthPercentageToDP('10%'),
        backgroundColor: '#FFDF00'
    },
    buttongreen: {
        height: heightPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('10%'),
        bottom: heightPercentageToDP('30%'),
        width: widthPercentageToDP('80%'),
        left: widthPercentageToDP('10%'),
        backgroundColor: '#18A80E'
    },
    buttontxt : {
        fontSize: RFValue(20),
        fontFamily: 'Roboto-Bold',
        color: 'white',
        left: widthPercentageToDP('30%'),
        top: heightPercentageToDP('3%')
        
        
    },
    vac: {
        bottom: heightPercentageToDP('60%'),
        height: heightPercentageToDP('20%'),
        width: widthPercentageToDP('60%'),
        left: widthPercentageToDP('20%')
        
    },
    img: {
        left: 150,
        top: 50
    },
    prctxt: {
        fontSize: RFValue(40),
        fontFamily: 'Roboto-Bold',
        color: 'white',
        left: widthPercentageToDP('40%'),
        bottom: heightPercentageToDP('63%')
        
        
    },
    txt: {
        fontSize:  RFValue(20),
        fontFamily: 'Roboto-Regular',
        color: 'white',
        width: widthPercentageToDP('70%'),
        left: widthPercentageToDP('15%'),
        bottom: heightPercentageToDP('55%')
        
        
    },
    redbox: {
        top: heightPercentageToDP('5%'),
        left: widthPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('5%'),
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('70%'),
        backgroundColor: '#FF0000'
    },

    yellowbox: {
        top: heightPercentageToDP('5%'),
        left: widthPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('5%'),
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('70%'),
        backgroundColor: '#FFDF00'


    },
    greenbox: {
        top: heightPercentageToDP('5%'),
        left: widthPercentageToDP('10%'),
        borderRadius: heightPercentageToDP('5%'),
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('70%'),
        backgroundColor: '#18A80E'
    }
})
export default SurveyResult