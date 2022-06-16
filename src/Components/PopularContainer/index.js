import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const PopularContainer = ({title, source}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../Assets/Icons/PopularIcon.png')}
          style={{width: 40, height: 40}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text>descriptions...</Text>
        </View>
      </View>
      <View>
        <Image
          source={source}
          style={{width: 135, height: 100, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default PopularContainer;

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 150,
    backgroundColor: colors.container,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
  textContainer: {
    marginTop: 10,
    width: 150,
  },
});
