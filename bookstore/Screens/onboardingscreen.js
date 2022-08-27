import React from 'react';
import {View,Text,Button,StyleSheet,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const OnboardingScreen=({navigation})=>{
    return(
        <Onboarding
        onSkip={()=>navigation.navigate("Welcome")}
        onDone={()=>navigation.navigate("Welcome")}
        pages={[
            {
                backgroundColor:'#fff',
                image:<Image source={require('../images/chap.jpg')} style={{resizeMode:'contain',height:600,width:450}} />,
                title:'Onboarding 1',
                subtitle:'Welcome to Sacred Knowledge',
                
            },
            {
                backgroundColor:'#fff',
                image:<Image source={require('../images/bookwallpaper.jpg')} style={{bottom:150,height:280}}/>,
                title:'Welcome',
                subtitle:'Welcome to Sacred Knowledge.We have some amzaing books for you ',
            },
        ]}
        />
    );
};
export default OnboardingScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
});