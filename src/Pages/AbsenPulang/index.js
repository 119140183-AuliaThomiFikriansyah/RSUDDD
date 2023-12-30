import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Assets';
import {Kamera, Waktu} from '../../Components';

const AbsenMasuk = () => {
  const navigation = useNavigation();

  const HandleKirim = screen => {
    navigation.navigate('Menu');
  };

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
            Absen Pulang
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.viewFooter}>
          <Waktu />
        </View>
        <View style={styles.viewFooter}>
          <Kamera />
          <TouchableOpacity style={styles.LoginButton} onPress={HandleKirim}>
            <Text style={styles.ButtonText}>Absensi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AbsenMasuk;

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
  footer: {
    alignItems: 'center',
  },
  LoginButton: {
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 20,
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.PutihDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansSemiBold',
    textTransform: 'uppercase',
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
