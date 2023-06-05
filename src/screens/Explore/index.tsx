import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

function ExplorePage({route, navigation}) {
  const {user} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      goBack: false,
      headerStyle: {
        backgroundColor: 'red',
        color: 'white',
      },
    });
  }, [navigation]);

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
