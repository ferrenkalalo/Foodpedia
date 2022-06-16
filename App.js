import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './src/Routers';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle="dark-content" />
      <Routers />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
