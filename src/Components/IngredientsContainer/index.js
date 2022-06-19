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
        style={{width: 70, height: 70, borderRadius: 20, resizeMode: 'contain'}}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IngredientsContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ingredientsContainer,
    borderRadius: 15,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 13,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: colors.text,
  },
});
