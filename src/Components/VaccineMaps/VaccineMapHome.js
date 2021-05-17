import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth'

const VaccineMapHome = ({navigation}) => {


return(

<View style = {styles.container}>
    <Image source = {require('../../Assets/Vax_Rec.png')}
    style = {styles.imgpos}/>
    <Text style = {styles.tittletxt}>
        Check places were the vaccine is available 
    </Text>
    <Text style = {styles.txt}>
    See our map to see were is the nearest vaccines and export the places to Google Maps
    </Text>
    <Pressable style = {styles.button} onPress = {() => navigation.navigate('VaccineCountrySelect')}>
        <Text style = {styles.buttxt}>
        Check
        </Text>
    </Pressable>
</View>
);
}


export default VaccineMapHome;


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
    left: 75
},

button: {
    padding: 2,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    left: 70,
    bottom: 150,
    height: 60,
    width: 250,
}

});