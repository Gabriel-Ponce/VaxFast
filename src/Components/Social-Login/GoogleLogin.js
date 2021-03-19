import React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
    webClientId: "550717151224-6oo6lfpdphpj1evousluf4e19smea0pk.apps.googleusercontent.com"
});

const onGoogleLogin = async() => {

    const {idToken} = await GoogleSignin.signIn();
const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

export default onGoogleLogin;
