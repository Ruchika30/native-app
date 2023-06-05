import React from 'react';
import {View, Text, Image} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import ButtonComponent from '../../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {styles} from './styles';

type RootStackParamList = {
  landingPage: undefined;
  register: undefined;
  login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'landingPage'>;

function LandingPage({navigation}: Props) {
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

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

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
            <Text style={[styles.text, styles.textOutlined]}>Guest Login</Text>
          </GestureRecognizer>
        </View>
      </View>
    </View>
  );
}

export default LandingPage;
