import React from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database'


GoogleSignin.configure({
    webClientId: "550717151224-4rher72a4f3sd9r3ru5bqg6lp0qbdeh5.apps.googleusercontent.com"
});
const username = auth().currentUser.displayName;
const onGoogleLogin = async() => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
  const path = "users/" + username;
  console.log(path);
    database().ref(path).set({
      id: idToken,
      
    });
  
   

   //database().ref('users/' + username + '/isregisterd').on(true, snapshot => {
    //console.log('User data: ', snapshot.val());});
   
  
  
  return auth().signInWithCredential(googleCredential);
}


export default onGoogleLogin;
