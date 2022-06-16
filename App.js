import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import Splashscreen from './src/Pages/SplashScreen';
import Home from './src/Pages/Home';
import CategoriesHeader from './src/Components/CategoriesHeader';
import FavButton from './src/Components/FavButton';
import IngredientsContainer from './src/Components/IngredientsContainer';
import MenuContainer from './src/Components/MenuContainer';
import OrderButton from './src/Components/OrderButton';
import Details from './src/Pages/Details';
import Categories from './src/Pages/Categories';
import Foods from './src/Pages/Foods';
import Drinks from './src/Pages/Drinks';
import Snack from './src/Pages/Snack';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F6F6F6'} barStyle="dark-content" />
      {/* <Splashscreen /> */}
      {/* <Home /> */}
      {/* <Details /> */}
      {/* <Categories /> */}
      <Snack />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
