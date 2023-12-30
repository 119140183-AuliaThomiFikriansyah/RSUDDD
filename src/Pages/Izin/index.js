import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Assets';
import {Deskripsi, Hari, Tanggal, UploadFoto} from '../../Components/IzinCuti';
import {KeperluanIzin} from '../../Components';

const Izin = () => {
  const navigation = useNavigation();
  const [deskripsi, setDeskripsi] = useState('');

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
            Pengajuan Izin
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.footer}>
          <View style={styles.viewFooter}>
            <KeperluanIzin />
          </View>
          <View style={styles.viewFooter}>
            <Tanggal />
          </View>
          <View style={styles.viewFooter}>
            <UploadFoto />
          </View>
          <View style={styles.viewFooter}>
            <Deskripsi
              placeholder="Deskripsi"
              value={deskripsi}
              onChangeText={text => setDeskripsi(text)}
            />
          </View>
          <TouchableOpacity style={styles.LoginButton} onPress={HandleKirim}>
            <Text style={styles.ButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Izin;

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
  },
  view: {
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  viewFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
});
