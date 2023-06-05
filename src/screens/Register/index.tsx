import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import ButtonComponent from '../../components/Button';
import InputComponent from '../../components/InputField';
import {styles} from './styles';

const RegisterPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert(
      `You are registered successfully with - Name: ${name}, Email: ${email}. Kindly Log in now`,
    );
    navigation.navigate('login');
    AsyncStorage.setItem('name', name);
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
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subHeading}>
          Create an account to access the full version with all features
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
          placeholder="Email"
          value={email}
          onChange={setEmail}
          keyboardType="email-address"
        />

        <InputComponent
          styles={[styles.input]}
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />

        <InputComponent
          styles={[styles.input]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </View>

      <View style={styles.submit}>
        <ButtonComponent
          variant="contained"
          title="Submit"
          onClick={handleSubmit}
        />
      </View>
    </View>
  );
};

export default RegisterPage;
