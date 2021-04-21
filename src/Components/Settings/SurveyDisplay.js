import React from 'react';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database'; 
import auth from '@react-native-firebase/auth';

const SurveyDisplay = () => {
    const [user, setUser] = useState();
    
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    
  }

    else {
        const username = firebase.auth().currentUser.displayName;
        const path = "users/" + username 
        const getSurveys = async () => {

            const ref = await database().ref(path + '/surveys');
            ref.once('value').then(snapshot => {
              
                console.log("surveys: " + snapshot.val());
                return snapshot.val();
    
        })
    }
        const surveys = getSurveys();
    
    console.log("surveys: " + surveys)
     const getInfo = () => {
        var info = [];
    
        for (let i = 0; i < surveys; i++) {
            var ref = database().ref(path + '/surveys' + `/${i}/Percentage`)
            info[i] = {
                Percentage: ref.once('value').then(snapshot => {snapshot.val();})
        }
    
    }
    return info;
    }
    var percentages = getInfo()
    
}
console.log(percentages)
    
    
    
return(<></>)
}
export default SurveyDisplay;