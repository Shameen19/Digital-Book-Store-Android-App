import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';

const WelcomeScreen=({ navigation })=> {
  return (
    <View >
      <Image source={require('../images/welcome.png')} style={{resizeMode:'contain',height:245,width:360}}/>
      <View style={{margin:10}}>
        <TouchableOpacity  style={{justifyContent:'center',alignItems:'center',margin:35,marginHorizontal:85,marginTop:70,backgroundColor:'#6495ED',width:210,height:45}} onPress={()=>navigation.navigate('SignUp')}><Text style={{fontSize:20,color:'white'}}>Sign Up</Text></TouchableOpacity>
        <TouchableOpacity  style={{justifyContent:'center',alignItems:'center',marginHorizontal:85,backgroundColor:'#e6e6fa',width:210,height:45}}><Text style={{fontSize:20,color:'#4169E1'}} onPress={()=>navigation.navigate('Login')}>Log IN</Text></TouchableOpacity>
        <TouchableOpacity  style={{justifyContent:'center',alignItems:'center',marginHorizontal:85,width:210,height:45}}><Text style={{fontSize:20,color:'#4169E1'}}>Skip for now</Text></TouchableOpacity>
        </View>

    </View>
  );
}
export default WelcomeScreen;