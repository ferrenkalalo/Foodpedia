import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import CategoriesHeader from '../../Components/CategoriesHeader';
import Search from '../../Components/Search';
import MenuContainer from '../../Components/MenuContainer';
import SnackData from '../../Assets/Data/SnackData';

const Snack = ({navigation}) => {
  const renderSnackItem = ({item}) => {
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
        title={'SNACK'}
        onPress={() => navigation.navigate('Home')}
      />
      <Search />
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={SnackData}
            renderItem={renderSnackItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
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
