import  React,{useEffect, useState} from 'react';
import {  View,Image, Text,ScrollView, TouchableOpacity ,StyleSheet, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button,Card,Title,Paragraph,Provider as PaperProvider, TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
const ViewBooks=({ navigation })=>{
  const [objects, setObjects] = useState([]);

  const getBookData = async () => {
    const books = await firestore().collection('Books').get();
    var dataGet = books.docs.map(books => books.data());
    setObjects(dataGet);
    // books.forEach(documentSnapshot => {
      
        
      
    //   const updateObjects = [...objects, dataGet];
    //   setObjects(updateObjects);
    // });
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
      getBookData();
    },[]);
    return(
        <View style={{backgroundColor:'#e4e8f1'}}>    
        <View style={{ alignContent: 'center' }}>
          <FlatList data={objects} renderItem={renderItem} />
        </View>
        {/* <ScrollView>
      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/onebook2.jpg')} 
          />
        </View>
      </Card>

      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc',width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/2ndbook2.jpg')} 
          />
        </View>
      </Card>


      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/3rdbook3.jpg')} 
          />
        </View>
      </Card>


      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/4thimages4.jpg')} 
          />
        </View>
      </Card>


      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/5thbook5.jpg')} 
          />
        </View>
      </Card>

      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/6thbook6.jpg')} 
          />
        </View>
      </Card>

      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor: '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/7thbook7.jpg')} 
          />
        </View>
      </Card>

      <Card
        style={{ marginTop: 20 ,}}>
        <View style={{ flexDirection: 'row' }}>
          <Card.Content style={{ backgroundColor:  '#a2e8fc', width: 270 ,height:180}}>
            <Title style={{ marginLeft: 5 }}>Title: Book Of night </Title>
            <Paragraph style={{ marginLeft: 15 }}>
              jsdfjlksdjsldkjfsdlkfjsdlfksdjfslkj
              ljdfskldsjfldskjldsfkjdslfjdslfjdfsl
              ,nfsdlkjdslkjjdslkfjsdlkfjsdlkfjsdlfj

            </Paragraph>
            <View style={{margin:20,backgroundColor:'#eedee3'}}>
                <Button>Add to Cart</Button>
            </View>
          </Card.Content>
          <Card.Cover
            style={{resizeMode:'contain',height: 175, width: 125, marginRight: 70 }}
            source={require('../images/8thbook8.jpg')} 
          />
        </View>
      </Card>
      </ScrollView>  */}
        </View>
    );
}

export default ViewBooks