import React, {useRef, useState} from 'react';
import {View, Text, PanResponder, Image, StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import ButtonComponent from '../../components/Button';

function LandingPage({navigation}) {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const handleGetStarted = () => {
    navigation.navigate('LandingPage');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const onSwipeRight = () => {
    navigation.navigate('LandingPage');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  return (
    <View style={{height: '100%', padding: 30, backgroundColor: 'black'}}>
      <View>
        <View style={styles.container}>
          <Image
            style={{
              width: 'auto',
              height: 300,
              marginBottom: 15,
              alignItems: 'center',
            }}
            source={require('../../assets/logo.png')}
          />
        </View>

        <View
          style={{
            height: '60%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
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

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 20,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
  },

  buttonOutlined: {
    borderWidth: 1,
    borderColor: 'red',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textOutlined: {
    color: 'red',
  },
  container: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
  },
  marginB: {
    marginBottom: 10,
  },
});
export default LandingPage;
