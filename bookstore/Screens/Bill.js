import * as React from 'react';
import {  View,Image, Text,ScrollView, TouchableOpacity ,Alert,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Card,Title,Paragraph,Avatar,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';

const Billing=({route,navigation})=>{
    const { title, Quantity, address } = route.params;

    return(
        <View>
        <View>
            <Image source={require('../images/bill.png')} style={{top:10,resizeMode:'contain',marginRight:250,height :250,width:400}}/>
            <ScrollView>
            <Text style={{marginLeft:150,fontSize:25,justifyContent:'center',alignItems:'center',color:'black'}}>My Cart</Text>
            <View style={{margin:20,top:30}}>
            <Text>{title}</Text>
            <Text>{Quantity}</Text>
            <Text>{address}</Text>
            </View>
            </ScrollView>
        </View>
        


            </View>
    
    );

}
export default Billing;