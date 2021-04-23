import axios from 'axios';
import React, {useState, useEffect} from 'react';


let baseUrl = "https://www.vaccinespotter.org/api/v0/states/";

const UseMarker = (place) => {
const [state, setState] =  useState({
    markers: [],
    loading: true

})
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


     
    return [state, setState];
}

export default UseMarker;