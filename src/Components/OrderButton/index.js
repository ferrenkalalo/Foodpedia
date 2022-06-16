import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const OrderButton = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => null}>
        <View style={styles.container}>
          <Text style={styles.text}>place order</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderButton;

const styles = StyleSheet.create({
  container: {
    margin: 20, //hapus
    backgroundColor: colors.buttonAndTitle,
    width: 297,
    height: 57,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: colors.text,
  },
});
