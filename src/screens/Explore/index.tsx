import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import DeviceInfo from 'react-native-device-info';

function ExplorePage({route, navigation}) {
  const {user} = route.params;
  console.log('userhh--', user);
  const [isEmulator, setIsEmulator] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      goBack: false,
      headerStyle: {
        backgroundColor: 'red',
        color: 'white',
      },
    });

    DeviceInfo.isEmulator().then(device => {
      setIsEmulator(device);
    });
  }, []);

  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>Hi {user}</Text>
      <Text style={styles.heading}>
        Welcome to the explore section of the app
      </Text>
    </View>
  );
}

export default ExplorePage;
