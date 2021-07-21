import React, {useState} from 'react';
import {StyleSheet, Text, Image, Pressable, Alert, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import database, { firebase } from '@react-native-firebase/database'
import { ScrollView } from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const Survey = ({navigation}) => {


 const [CBs1, setCBs1] = useState({

    question1answ: -1,
    question1yes: false,
    question1no: false,
    

 });

 const [CBs2, setCBs2] = useState({

    question2answ: -1,
    question2yes: false,
    question2no: false,

 });

 const [CBs3, setCBs3] = useState({

    question3answ: -1,
    question3yes: false,
    question3no: false,

 });

 const [CBs4, setCBs4] = useState({

    question4answ: -1,
    question4yes: false,
    question4no: false,

 });

 const [CBs5, setCBs5] = useState({

    question5answ: -1,
    question5yes: false,
    question5no: false,

 });

 const [CBs6, setCBs6] = useState({

    question6answ: -1,
    question6yes: false,
    question6no: false,

 });

 const [CBs7, setCBs7] = useState({

    question7answ: -1,
    question7yes: false,
    question7no: false,

 });

 const [CBs8, setCBs8] = useState({

    question8answ: -1,
    question8yes: false,
    question8no: false,

 });

 const [CBs9, setCBs9] = useState({

    question9answ: -1,
    question9yes: false,
    question9no: false,

 });

 const [CBs10, setCBs10] = useState({

    question10answ: -1,
    question10yes: false,
    question10no: false,

 });

 const [CBs11, setCBs11] = useState({

    question11answ: -1,
    question11yes: false,
    question11no: false,

 });

 const [CBs12, setCBs12] = useState({

    question12answ: -1,
    question12yes: false,
    question12no: false,

 });

 const [CBs13, setCBs13] = useState({

    question13answ: -1,
    question13yes: false,
    question13no: false,

 });

 const [CBs14, setCBs14] = useState({

    question14answ: -1,
    question14yes: false,
    question14no: false,

 });

 const [CBs15, setCBs15] = useState({

    question15answ: -1,
    question15yes: false,
    question15no: false,

 });

 const [CBs16, setCBs16] = useState({

    question16answ: -1,
    question16yes: false,
    question16no: false,

 });

 const [CBs17, setCBs17] = useState({

    question17answ: -1,
    question17yes: false,
    question17no: false,

 });

 const [CBs18, setCBs18] = useState({

    question10answ: -1,
    question10yes: false,
    question10no: false,

 });

 

 const checkAnswer = () => {
    console.log("buenas")
    var Percentage = 0;
    var covquestions = 0;
    var sympthquestions = 0;
    var chronicquestions = 0;
    var workquestions = 0;
    var username;
    const user = firebase.auth().currentUser;
    if (user){
    username =  user.uid;
    }

    const path = 'users/' + username;

    for (var i = 1; i <= 18; i++) {
        console.log("buenas2")
        var current = eval(`CBs${i}.question${i}answ`);
        if (current == -1) {
            Alert.alert("Error", "Please answer all the questions", [{text: "ok", onPress: () => {}}])
            //console.log(i);
            return;
        }
        if (i == 1) {
            covquestions = covquestions + current;
        }
        else if (i > 1 && i <= 10) {
            sympthquestions = sympthquestions + current;
        }
        else if (i > 10 && i <= 15) {
            chronicquestions = chronicquestions + current;
        }
        else {
            workquestions = workquestions + current;
        }

        

        
    }
    
    if (sympthquestions >= 5) {
        Percentage =  90;
    }
    else if (sympthquestions >= 3) {
        Percentage =  40;
    }

    Percentage = Percentage + 10*(chronicquestions);

    Percentage = Percentage + 15*(workquestions)

    if (Percentage > 95) {
        Percentage = 95;
    }

    console.log("cov: " + covquestions)
    console.log("symp: " + sympthquestions)
    console.log("chro: " + chronicquestions)
    console.log("work: " + workquestions)
    console.log("percentage: " + Percentage)
    
    database().ref(path).update({ lastpercentage: Percentage });
    
    
    navigation.navigate("SurveyResult")
}

 var current2 = eval(`CBs1.question1answ`);
 console.log(current2)
 //console.log(CBs10.question10answ);
 
return(
    <ScrollView style = {styles.container}>
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 1
        </Text>
        <Text style = {styles.questiontxt}>
        Have you been Covid-19 tested, getting the test by the nose or throat?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs1.question1yes} onValueChange = {(newValue) => setCBs1({ question1answ: 1,question1yes: newValue, question1no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs1.question1no} onValueChange = {(newValue) => setCBs1({ question1answ: 0,question1yes: false, question1no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 2
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt fever?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs2.question2yes} onValueChange = {(newValue) => setCBs2({ question2answ: 1,question2yes: newValue, question2no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs2.question2no} onValueChange = {(newValue) => setCBs2({ question2answ: 0,question2yes: false, question2no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 3
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt shaking chills?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs3.question3yes} onValueChange = {(newValue) => setCBs3({ question3answ: 1,question3yes: newValue, question3no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs3.question3no} onValueChange = {(newValue) => setCBs3({ question3answ: 0,question3yes: false, question3no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 4
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt throat pain?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs4.question4yes} onValueChange = {(newValue) => setCBs4({ question4answ: 1,question4yes: newValue, question4no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs4.question4no} onValueChange = {(newValue) => setCBs4({ question4answ: 0,question4yes: false, question4no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 5
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt shaking intense fatigue?
        </Text>        
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs5.question5yes} onValueChange = {(newValue) => setCBs5({ question5answ: 1,question5yes: newValue, question5no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs5.question5no} onValueChange = {(newValue) => setCBs5({ question5answ: 0,question5yes: false, question5no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 6
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you been coughing?
        </Text>        
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs6.question6yes} onValueChange = {(newValue) => setCBs6({ question6answ: 1,question6yes: newValue, question6no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs6.question6no} onValueChange = {(newValue) => setCBs6({ question6answ: 0,question6yes: false, question6no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 7
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt headache?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs7.question7yes} onValueChange = {(newValue) => setCBs7({ question7answ: 1,question7yes: newValue, question7no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs7.question7no} onValueChange = {(newValue) => setCBs7({ question7answ: 0,question7yes: false, question7no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 8
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt loss of smell?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs8.question8yes} onValueChange = {(newValue) => setCBs8({ question8answ: 1,question8yes: newValue, question8no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs8.question8no} onValueChange = {(newValue) => setCBs8({ question8answ: 0,question8yes: false, question8no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 9
        </Text>
        <Text style = {styles.questiontxt}>
            In the last 2 months, have you felt headache?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs9.question9yes} onValueChange = {(newValue) => setCBs9({ question9answ: 1,question9yes: newValue, question9no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs9.question9no} onValueChange = {(newValue) => setCBs9({ question9answ: 0,question9yes: false, question9no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 10
        </Text>
        <Text style = {styles.questiontxt}>
           Have you felt one of these sympthoms during last 2 weeks
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs10.question10yes} onValueChange = {(newValue) => setCBs10({ question10answ: 1,question10yes: newValue, question10no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs10.question10no} onValueChange = {(newValue) => setCBs10({ question10answ: 0,question10yes: false, question10no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 11
        </Text>
        <Text style = {styles.questiontxt}>
            Have you been diagnosed with diabetes?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs11.question11yes} onValueChange = {(newValue) => setCBs11({ question11answ: 1,question11yes: newValue, question11no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs11.question11no} onValueChange = {(newValue) => setCBs11({ question11answ: 0,question11yes: false, question11no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 12
        </Text>
        <Text style = {styles.questiontxt}>
            Have you been diagnosed with high blood pressure?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs12.question11yes} onValueChange = {(newValue) => setCBs12({ question12answ: 1,question12yes: newValue, question12no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs12.question11no} onValueChange = {(newValue) => setCBs12({ question12answ: 0,question12yes: false, question12no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 13
        </Text>
        <Text style = {styles.questiontxt}>
            Are you a heavy smoker?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs13.question13yes} onValueChange = {(newValue) => setCBs13({ question13answ: 1,question13yes: newValue, question13no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs13.question13no} onValueChange = {(newValue) => setCBs13({ question13answ: 0,question13yes: false, question13no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 14
        </Text>
        <Text style = {styles.questiontxt}>
            Have you been diagnosed with high blood pressure?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs14.question14yes} onValueChange = {(newValue) => setCBs14({ question14answ: 1,question14yes: newValue, question14no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs14.question14no} onValueChange = {(newValue) => setCBs14({ question14answ: 0,question14yes: false, question14no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 15
        </Text>
        <Text style = {styles.questiontxt}>
            Are you overweight? Do you have obesity? 
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs15.question15yes} onValueChange = {(newValue) => setCBs15({ question15answ: 1,question15yes: newValue, question15no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs15.question15no} onValueChange = {(newValue) => setCBs15({ question15answ: 0,question15yes: false, question15no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>
        
        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 16
        </Text>
        <Text style = {styles.questiontxt}>
            Have you been in contact with someone with Covid-19
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs16.question16yes} onValueChange = {(newValue) => setCBs16({ question16answ: 1,question16yes: newValue, question16no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs16.question16no} onValueChange = {(newValue) => setCBs16({ question16answ: 0,question16yes: false, question16no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox}/>
        <Text style = {styles.questiontittxt}>
            Question 17
        </Text>
        <Text style = {styles.questiontxt}>
            Do you work in healthcare?
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs17.question17yes} onValueChange = {(newValue) => setCBs17({ question17answ: 1,question17yes: newValue, question17no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs17.question17no} onValueChange = {(newValue) => setCBs17({ question17answ: 0,question17yes: false, question17no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <View style = {styles.questionbox} />
        <Text style = {styles.questiontittxt}>
            Question 18
        </Text>
        <Text style = {styles.questiontxt}>
            Do you work in one of these sectors?: Comerce, Transport, Janitor, Police, Firefighter
        </Text>
        <CheckBox style = {styles.CheckBoxyes} disabled = {false} value = {CBs18.question18yes} onValueChange = {(newValue) => setCBs18({ question18answ: 1,question18yes: newValue, question18no: false})}/>
        <CheckBox style = {styles.CheckBoxno} disabled = {false} value = {CBs18.question18no} onValueChange = {(newValue) => setCBs18({ question18answ: 0,question18yes: false, question18no: newValue})}/>
        <Text style = {styles.checkboxtxtyes}>yes</Text> 
        <Text style = {styles.checkboxtxtno}>no</Text>

        <TouchableOpacity onPress = {() => {checkAnswer()}} style = {styles.button} title = "Finish">
            <Text style = {styles.buttontxt}>
                Finish
            </Text>
        </TouchableOpacity>

        </ScrollView>
)
}


export default Survey;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%')      
    },

    questionbox : {
        left: widthPercentageToDP('5%'),
        height: heightPercentageToDP('50%'),
        width: widthPercentageToDP('90%'),
        borderRadius: heightPercentageToDP('7%'),
        backgroundColor: '#0E92DF'
    },
    
    

    questiontittxt: {
        fontSize: RFValue(30),
        fontFamily: 'Roboto-Bold',
        color: 'white',
        width: widthPercentageToDP('90%'),
        bottom: heightPercentageToDP('48%'),
        left: widthPercentageToDP('28%')
    },

    questiontxt: {
        fontSize: RFValue(23),
        fontFamily: 'Roboto-Regular',
        color: 'white',
        width: widthPercentageToDP('70%'),
        bottom: heightPercentageToDP('45%'),
        left: widthPercentageToDP('10%')
    },

    button: {
        borderRadius: heightPercentageToDP('10%'),
        backgroundColor: '#0E92DF',
        left: widthPercentageToDP('10%'),
        bottom: heightPercentageToDP('20%'),
        height: heightPercentageToDP('10%'),
        width: widthPercentageToDP('80%'),
    },
    buttontxt : {
        fontSize: RFValue(30),
        fontFamily: 'Roboto-Bold',
        color: 'white',
        left: widthPercentageToDP('27%'),
        top: heightPercentageToDP('2%')
        
    },

    checkboxtxtyes: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: 'white',
        
        bottom: heightPercentageToDP('49%'),
        left: widthPercentageToDP('25%'),
        
        
    },
    checkboxtxtno: {
        fontSize: 25,
        fontFamily: 'Roboto-Bold',
        color: 'white',
        bottom: heightPercentageToDP('43.5%'),
        left: widthPercentageToDP('25%'),
        
    },
    CheckBoxyes: {
        transform: [{ scaleX: 2.0 }, { scaleY: 2.0}],
        bottom: heightPercentageToDP('40%'),
        left: 50,
        
    },
    CheckBoxno: {
        transform: [{ scaleX: 2.0 }, { scaleY: 2.0}],
        bottom: heightPercentageToDP('35%'),
        left: 50,
        
    }


});