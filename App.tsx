import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomePage';
import LoginScreen from './src/screens/Login';
import LandingPage from './src/screens/LandingPage';
import RegisterPage from './src/screens/Register';
import ExplorePage from './src/screens/Explore';

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
          name="login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />

        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={{title: 'Register'}}
        />

        <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{title: ''}}
        />
        <Stack.Screen
          name="explore"
          component={ExplorePage}
          options={{title: 'Explore'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
