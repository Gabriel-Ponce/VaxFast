import axios from 'axios';
import React, {useState, useEffect} from 'react';


let baseUrl = "https://www.vaccinespotter.org/api/v0/states/AL.json";

const UseMarker = () => {
const [state, setState] =  useState({
    markers: []

})
const api = axios.create({baseUrl})
const apiMap = axios.create({baseURL: baseUrl}) 

useEffect(() => {
    apiMap.get().then((result) => {
            setState(
                {
                markers: result.data.features
                }
            )
                
            });
   
        
    
}, []);
return [state, setState];
}

export default UseMarker;