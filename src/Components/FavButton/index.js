import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const FavButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../Assets/Icons/favIcon.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FavButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buttonAndTitle,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },
});
