import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {setProvider} from '../AuthManager'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database'

GoogleSignin.configure({
  scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    '550717151224-4rher72a4f3sd9r3ru5bqg6lp0qbdeh5.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

const onGoogleLogin = async() => {
  
  try {
    await GoogleSignin.hasPlayServices();
    const idToken = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken.idToken);
    await auth().signInWithCredential(googleCredential);
    
    
    var username;
  const user = firebase.auth().currentUser;
  if (user){
    username = idToken.user.name
  }

    
  const path = "users/" + username;
  console.log(path);
    database().ref(path).update({
      id: idToken.user.id,
      
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



  }
  catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(firebase.auth().currentUser.displayName);
    }
  });
    
 
}

export const onGooglesignOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (error) {
    console.error(error);
  }
};

export default onGoogleLogin;

