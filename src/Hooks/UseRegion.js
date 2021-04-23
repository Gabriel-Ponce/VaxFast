import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {getVal} from '../Components/Surveys/SurveyResult'
import axios from 'axios';


let baseUrl = "https://www.vaccinespotter.org/api/v0/states.json";


const UseRegion = () => {
    const [state, setState] = useState({
        states: [],
        loading: true
    });
    const api = axios.create({baseUrl})
    const apiRegion = axios.create({baseURL: baseUrl}) 
    useEffect(() => {
        apiRegion.get().then((result) => {
            setState({
                states: result.data,
                loading: false,
            })
        })
    },[]);
    return[state, setState];
}

export default UseRegion;