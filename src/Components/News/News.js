import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image, Linking, Alert, TouchableOpacity} from 'react-native';
import UseNews from '../../Hooks/UseNews'
import { ActivityIndicator } from 'react-native-paper';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import setLink from '../../libs/setLink';

const News = () => {

    const [news, setnews] = UseNews();
    
   console.log(news);
    
   


    const getNews = () => {
            let buffer = [];
        for (let i = news.news.articles.length-1; i >= 0; i--) {

            buffer.push(
            <>
            <View style = {styles.newsbox}>
                <Text style = {styles.titletxt}>
                {news.news.articles[i].title}
                </Text>
                <Text style = {styles.desctxt}>
                {news.news.articles[i].description}
                </Text>
                <Image style = {styles.imgstyle} source = {{uri: news.news.articles[i].urlToImage}}/>
            </View>
            <View style = {styles.space}/>
            <TouchableOpacity style = {styles.button} onPress = {() => {setLink(news.news.articles[i].url)}}>
                <Text style = {styles.txt}>
                    Read More...
                </Text>
            </TouchableOpacity>
            </>
            )
        }

        console.log(buffer);

        return (
            <>
            
           
            {buffer}
           
            </>
        )
    }

   
    return(
    <ScrollView style = {styles.container}>
    { news.loading ?
             <ActivityIndicator/>
    :
    <>
    {getNews()}
    </>
    }
    </ScrollView>
)

}

const styles = StyleSheet.create({

    container: {
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%'),
        backgroundColor: '#FFFFFF'
    },
    newsbox: {
        width: widthPercentageToDP('85%'),
        height: heightPercentageToDP('75%'),
        borderRadius: heightPercentageToDP('7%'),
        left: widthPercentageToDP('7%'),
        alignContent: 'center',
        backgroundColor: "#FF0000"
    },
    titletxt: {
        top: heightPercentageToDP('5%'),
        left: widthPercentageToDP('5%'),
        width: widthPercentageToDP('75%'),
        fontFamily: 'Roboto-Bold',
        fontSize: RFValue(18),
        color: '#FFFFFF'
    },
    desctxt: {
        top: heightPercentageToDP('7%'),
        left: widthPercentageToDP('3%'),
        fontFamily: 'Roboto-Regular',
        fontSize: RFValue(15),
        color: '#FFFFFF'

    },

    imgstyle: {
        top: heightPercentageToDP('10%'),
        left: widthPercentageToDP('28%'),
        width: widthPercentageToDP('30%'),
        height: heightPercentageToDP('15%')
    },
    space: {
        height: heightPercentageToDP('10%'),
        backgroundColor: '#FFFFFF'
    },
    button: {
        borderRadius: heightPercentageToDP('5%'),
        backgroundColor: 'white',
        height: heightPercentageToDP('9%'),
        width: widthPercentageToDP('60%'),
        bottom: heightPercentageToDP('30%'),
        left: widthPercentageToDP('20%')
    },

    txt: {
        fontFamily: 'Roboto-Bold',
        fontSize: RFValue(20),
        left: widthPercentageToDP('15%'),
        top: heightPercentageToDP('3%')

    }

})

export default News;