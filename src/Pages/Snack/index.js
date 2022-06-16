import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import CategoriesHeader from '../../Components/CategoriesHeader';
import Search from '../../Components/Search';
import MenuContainer from '../../Components/MenuContainer';

const Snack = ({navigation}) => {
  return (
    <View style={styles.page}>
      <CategoriesHeader
        title={'SNACK'}
        onPress={() => navigation.navigate('Home')}
      />
      <Search />
      <ScrollView>
        <View style={styles.container}>
          <MenuContainer
            price={'20.000'}
            title={'Dimsum'}
            source={require('../../Assets/Images/Dimsum.png')}
          />
          <MenuContainer
            price={'3.000'}
            title={'Kue Basah'}
            source={require('../../Assets/Images/KueBasah.png')}
          />
          <MenuContainer
            price={'15.000'}
            title={'French Fries'}
            source={require('../../Assets/Images/frenchFries.png')}
          />
          <MenuContainer
            price={'20.000'}
            title={'Dimsum'}
            source={require('../../Assets/Images/Dimsum.png')}
          />
          <MenuContainer
            price={'3.000'}
            title={'Kue Basah'}
            source={require('../../Assets/Images/KueBasah.png')}
          />
          <MenuContainer
            price={'15.000'}
            title={'French Fries'}
            source={require('../../Assets/Images/frenchFries.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Snack;

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
