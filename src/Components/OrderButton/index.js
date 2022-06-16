import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const OrderButton = () => {
  const orderPlaced = () => {
    Alert.alert('Success', 'Your order has been placed', [
      {text: 'OK', onPress: () => null},
    ]);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => orderPlaced()}>
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
