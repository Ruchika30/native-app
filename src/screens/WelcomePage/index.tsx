import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  PanResponder,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import ButtonComponent from '../../components/Button';

function LandingPage({navigation}) {
  const slideRef = useRef(null);
  const [slideValue, setSlideValue] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (
          gestureState.dx > 0 &&
          gestureState.dx <= slideRef.current.offsetWidth
        ) {
          setSlideValue(gestureState.dx);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx >= slideRef.current.offsetWidth / 2) {
          setSlideValue(slideRef.current.offsetWidth);
          navigation.navigate('LandingPage');
        } else {
          setSlideValue(0);
        }
      },
    }),
  ).current;

  const handleGetStarted = () => {
    navigation.navigate('LandingPage');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
          <View style={styles.marginB}>
            <ButtonComponent
              title="Guest Login"
              onClick={handleGetStarted}
              variant="outlined"
            />
          </View>
          <TouchableOpacity
            style={[
              styles.sliderBtn,
              {backgroundColor: slideValue > 0 ? '#4CAF50' : '#ccc'},
            ]}
            ref={slideRef}
            {...panResponder.panHandlers}>
            <Text style={styles.buttonText}>Slide to activate</Text>
          </TouchableOpacity>
        </View>

        {/* <Button title="Get Started" onPress={getStarted} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderBtn: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
