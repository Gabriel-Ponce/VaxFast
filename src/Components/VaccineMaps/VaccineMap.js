import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import UseMarker from '../../Hooks/UseMarker'

const VaccineMap = () => {

const [marker, setMarker] = UseMarker();

return(
    <View style = {styles.container}>
    <MapView
    style = {styles.map}
    provider = {PROVIDER_GOOGLE}
    initialRegion={{
      latitude: 19.263720205373147,
      longitude: -99.56709876341496,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }}>
    
     
    </MapView>
  </View>
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
        }
        
});

export default VaccineMap;