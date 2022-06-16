import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from './src/Assets/Colors';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>App</Text>
      <Image
        source={require('./src/Assets/Icons/locationIcon.png')}
        style={{width: 50, height: 50}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // fontFamily: 'Inter-Bold',
    // fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: colors.buttonAndTitle,
  },
});
