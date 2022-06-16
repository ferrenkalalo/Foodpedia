import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const IngredientsContainer = ({
  source = require('../../Assets/Images/defaultIngredients.png'),
  text = 'ingredients',
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{width: 70, height: 70, borderRadius: 20}}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IngredientsContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ingredientsContainer,
    width: 110,
    height: 110,
    borderRadius: 15,
    elevation: 5,
    padding: 5,
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
});
