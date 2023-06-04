import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/LandingPage';
import LoginScreen from './src/screens/Login';
// import {TailwindProvider} from 'tailwind-rn';
// import utilities from './tailwind.json';

const MyComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <TailwindProvider utilities={utilities}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
      {/* </TailwindProvider> */}
    </NavigationContainer>
  );
};

export default MyComponent;
