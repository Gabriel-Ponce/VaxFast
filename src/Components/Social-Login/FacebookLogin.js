import react from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { setprovider } from '../../libs/libs';


const onFacebookLogin = async() => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    await auth().signInWithCredential(facebookCredential);
    console.log("FACEBOOK LOGIN");
    setprovider("FACEBOOK")

    var username;
    const user = firebase.auth().currentUser;
    if (user){
      username = user.uid;
    }
  
      
    const path = "users/" + username;
    console.log(path);
      database().ref(path).update({
        name: user.displayName,
        
      });
      
      
      const ref = await database().ref(path + '/surveys');
      await ref.once('value').then(snapshot => {
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

export const onFacebookSignout = async() => {

    setprovider();
    await firebase.auth().signOut();
     
}



export default onFacebookLogin;