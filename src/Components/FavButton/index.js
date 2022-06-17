import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const FavButton = () => {
  const FavAdded = () => {
    Alert.alert('Success', 'Added to your favorite', [
      {text: 'OK', onPress: () => null},
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => FavAdded()}>
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
