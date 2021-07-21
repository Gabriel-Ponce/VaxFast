import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView} from 'react-native';
import {setselectedstate, selectedstate} from '../../libs/libs'
import UseRegion from '../../Hooks/UseRegion';
import { ActivityIndicator } from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';



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
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%')
    },
    
    Viewbut: {
        left: widthPercentageToDP('10%'),
        height: heightPercentageToDP('12%'),
        backgroundColor: "#0EDF97",
        width: widthPercentageToDP('80%'),
        borderRadius: 50,
    },
   
    SpaceView: {
        height: heightPercentageToDP('3%')
        
       
    },
    
    txt: {
        fontFamily: 'Roboto-Bold',
        fontSize: RFValue(25),
        left: widthPercentageToDP('5%'),
        top: heightPercentageToDP('4%'),
        color: 'white'
    }
    
})