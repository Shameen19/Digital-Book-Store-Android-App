import  React,{useState} from 'react';
import {  View,Image, Text,ScrollView, TouchableOpacity ,Alert,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Card,Title,Paragraph,Avatar,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import Billing from './Bill';

const Placeorder=({ navigation })=>{
  const[title,settitle]=useState();
  const[Quantity,setquan]=useState();
  const[address,setadd]=useState();

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Order Confirmation",
      "Please Confirm Your order",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
            text: "Yes", onPress: () => 
            {
                console.log("OK Pressed"),
                navigation.navigate('Bill',{
                  title:title,
                  Quantity:Quantity,
                  address:address
                })
             } 
        }
      ]
    );

    return(
        <View>
        <View>
            <Image source={require('../images/hj.png')} style={{resizeMode:'contain',marginRight:250,height :250,width:400}}/>
            <Text style={{marginLeft:150,fontSize:25,justifyContent:'center',alignItems:'center',color:'black'}}>My Cart</Text>
            <View style={{margin:20,top:30}}>
            <TextInput label="Book name" onChangeText={settitle}></TextInput>
            <TextInput label="Quantity" onChangeText={setquan}></TextInput>
            <TextInput label="Address" onChangeText={setadd}></TextInput>
            </View>
        </View>
        <View style={{top:45,backgroundColor:'lightblue',width:200,marginLeft:100}}>
                <Button color='blue' onPress={()=>{createTwoButtonAlert({navigation})}}>Purchase</Button>
            </View>
        </View>
    
    );

}
export default Placeorder;