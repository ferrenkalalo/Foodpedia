import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const CategoriesHeader = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image
            source={require('../../Assets/Icons/homeIcon.png')}
            style={{width: 40, height: 40}}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CategoriesHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontFamily: 'Inter-Bold',
    color: colors.buttonAndTitle,
    marginLeft: 20,
  },
});
