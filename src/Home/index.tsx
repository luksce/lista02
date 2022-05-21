import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import api from "../services/api";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home: React.FC = () => {
  const [book, setBook] = useState([]);
  const [searchBook, setSearchBook] = useState('');

  React.useEffect(() => {
    api.get("/search?").then((response) => {
        setBook(response.data.hits);
    });
  }, []);

    const getBook = async () => {
      try {
        const {data} = await api.get(`/search?query=${searchBook}`);
        setBook(data.hits);
      } catch(error) {
        console.log(error)
      }
    }

    return(
      <SafeAreaView >
        <Text style={styles.primaryText}>Library</Text>
        <View style={styles.header}>
          <TextInput style={styles.input} value={searchBook} onChangeText={text => setSearchBook(text)}/>
          <TouchableOpacity style={styles.button} onPress={getBook} >
            <Text><Feather name="search" size={24} color="#75b5fd" /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList data={book} 
                    keyExtractor={({id}) => id} 
                    renderItem={({item}) => (
                <View style={styles.infoBook}>
                  <Text><Entypo name="user" size={24} color="black" /> {item.author}</Text>
                  <Text><FontAwesome name="book" size={24} color="black" /> {item.title}</Text>
                  <Text><Feather name="link" size={24} color="black" /> {item.url}</Text>
                </View>       

          )} 
          />

        </View>
      </SafeAreaView>
    )

}

export default Home;

const styles = StyleSheet.create({
  primaryText:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  header:{
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  input:{
    width: 250,
    height: 30,
    padding: 3,
    borderWidth: 1,
    borderColor: "#75b5fd"
  },
  button:{
    marginLeft: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  infoBook:{
    backgroundColor: 'skyblue',
    borderRadius: 5,
    height: 100,
    width: 400,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 5,
  }
});

