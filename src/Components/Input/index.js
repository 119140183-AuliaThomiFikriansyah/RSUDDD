import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../Assets';

const Input = props => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.TextInput}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.FontAbuABu}
        {...props}
      />
    </View>
  );
};

export default Input;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {
    width: windowWidth * 0.8,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  TextInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    fontFamily: 'FiraSansRegular',
    color: Colors.HitamDefault,
  },
});
