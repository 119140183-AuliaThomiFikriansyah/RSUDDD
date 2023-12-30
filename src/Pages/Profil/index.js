import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

import {BgProfil, Colors, IconProfil} from '../../Assets';
import {SetProfil} from '../../Components';

const Profil = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground source={BgProfil} style={styles.Bg}>
        <View style={styles.Profil}>
          <Image source={IconProfil} />
          <View style={styles.View}>
            <Text style={styles.Text1}>Aulia Thomi Fikriansyah</Text>
            <Text style={styles.Text2}>119140183</Text>
          </View>
        </View>
      </ImageBackground>
      <SetProfil />
    </SafeAreaView>
  );
};

export default Profil;

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Bg: {
    width: windowWidth,
    height: windowheight * 0.297,
  },
  Profil: {
    width: windowWidth,
    height: windowheight * 0.297,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View: {
    marginLeft: 10,
  },
  Text1: {
    fontSize: 18,
    fontFamily: 'FiraSansSemiBold',
    color: Colors.PutihDefault,
  },
  Text2: {
    fontSize: 18,
    fontFamily: 'FiraSansSemiBold',
    color: Colors.PutihDefault,
  },
});
