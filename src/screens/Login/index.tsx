import React from 'react';
import {Button, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const MyComponent = () => {
  const tw = useTailwind();

  return (
    <View>
      <Text>Heyyye</Text>
    </View>
  );
};

export default MyComponent;
