import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';
import MenuContainer from '../../Components/MenuContainer';
import FavButton from '../../Components/FavButton';
import IngredientsContainer from '../../Components/IngredientsContainer';
import OrderButton from '../../Components/OrderButton';

const Details = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../Assets/Icons/backIcon.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <MenuContainer />
      </View>

      <View style={styles.fav}>
        <FavButton />
      </View>

      <Text style={styles.text}>Ingredients</Text>
      <View style={styles.container}>
        <IngredientsContainer
          source={require('../../Assets/Images/Mie.png')}
          text={'mie'}
        />
        <IngredientsContainer
          source={require('../../Assets/Images/dagingAyam.png')}
          text={'daging ayam'}
        />
        <IngredientsContainer
          source={require('../../Assets/Images/sayurSawi.png')}
          text={'sayur sawi'}
        />
      </View>
      <View style={styles.button}>
        <OrderButton />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 15,
  },
  header: {
    padding: 10,
  },
  container: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fav: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: colors.text,
    paddingHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
});
