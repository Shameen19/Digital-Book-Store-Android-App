import * as React from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput } from 'react-native-paper';

import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import CustomerScreen from './Customer';
import LoginScreen from './login';



const Tabnavigator=()=>{
    return(
        <Tab.Navigator
      initialRouteName="Customer"
      activeColor="#222930"
      activeBackgroundColor=" #222930"
      inactiveBackgroundColor="#222930"
    >
        <Tab.Screen
        name="Profile"
        component={CustomerScreen}
        options={{
          tabBarLabel: 'My Profile',
          header:()=>null,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}
export default Tabnavigator;