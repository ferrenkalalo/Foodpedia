import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import Splashscreen from './src/Pages/SplashScreen';
import Home from './src/Pages/Home';
import CategoriesHeader from './src/Components/CategoriesHeader';
import FavButton from './src/Components/FavButton';
import IngredientsContainer from './src/Components/IngredientsContainer';
import MenuContainer from './src/Components/MenuContainer';
import OrderButton from './src/Components/OrderButton';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle="dark-content" />
      {/* <Splashscreen /> */}
      {/* <Home /> */}
      <CategoriesHeader title={'FOODS'} />
      <FavButton />
      <IngredientsContainer />
      <MenuContainer />
      <OrderButton />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
