import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/InputField';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const LoginPage = () => {
  const navigation = useNavigation();

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
    navigation.navigate('landingPage');

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

export default LoginPage;
