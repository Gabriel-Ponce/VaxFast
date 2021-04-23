import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {getVal} from '../Components/Surveys/SurveyResult'


/** Hook that gets an array with all the percentages and dates
 * @returns Percentage []
 * @returns Date []
 */
const UseSDisplay = () => {
const [state, setState] =  useState({
    Percentage: [],
    Date: [],
    loading: true,
    totalsurvs: 0
});


const user = firebase.auth().currentUser;
    var username;
if (user) {
    username = user.displayName;
    
   } 
   const path = "users/" + username;
   
   var percentages = [];
   var dates = [];
   
   useEffect(async() => {
    let i_max;
 
 await getVal().then((result) => {
     i_max = result;
 });
 for (let i = 0; i < i_max; i++) {
    await database().ref(path + `/${i}` + '/Percentage').once('value').then((snapshot) => {
        percentages[i] = snapshot.val();
    });
    await database().ref(path + `/${i}` + '/Date').once('value').then((snapshot) => {
        dates[i] = snapshot.val();
        console.log(dates[i]);
    });

 }
 setState({
     Percentage: percentages,
     Date: dates,
     loading: false,
     totalsurvs: i_max
 });


},[])

return [state, setState];
}

export default UseSDisplay;