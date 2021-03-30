import React from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-community/google-signin'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database'


GoogleSignin.configure({
    webClientId: "550717151224-4rher72a4f3sd9r3ru5bqg6lp0qbdeh5.apps.googleusercontent.com"
});

const onGoogleLogin = async() => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  var username;
  const user = firebase.auth().currentUser;
  if (user){
    username = user.displayName
  }

    
  const path = "users/" + username;
  console.log(path);
    database().ref(path).update({
      id: idToken,
      
    });
    
    
   
    const ref = await database().ref(path + '/surveys');
    ref.once('value').then(snapshot => {
      if (snapshot.exists()) {
        
        console.log(snapshot.val());
      }
      else {
        database().ref(path).update({
          surveys: 0
        })
        
      }
    
    }); 
     
  
   

   
   
  
  
  return auth().signInWithCredential(googleCredential);
}


export default onGoogleLogin;
