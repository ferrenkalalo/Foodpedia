import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import CategoriesHeader from '../../Components/CategoriesHeader';
import Search from '../../Components/Search';
import MenuContainer from '../../Components/MenuContainer';
import DrinksData from '../../Assets/Data/DrinksData';

const Drinks = ({navigation}) => {
  const renderDrinksItem = ({item}) => {
    return (
      <MenuContainer
        price={item.price}
        title={item.title}
        source={item.image}
        loc={item.location}
        onPress={() => {
          navigation.navigate('Details', {item: item});
        }}
      />
    );
  };

  return (
    <View style={styles.page}>
      <CategoriesHeader
        title={'DRINKS'}
        onPress={() => navigation.navigate('Home')}
      />
      <Search />
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={DrinksData}
            renderItem={renderDrinksItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
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
