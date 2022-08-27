import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
const SignUpScreen=({navigation})=> {
    return (
      <View >
        <Image source={require('../images/signuppage1.png')} style={{resizeMode:'stretch',height:660,width:400}}/>
          <Text style={{position:'absolute',top:150,color:'white',fontSize:25}}>Name</Text>
          <TextInput style={{top:187,width:355,position:'absolute',backgroundColor:'lightgrey'}}></TextInput>
          <Text style={{position:'absolute',top:285,color:'white',fontSize:25}}>Username</Text>
          <TextInput style={{top:317,width:355,position:'absolute',backgroundColor:'lightgrey'}}></TextInput>
          <Text style={{position:'absolute',top:396,color:'white',fontSize:25}}>Password</Text>
          <TextInput style={{top:427,width:355,position:'absolute',backgroundColor:'lightgrey'}}></TextInput>
          <View style={{height:80,borderRadius:250,backgroundColor:'lightgrey',position:'absolute',top:525,marginLeft:110,widht:450,justifyContent:'center',alignItems:'center',borderWidth:2}}>
           <Button color='black' onPress={()=>navigation.navigate('Login')}>Create Account</Button>
           </View>
        </View>
    );
  }
  export default SignUpScreen;