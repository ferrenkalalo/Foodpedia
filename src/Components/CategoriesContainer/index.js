import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const CategoriesContainer = ({title, source, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <Image source={source} style={{width: 70, height: 70}} />
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.circle}>
            <Image
              source={require('../../Assets/Icons/nextIcon.png')}
              style={{width: 20, height: 20}}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesContainer;

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 180,
    backgroundColor: colors.container,
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
    elevation: 8,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colors.buttonAndTitle,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
