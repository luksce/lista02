import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ThemeContext from '../context/ThemeContext';

type FormProps = {
  getBooks: Function;
};

const Form: React.FC<FormProps> = ({ getBooks }: FormProps) => {
  const [searchBook, setSearchBook] = React.useState('');
  const theme = React.useContext(ThemeContext);

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={{...styles.title, color: theme.textItem}}>Library</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={{ ...styles.input, backgroundColor: theme.background, color: theme.textItem }}
          value={searchBook}
          onChangeText={setSearchBook}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity onPress={() => getBooks(searchBook)} disabled={searchBook === ''} accessibilityLabel="Procurar por Livros">
          <View style={{ ...styles.button, backgroundColor: theme.button }}>
            <Icon name="search" color='#fff' size={16} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 6,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: 310,
    height: 36,
    backgroundColor: '#FFF',
    color: '#222',
    padding: 6,
    fontSize: 14,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#75b5fd',
    textAlign: 'left',
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#75b5fd',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Form;