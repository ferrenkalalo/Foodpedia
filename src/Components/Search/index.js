import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import colors from '../../Assets/Colors';

const Search = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search..."
        value={value}
        onChangeText={onChangeText}
      />
      <Image
        source={require('../../Assets/Icons/searchIcon.png')}
        style={{width: 25, height: 25}}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
});
