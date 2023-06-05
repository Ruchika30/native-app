import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import {styles} from './styles';
import ButtonComponent from '../../components/Button';

function Landingpage({navigation}) {
  const [user, setUser] = useState('Guest');
  const [isEmulator, setIsEmulator] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('name');
      navigation.navigate('welcome');
    } catch (error) {
      console.log('Error saving name:', error);
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      goBack: false,
      headerStyle: {
        backgroundColor: 'red',
        color: 'white',
      },
      headerBackVisible: false,
      headerRight: () => (
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.subHeading}>Logout</Text>
        </TouchableOpacity>
      ),
    });

    DeviceInfo.isEmulator().then(device => {
      setIsEmulator(device);
    });
  }, []);

  const getDeviceId = () => {
    return DeviceInfo.getDeviceId();
  };

  const loadNameFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        setUser(value);
      }
    } catch (error) {
      console.log('Error loading name:', error);
    }
  };

  useEffect(() => {
    loadNameFromStorage();
  }, []);

  const handleExplore = () => {
    navigation.navigate('explore', {user});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi {user}</Text>
      <Text style={styles.subHeading}>Welcome to Royals by ZNMD</Text>

      <View style={styles.device}>
        <Text style={styles.info}>
          {`You are logged in on:   ${
            isEmulator ? 'Emulator' : 'Mobile'
          }, ${getDeviceId()}`}
        </Text>
      </View>

      <View style={{marginTop: 10}}>
        <ButtonComponent
          fullWidth={false}
          title="Explore"
          onClick={handleExplore}
          variant="contained"
        />
      </View>
    </View>
  );
}

export default Landingpage;
