import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, IconProfil} from '../../Assets';
import {IconButton} from '../../Components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const HandleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.HeaderView}>
          <Image source={IconProfil} style={styles.ImgProfil} />
          <View style={styles.Text}>
            <Text
              style={{
                fontFamily: 'FiraSansBold',
                fontSize: 18,
                color: Colors.PutihDefault,
              }}>
              Hello,
            </Text>
            <Text
              style={{
                fontFamily: 'FiraSansRegular',
                fontSize: 16,
                color: Colors.PutihDefault,
              }}>
              Selamat datang di absensi online
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Footer}>
        <IconButton
          tittle="Absen Masuk"
          halaman={() => HandleGoTo('AbsenMasuk')}
        />
        <IconButton tittle="Izin" halaman={() => HandleGoTo('Izin')} />
        <IconButton tittle="Cuti" halaman={() => HandleGoTo('Cuti')} />
        <IconButton
          tittle="Absen Pulang"
          halaman={() => HandleGoTo('AbsenPulang')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Header: {
    width: windowWidth,
    height: windowheight * 0.237,
    backgroundColor: Colors.BiruDefault,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    backgroundColor: Colors.PutihDefault,
    marginHorizontal: windowWidth * 0.064,
    height: 90,
    borderRadius: 20,
    marginTop: -windowheight * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    justifyContent: 'space-around',

    elevation: 15,
    alignItems: 'center',
  },
  HeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgPorfil: {
    width: 48,
    height: 48,
  },
  Text: {
    marginLeft: 10,
  },
});
