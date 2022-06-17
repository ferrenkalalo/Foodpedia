import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../Assets/Colors';
import Header from '../../Components/HomeHeader';
import Search from '../../Components/Search';
import CategoriesContainer from '../../Components/CategoriesContainer';
import PopularContainer from '../../Components/PopularContainer';
import {FlatList} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [find, setFind] = useState();

  return (
    <View style={styles.container}>
      <Header />
      <Search value={find} onChangeText={text => console.log(text)} />
      <ScrollView>
        <Text style={styles.text}>Categories</Text>
        <View style={styles.categories}>
          <CategoriesContainer
            title={'Foods'}
            source={require('../../Assets/Images/Foods.png')}
            onPress={() => navigation.navigate('Foods')}
          />
          <CategoriesContainer
            title={'Drinks'}
            source={require('../../Assets/Images/Drinks.png')}
            onPress={() => navigation.navigate('Drinks')}
          />
          <CategoriesContainer
            title={'Snack'}
            source={require('../../Assets/Images/Snack.png')}
            onPress={() => navigation.navigate('Snack')}
          />
        </View>
        <Text style={styles.text}>Popular</Text>
        <View style={styles.popular}>
          <PopularContainer
            title={'Mie Ayam Garuda'}
            source={require('../../Assets/Images/mieAyam.png')}
            onPress={() => navigation.navigate('Details')}
          />
          <PopularContainer
            title={'Ikan Bakar Tampurung'}
            source={require('../../Assets/Images/IkanBakar.png')}
          />
          <PopularContainer
            title={'Mie Ayam Garuda'}
            source={require('../../Assets/Images/mieAyam.png')}
          />
          <PopularContainer
            title={'Ikan Bakar Tampurung'}
            source={require('../../Assets/Images/IkanBakar.png')}
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
    flexDirection: 'row',
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
