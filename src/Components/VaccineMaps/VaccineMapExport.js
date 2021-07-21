import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {selectedcoordinates, selectedlink, selectedaddress} from '../../libs/libs';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import setLink from '../../libs/setLink';
import {showLocation} from 'react-native-map-link';

const VaccineMapExport = () => {

return(
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.reservebutton} onPress = {() => {setLink(selectedlink)}}>
            <Text style = {styles.buttontxt}>
                Reserve Vaccine
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.mapbutton} onPress = {() => {
            showLocation({
                latitude: selectedcoordinates[0],
                longitude: selectedcoordinates[1],
                title: selectedaddress,
                alwaysIncludeGoogle: true,

            }
            )

        }}>
            <Text style = {styles.buttontxt}>
                Export to Google Maps
            </Text>
        </TouchableOpacity>
    </View>

)

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%')
    },
    
    reservebutton: {
    
    
        borderRadius: heightPercentageToDP('10%'),
        backgroundColor: '#0EDF97',
        height: heightPercentageToDP('10%'),
        width: widthPercentageToDP('80%'),
    
    
        top: widthPercentageToDP('50%'),
        left: widthPercentageToDP('10%'),
        
        },
        mapbutton: {
    
    
            borderRadius: heightPercentageToDP('10%'),
            backgroundColor: '#0EDF97',
            height: heightPercentageToDP('10%'),
            width: widthPercentageToDP('80%'),
        
        
            top: widthPercentageToDP('60%'),
            left: widthPercentageToDP('10%'),
            
            },
        buttontxt: {

            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
            fontSize:RFValue(20),
            top: heightPercentageToDP('3%')
            
        
        }
})

export default VaccineMapExport;