import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Countries, selectedCountry} from '../libs/Places'
import {Mexico as mexico} from '../libs/Mexico';


let baseUrl = "https://www.vaccinespotter.org/api/v0/states/";

const UseMarker = (country, place) => {
    console.log(country);
    console.log(place);
const [state, setState] =  useState({
    markers: [],
    loading: true

})

if (country == "United States") {

let baseUrlstate = baseUrl + place + ".json";
const api = axios.create({baseUrl})
const apiMap = axios.create({baseURL: baseUrlstate}) 
console.log(baseUrlstate);


useEffect(() => {
    apiMap.get().then((result) => {
            console.log(result);
            setState(
                {
                markers: result.data.features,
                loading: false
                }
            )
                
            });
   
            
}, []);
    

}
else {

   const Mexico = mexico



useEffect(() => {
    console.log(`${Countries[selectedCountry]}`);
    const country = `${Countries[selectedCountry]}`
  setState({
    markers: eval(`${country}.features`),
    loading: false
  })

            
}, []);

}


     
    return [state, setState];
}

export default UseMarker;