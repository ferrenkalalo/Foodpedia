import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import colors from '../../Assets/Colors';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/Images/FoodpediaLogo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.buttonAndTitle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
  },
});
