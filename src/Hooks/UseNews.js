import React, {useEffect, useState} from 'react';
import axios from 'axios';


let baseUrl = "https://newsapi.org/v2/everything?q=covid&apiKey=812b23f3af4149c7899fb36bb06fc512";

const UseNews = () => {

const [cnews, setcnews] = useState({
    news: [],
    loading: true
    });
const News = axios.create({baseURL: baseUrl});

useEffect( () => {

News.get().then((response) => {
    setcnews(
        {
            news: response.data,
            loading: false
        });
}
)

}, [])

return [cnews, setcnews];
    
}

export default UseNews;