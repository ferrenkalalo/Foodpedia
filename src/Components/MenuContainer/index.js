import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const MenuContainer = ({
  title = 'Mie Ayam Garuda',
  price = '15.000',
  source = require('../../Assets/Images/mieAyam.png'),
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.priceContainer}>
          <Image
            source={require('../../Assets/Icons/rupiahIcon.png')}
            style={{width: 50, height: 50}}
          />
          <Text style={styles.text}>{price}</Text>
        </View>

        <View style={styles.MenuContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.text}>{title}</Text>
            <Text>descriptions...</Text>
          </View>

          <View>
            <Image
              source={source}
              style={{width: 170, height: 130, borderRadius: 20}}
            />
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View>
            <Image
              source={require('../../Assets/Icons/locationIcon.png')}
              style={{width: 25, height: 25}}
            />
          </View>
          <View>
            <Text style={styles.locationText}>Manado</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.container,
    width: 350,
    height: 265,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    elevation: 5,
    marginVertical: 15,
  },
  MenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 15,
    width: 150,
    padding: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 5,
  },
  locationText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
});
