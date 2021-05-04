import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView, SafeAreaView} from 'react-native';
import {setselectedCountry, Countries} from '../../libs/Places'
import UseRegion from '../../Hooks/UseRegion';




const VaccineCountrySelect = ({navigation}) => {


    
const getCountries = () => {
        let buffer = [];

        buffer.push(
                
            <>
            <Pressable style = {styles.Viewbut} onPress = {()=> {
                setselectedCountry(0);
                
                navigation.navigate('VaccineMapSelect');
                
                
            }}>
                <Text style = {styles.txt}>
                    {Countries[0]}
                </Text>
            </Pressable>
            <View style = {styles.SpaceView}/>
            </>
            
        );
        for (let i = 1; i < Countries.length; i++) {
            
            


            buffer.push(
                
                <>
                <Pressable style = {styles.Viewbut} onPress = {()=> {
                    setselectedCountry(i);
                    
                    navigation.navigate('VaccineMap');
                    
                    
                }}>
                    <Text style = {styles.txt}>
                        {Countries[i]}
                    </Text>
                </Pressable>
                <View style = {styles.SpaceView}/>
                </>
                
            );
        }
        return(
            <>
            <View style = {styles.Viewbut} >
                <Text style = {styles.txt}>
                    Select Country
                </Text>
            </View>
            <View style = {styles.SpaceView}/>
            {buffer}
            <View style = {styles.SpaceView}/>
            </>
        )
    }   
return(
    <SafeAreaView>
    <ScrollView style = {styles.container}>
        {getCountries()}
        <View style = {styles.SpaceView}/>
    </ScrollView>
    </SafeAreaView>
)

}

export default VaccineCountrySelect;

const styles = StyleSheet.create({
    
    container : {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: Platform.OS === 'android' ? 800 : 0
    },
    
    Viewbut: {
        left: 40,
        top: 80,
        padding: 30,
        backgroundColor: "#0EDF97",
        width:300,
        borderRadius: 50,
    },
   
    SpaceView: {
        padding: 15,
        
       
    },
    
    txt: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 25,
        
        color: 'white'
    }
    
})