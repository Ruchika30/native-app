import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

function ExplorePage({route}: {route?: {params: {user: string}}}) {
  const navigation = useNavigation();

  const {user} = route && route.params;

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
      <View style={styles.wrapper}>
        <Text style={styles.subHeading}>
          Welcome to the explore section of the app
        </Text>
      </View>
    </View>
  );
}

export default ExplorePage;
