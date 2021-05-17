import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth'

const SurveyHome = ({navigation}) => {


return(

<View style = {styles.container}>
    <Image source = {require('../../Assets/Poll_Rec.png')}
    style = {styles.imgpos}/>
    <Text style = {styles.tittletxt}>
        Answer an effective poll to determine your Covid-19 chances
    </Text>
    <Text style = {styles.txt}>
    This poll will help you determine if it's really necessary to get out and expose people to Covid-19 or if you are free of having the virus
    </Text>
    <Pressable style = {styles.button} onPress = {() => navigation.navigate("Survey")} >
        <Text style = {styles.buttxt}>
        Start
        </Text>
    </Pressable>
</View>
);
}


export default SurveyHome;


const styles = StyleSheet.create({
container:{

    backgroundColor: 'white'
},
imgpos: {

    top: 75,
    left: 40
    
},



tittletxt: {
    fontFamily: 'Segoe UI Bold',
    color: 'white',
    fontSize: 25,
    width: 300,
    bottom: 450,
    left: 62

   
},

txt: {
    fontFamily: 'Segoe UI',
    fontWeight: '900',
    fontSize: 25,
    width: 300,
    bottom: 400,
    left: 47,
    color: 'white'

},

buttxt: {
    fontFamily: 'Segoe UI Bold',
    position: "absolute",
    bottom: 10,
    fontSize: 30,
    left: 85
},

button: {
    padding: 2,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    left: 70,
    bottom: 250,
    height: 60,
    width: 250,
}

});