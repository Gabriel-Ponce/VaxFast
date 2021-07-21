import {Linking} from 'react-native';


const setLink = async(url) => {

    await Linking.openURL(url);
    console.log(typeof(url));
   }

export default setLink;