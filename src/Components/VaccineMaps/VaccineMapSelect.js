import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Pressable, ScrollView} from 'react-native';
import {setselectedstate, selectedstate} from '../../libs/Places'
import UseRegion from '../../Hooks/UseRegion';



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
                    <Text>
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
                <Text>
                    Select State or Country
                </Text>
            </View>
            <View style = {styles.SpaceView}/>
            {buffer}
            </>
        )
    }   
return(
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
        backgroundColor: "#8605B5",
        width:300,
        borderRadius: 50,
    },
   
    SpaceView: {
        padding: 30,
        
       
    }
    
})