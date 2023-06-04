import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {StyleSheet} from 'react-native';

function LandingPage() {
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            // color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        ruchika sood heyyes
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          // {
          //   color: isDarkMode ? Colors.light : Colors.dark,
          // },
        ]}>
        {/* {children} */}
      </Text>
    </View>
  );
}

export default LandingPage;
