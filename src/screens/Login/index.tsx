import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Startup = ({}) => {
  // const { Layout, Gutters } = useTheme();

  return (
    <View>
      <ActivityIndicator size={'large'} style={{margin: '20px'}} />
    </View>
  );
};

export default Startup;
