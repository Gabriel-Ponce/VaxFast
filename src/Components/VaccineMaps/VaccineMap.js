import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import UseMarker from '../../Hooks/UseMarker'

const VaccineMap = () => {

const [marker, setMarker] = UseMarker();
const getCoordinates = () => {
var coordinates = []
for(let i = 0; i < marker.markers.length; i++) {
  if (marker.markers[i].geometry.coordinates[1] == null || marker.markers[i].geometry.coordinates[0] == null) {
    coordinates[i] = {
      latitude: 32.963956,
      longitude: -86.609419
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
    buffer.push(<Marker key = {i} coordinate = {coors[i]} title = {`${i}`}/>)

  }
  console.log(coors)
  return (
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
    
    
      {buffer}
    
    </MapView>
  </View>
  )
 
  
}

return(
    <>
    {getMarkers()}
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
        }
        
});

export default VaccineMap;