import React from 'react';
import {Text, View} from 'react-native';
import UseNews from '../../Hooks/UseNews'
import { ActivityIndicator } from 'react-native-paper';

const News = () => {

    const [news, setnews] = UseNews();
    
   console.log(news);
    
    const getNews = () => {
            let buffer = [];
        for (let i = 0; i < news.news.articles.length; i++) {

            buffer.push(<Text>
                {news.news.articles[i].title}

            </Text>)
        }

        console.log(buffer);

        return (
            <>
            
            <View>
            {buffer}
            </View>
            </>
        )
    }

   
    return(
    <View>
    { news.loading ?
             <ActivityIndicator/>
    :
    <>
    {getNews()}
    </>
    }
    </View>
)

}


export default News;