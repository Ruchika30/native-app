import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Image} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import ButtonComponent from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

type RootStackParamList = {
  landingPage: undefined;
  register: undefined;
  login: undefined;
  welcome: undefined;
  explore: undefined;
};

export type INavigation = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'welcome'>;
};

function LandingPage() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleGetStarted = () => {
    navigation.navigate('landingPage');
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };

  const handleLogin = () => {
    navigation.navigate('login');
  };

  const onSwipeRight = () => {
    navigation.navigate('landingPage');
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/logo.png')}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <View style={styles.marginB}>
            <ButtonComponent title="Welcome" onClick={handleGetStarted} />
            <ButtonComponent
              title="Register"
              onClick={handleRegister}
              variant="contained"
            />
          </View>
          <View style={styles.marginB}>
            <ButtonComponent
              title="Login"
              onClick={handleLogin}
              variant="outlined"
            />
          </View>

          <GestureRecognizer
            onSwipeRight={onSwipeRight}
            config={config}
            style={[styles.button, styles.buttonOutlined]}>
            <Text style={[styles.text, styles.textOutlined]}>
              Swipe right for Guest Login
            </Text>
          </GestureRecognizer>
        </View>
      </View>
    </View>
  );
}

export default LandingPage;
