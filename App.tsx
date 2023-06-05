import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomePage';
import LoginScreen from './src/screens/Login';
import LandingPage from './src/screens/LandingPage';
import RegisterPage from './src/screens/Register';

const MyComponent = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{title: 'welcome'}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />

        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{title: 'Register'}}
        />

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
