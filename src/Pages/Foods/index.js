import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import CategoriesHeader from '../../Components/CategoriesHeader';
import Search from '../../Components/Search';
import MenuContainer from '../../Components/MenuContainer';

const Foods = ({navigation}) => {
  return (
    <View style={styles.page}>
      <CategoriesHeader
        title={'FOODS'}
        onPress={() => navigation.navigate('Home')}
      />
      <Search />
      <ScrollView>
        <View style={styles.container}>
          <MenuContainer />
          <MenuContainer
            price={'25.000'}
            title={'Ikan Bakar Tampurung'}
            source={require('../../Assets/Images/IkanBakar.png')}
          />
          <MenuContainer
            price={'150.000'}
            title={'Lobster'}
            source={require('../../Assets/Images/Lobster.png')}
          />
          <MenuContainer />
          <MenuContainer
            price={'25.000'}
            title={'Ikan Bakar Tampurung'}
            source={require('../../Assets/Images/IkanBakar.png')}
          />
          <MenuContainer
            price={'150.000'}
            title={'Lobster'}
            source={require('../../Assets/Images/Lobster.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Foods;

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
