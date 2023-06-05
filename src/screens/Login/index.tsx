import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/InputField';

const LoginPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const handleSubmit = async () => {
    if (!name || !password) {
      alert('Please fill all fields');
      return;
    }

    alert(`Congrats! You are logged in successfully with Name: ${name}`);
    navigation.navigate('LandingPage');

    try {
      await AsyncStorage.setItem('name', name);
    } catch (error) {
      console.log('Error saving name:', error);
    }
  };

  const handleBack = () => {
    navigation.navigate('welcome');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginBottom: 10}} onPress={handleBack}>
        <Text style={styles.subHeading}>{'<  Back'}</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.heading}>Log In</Text>
        <Text style={styles.subHeading}>
          Login to explore complete features
        </Text>
      </View>

      <View style={styles.form}>
        <InputComponent
          styles={[styles.input]}
          placeholder="Name"
          value={name}
          onChange={setName}
        />

        <InputComponent
          styles={[styles.input]}
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
      </View>

      <View style={styles.submit}>
        <ButtonComponent
          title="Submit"
          onClick={handleSubmit}
          variant="contained"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 30,
  },
  heading: {
    fontSize: 34,
    marginBottom: 7,
    color: 'white',
  },
  subHeading: {
    fontSize: 14,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  titleContainer: {
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    color: 'white',
  },
  submit: {
    marginTop: 30,
  },
});

export default LoginPage;
