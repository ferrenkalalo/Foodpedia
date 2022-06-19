import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Assets/Colors';
import Header from '../../Components/HomeHeader';
import Search from '../../Components/Search';
import CategoriesContainer from '../../Components/CategoriesContainer';
import PopularContainer from '../../Components/PopularContainer';
import CategoriesData from '../../Assets/Data/CategoriesData';
import popularData from '../../Assets/Data/PopularData';

const Home = ({navigation}) => {
  const [find, setFind] = useState();

  const renderCategoryItem = ({item}) => {
    return (
      <CategoriesContainer
        title={item.title}
        source={item.Image}
        onPress={() => {
          navigation.navigate(item.go);
        }}
      />
    );
  };

  const renderPopularItem = ({item}) => {
    return (
      <PopularContainer
        title={item.title}
        source={item.image}
        onPress={() => {
          navigation.navigate(item.go, {item: item});
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Search value={find} onChangeText={text => console.log(text)} />
        <Text style={styles.text}>Categories</Text>
        <View style={styles.categories}>
          <FlatList
            data={CategoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <Text style={styles.text}>Popular</Text>
        <View style={styles.popular}>
          <FlatList
            data={popularData}
            renderItem={renderPopularItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 22,
  },
  categories: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
  popular: {
    alignItems: 'center',
  },
});
