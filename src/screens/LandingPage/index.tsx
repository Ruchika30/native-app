import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo, {getDeviceId} from 'react-native-device-info';

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
      headerStyle: {
        backgroundColor: 'red',
        color: 'white',
      },
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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi {user}</Text>
      <Text style={styles.subHeading}>Welcome to Royals by ZNMD</Text>

      <View style={{display: 'flex'}}>
        <Text style={styles.info}>
          {`You are logged in on:   ${
            isEmulator ? 'Emulator' : 'Mobile'
          }, ${getDeviceId()}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    height: '100%',
    padding: 30,
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
  info: {
    marginVertical: 8,
    color: 'white',
  },
});
export default Landingpage;
