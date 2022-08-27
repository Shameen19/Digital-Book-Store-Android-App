import  React,{useState,useEffect} from 'react';
import {  View,Image, Text,TouchableOpacity ,StyleSheet,Alert,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Provider as PaperProvider, TextInput,Avatar } from 'react-native-paper';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

 const Search=({ navigation })=>{
   const [searchbook,setdelbook]=useState("");
   const[name,setname]=useState("");
   const [objects, setObjects] = useState([]);

    const search=async()=>{
      const books=await firestore()
  .collection('Books').where("name","==",searchbook).limit(1).get();
  var dataGet = books.docs.map(books => books.data());
  if(dataGet=='')
  {
      Alert.alert("Data not found");
  }
  else{
    setObjects(dataGet);
  Alert.alert("Search Successful");
  }
  
    }


    const Item = ({ title }) => (
        <View style={{marginLeft:0, backgroundColor:'white'}}>
          <TouchableOpacity
            
            style={{ flexDirection: 'row',marginLeft:0, marginBottom: 20, marginTop: 30 }}>
            <View>
              <Image
                style={{ width: 70, height: 70}}
                source={{ uri: title.imageuri }}
              />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text>Title: {title.name}</Text>
              <Text>Number: {title.quantity}</Text>
              <Text>Total amount: {title.price}</Text>
              
            </View>
          </TouchableOpacity>
        </View>
      );
      const renderItem = ({ item }) => <Item title={item} />;
  
      // setObjects(users.data());
      // console.log("Users: ",users.data());
      // console.log("Objects: ",objects)
    
  
      const [title,settitle]=useState();
      useEffect(()=>{
        search();
      },[]);
     return(
         <View style={{backgroundColor:'#e6e6fa',height:700}}>
             <View style={{marginLeft:90,height:150,width:200,borderRadius:50,margin:10,backgroundColor:'#dcd0ff'}}>
              
             <Image  source={require('../images/remove-bag.png')} style={{resizeMode:'contain',height:100,width:200,top:5,margin:0}} />
            
             </View>
             <Text style={{marginLeft:150,fontSize:20,fontWeight:'bold'}}>Delete BOOKS</Text>
           <View style={{padding:20,margin:20}}>
               <TextInput label="Book Name" style={{height:70,borderWidth:1,margin:10}} onChangeText={setdelbook}></TextInput>
               <View style={{top:30,margin:10,height:50,width:120,marginLeft:110,backgroundColor:'lightblue'}}>
                   <Button color="black" onPress={search}> Submit </Button>
               </View>

           </View>

           <View style={{backgroundColor:'#e4e8f1'}}>    
        <View style={{ alignContent: 'center' }}>
          <FlatList data={objects} renderItem={renderItem} />
        </View>
        </View>
             </View>
     
     );
 }
 export default Search;