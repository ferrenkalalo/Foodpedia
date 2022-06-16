import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import CategoriesHeader from '../../Components/CategoriesHeader';
import Search from '../../Components/Search';
import MenuContainer from '../../Components/MenuContainer';

const Drinks = ({navigation}) => {
  return (
    <View style={styles.page}>
      <CategoriesHeader
        title={'DRINKS'}
        onPress={() => navigation.navigate('Home')}
      />
      <Search />
      <ScrollView>
        <View style={styles.container}>
          <MenuContainer
            price={'10.000'}
            title={'Es Kelapa Muda'}
            source={require('../../Assets/Images/KelapaMuda.png')}
          />
          <MenuContainer
            price={'30.000'}
            title={'Bubble Tea'}
            source={require('../../Assets/Images/BubbleTea.png')}
          />
          <MenuContainer
            price={'15.000'}
            title={'Coffee Latte'}
            source={require('../../Assets/Images/CoffeeLatte.png')}
          />
          <MenuContainer
            price={'10.000'}
            title={'Es Kelapa Muda'}
            source={require('../../Assets/Images/KelapaMuda.png')}
          />
          <MenuContainer
            price={'30.000'}
            title={'Bubble Tea'}
            source={require('../../Assets/Images/BubbleTea.png')}
          />
          <MenuContainer
            price={'15.000'}
            title={'Coffee Latte'}
            source={require('../../Assets/Images/CoffeeLatte.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Drinks;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 22,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 35,
  },
});
