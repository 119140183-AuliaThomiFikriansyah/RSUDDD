import React from 'react';
import {StyleSheet, Text, TextInput, View, Dimensions} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../Assets';

const Deskripsi = props => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.View}>
        <TextInput
          style={styles.TextInput}
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.FontAbuABu}
          multiline={true}
          numberOfLines={3}
          textAlignVertical="top"
          textAlign="justify" // Mengatur teks menjadi rata kiri dan rata kanan
          {...props}
        />
      </View>
    </SafeAreaView>
  );
};

export default Deskripsi;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {},
  View: {
    width: windowWidth * 0.8,
    height: 75,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    borderRadius: 10,
  },
  TextInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 14,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
});
