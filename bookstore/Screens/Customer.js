import React,{useEffect} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';
import WelcomeScreen from './WelcomeScreen';
import ViewBooks from './Viewbooks';
import Placeorder from './placeorder';
import 'react-native-gesture-handler';
const CustomerScreen=({ navigation })=> {
    return (
      <View >
        <Image source={require('../images/backcheck.png')} style={{resizeMode:'stretch',height:660,width:400}}/>
        <Text style={{position:'absolute',top:265,marginLeft:165,color:'black',fontSize:25,}}>Name</Text>
        <TouchableOpacity style={{position:'absolute',marginLeft:180,top:365}} onPress={()=>navigation.navigate('ViewBooks')}> 
          <Text style={{position:'absolute',color:'black',fontSize:25,}}>View Books</Text>
        </TouchableOpacity>
         <TouchableOpacity style={{position:'absolute',marginLeft:180,top:455}}>
          <Text style={{color:'black',fontSize:25}}  onPress={()=>navigation.navigate('Placeorder')}>Place Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',marginLeft:180,top:555,}} onPress={()=>navigation.navigate('Welcome')}>
          <Text style={{color:'black',fontSize:25}}>Log Out </Text>
          </TouchableOpacity>
        </View>
    );
  }

  export default CustomerScreen;