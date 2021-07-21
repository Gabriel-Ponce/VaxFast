import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout, CalloutSubview} from 'react-native-maps';
import UseMarker from '../../Hooks/UseMarker'
import {ActivityIndicator} from 'react-native-paper';
import {Places, setselectedstate, selectedstate, selectedCountry, Countries, selectedcoordinates, setselectedcoordinates, selectedlink, setselectedlink, setselectedaddress} from '../../libs/libs';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const VaccineMap = ({navigation}) => {

const [marker, setMarker] = UseMarker(Countries[selectedCountry], Places[selectedstate]);
const getCoordinates = () => {
var coordinates = []
for(let i = 0; i < marker.markers.length; i++) {
  console.log(i);
  if (marker.markers[i].geometry.coordinates[1] == null || marker.markers[i].geometry.coordinates[0] == null) {
    if (coordinates[0].longitude != null || coordinates[0].latitude != null) {
      coordinates[i] = {
        latitude: coordinates[0].longitude,
        longitude: coordinates[0].latitudeDelta
        
    }
    }
    else {
    coordinates[i] = {
      latitude: 32.963956,
      longitude: -86.609419
      
  }
}
}
  else {
  coordinates[i] = {
    latitude: marker.markers[i].geometry.coordinates[1],
    longitude: marker.markers[i].geometry.coordinates[0],
  }
}

}
return coordinates;
}



var coors = getCoordinates();


const getMarkers = () => {
  let buffer = []

  for (let i = 0; i < coors.length; i++) {
    
    
    buffer.push(
    <Marker key = {i} coordinate = {coors[i]} title = {`${marker.markers[i].properties.address} , ${marker.markers[i].properties.city}`}>
      <Callout onPress = {() => {
        setselectedcoordinates(coors[i]);
        setselectedlink(marker.markers[i].properties.url);
        setselectedaddress(marker.markers[i].properties.address);
        navigation.navigate('Export');
      }
      }>
        
        <Text style = {styles.desctxt}>
          {`${marker.markers[i].properties.address} , ${marker.markers[i].properties.city}`}
        </Text>
        <View style = {styles.box}>
          <Text style = {styles.buttxt}>
            Reserve Vaccine
          </Text>
        </View>
        
    </Callout>
    </Marker>)

  }
  console.log(coors)
  return (
    <View style = {styles.container}>
    <MapView
    style = {styles.map}
    provider = {PROVIDER_GOOGLE}
    initialRegion={{
      latitude: coors[0].latitude,
      longitude: coors[0].longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}>
    
    
      {buffer}
    
    </MapView>
  </View>
  )
 
  
}

return( 
    <>
    { marker.loading?
    <ActivityIndicator/>
    :
    <>
    {getMarkers()}
    </>
}
    </>
    )

}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        },
        map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        },

        box: {
          backgroundColor: '#0EDF97',
          borderRadius: heightPercentageToDP('10%'),
          width: widthPercentageToDP('85%'),
          height: heightPercentageToDP('10%')

        },
        
        desctxt: {

          fontWeight: 'bold',
          

        },
        buttxt: {
          fontFamily: 'Roboto-Bold',
          color: '#FFFFFF',
          fontSize: RFValue(20),
          left: widthPercentageToDP('20%'),
          top: heightPercentageToDP('3%'),



        }
        
});

export default VaccineMap;