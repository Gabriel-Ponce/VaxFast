import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView} from 'react-native';
import {setselectedstate, selectedstate} from '../../libs/Places'
import UseRegion from '../../Hooks/UseRegion';
import { ActivityIndicator } from 'react-native-paper';



const VaccineMapSelect = ({navigation}) => {

    const [region, setregion] = UseRegion();
    
const getPlaces = () => {
        let buffer = [];
        for (let i = 0; i < region.states.length; i++) {
            let oneofstate = i;
            buffer.push(
                
                <>
                <Pressable style = {styles.Viewbut} onPress = {()=> {
                    setselectedstate(oneofstate);
                    navigation.navigate('VaccineMap')
                }}>
                    <Text style = {styles.txt}>
                        {region.states[i].name}
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
                    Select Region
                </Text>
            </View>
            <View style = {styles.SpaceView}/>
            {buffer}
            </>
        )
    }   
return(
    
    region.loading ? 
    <ActivityIndicator/>
    :
    <ScrollView style = {styles.container}>
        {getPlaces()}
    </ScrollView>
    
)

}

export default VaccineMapSelect;

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
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
        padding: 30,
        
       
    },
    
    txt: {
        fontFamily: 'Segoe UI Bold',
        fontSize: 25,
        
        color: 'white'
    }
    
})