import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';

import {Colors} from '../../Assets';
import {Gagal, Pending, Sukses} from '../../Components';

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.view}>
          <Text
            style={{
              fontFamily: 'FiraSansRegular',
              fontSize: 18,
              color: Colors.PutihDefault,
            }}>
            History
          </Text>
        </View>
      </View>
      <View style={styles.Footer}>
        <Pending />
        <Sukses />
        <Gagal />
      </View>
    </SafeAreaView>
  );
};

export default History;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PutihDefault,
  },
  header: {
    width: windowWidth,
    height: windowheight * 0.1,
    backgroundColor: Colors.BiruDefault,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  view: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});
