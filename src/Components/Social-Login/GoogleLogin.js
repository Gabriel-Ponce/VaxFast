import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';

GoogleSignin.configure({
    webClientId: "550717151224-4rher72a4f3sd9r3ru5bqg6lp0qbdeh5.apps.googleusercontent.com"
});

const onGoogleLogin = async() => {

  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  console.log(idToken);
  return auth().signInWithCredential(googleCredential);
}


export default onGoogleLogin;
