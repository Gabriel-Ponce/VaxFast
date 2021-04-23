import React, { useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import { ActivityIndicator } from 'react-native-paper';


var image = 'aa'



  

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
     username = user.displayName;
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
     username = user.displayName;
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
const [changed, setchanged] = useState(false);
const [loading, setloading] = useState({
    perloading: true,
    valloading: true
    

})
var username;

const user = firebase.auth().currentUser;
    if (user) {
     username = user.displayName;
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
    

useEffect(async() => { 
     await getPercentage().then((result) => {
        setpercentage(result);
        let loadingcopy = {...loading};
        loadingcopy.perloading = false;
  //copying loading val to update it later
        setloading({
            perloading: false,
            valloading: loadingcopy.valloading
        })
    })
    await getVal().then((result) => {
        setval(result);
        let loadingcopy = {...loading}; //copying loading percentage to update it later
        setloading({
            perloading: loadingcopy.perloading,
            valloading: false
        })
        
    })

    
    
},[]);

if (loading.valloading == false) {
updatedbPercentage();
}
    
    
    
    console.log(val , percentage);
    console.log(loading.valloading, loading.perloading);
   
    
   return (
       <View>
           {
               
             loading.perloading && loading.valloading? 
             <ActivityIndicator animating = {true}/>
            
             :
             percentage >= 70 ?
             <View>
        
             <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyRed.png')}/>
             <Text style = {styles.prctxt}> 
             {percentage}%
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
         :
         percentage >= 50 ?
         <View>
        
            <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyYellow.png')}/>
            <Text style = {styles.prctxt}> 
            {percentage}%
            </Text>
            <Image style = {styles.vac} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/Injectionwhite.png')}/>
            <Text style = {styles.txt}>
                We consider you are in risk of having Covid-19 this is not a high risk
            </Text>
            <Pressable style = {styles.buttonyellow} onPress = {() => navigation.navigate('SurveyHome')}>
            <Text style = {styles.buttontxt}>
                Home
            </Text>
            </Pressable>
    
        </View>
         :
         <View>
        
            <Image style = {styles.img} source = {require('C:/Users/ponce/OneDrive/Documentos/Workspace/Frontend/VaxFast/src/Assets/SurveyGreen.png')}/>
            <Text style = {styles.prctxt}> 
            {percentage}%
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
           }
       </View>
   )
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