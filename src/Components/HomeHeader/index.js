import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/Icons/listIcon.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              source={require('../../Assets/Images/profilePicture.jpg')}
              style={{height: 45, width: 45, borderRadius: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.foodpediaTitle}>
        <Text style={styles.foodpediaText}>FOODPEDIA</Text>
        <View style={styles.location}>
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
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodpediaTitle: {
    marginTop: 20,
  },
  foodpediaText: {
    fontSize: 22,
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  locationText: {
    fontSize: 15,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
});
