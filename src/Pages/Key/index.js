import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Colors, LogoAbsensiPutih} from '../../Assets';
import {Input, Kamera} from '../../Components';

const Key = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Menu');
    // Tambahkan logika login di sini
    console.log('Melakukan login...');
  };

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        backgroundColor={Colors.BiruDefault}
        barStyle={'light-content'}
      />
      <View style={styles.Header}>
        <LogoAbsensiPutih />
      </View>

      <View style={styles.Footer}>
        <View style={styles.ViewText}>
          <Text style={styles.Text1}>Masuk</Text>
          <Text style={styles.Text2}>
            Selamat datang silahkan masuk dengan akun anda
          </Text>
        </View>
        <Input
          name="squarespace"
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          name="lock"
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View>
          <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
            <Text style={styles.ButtonText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Key;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.BiruDefault,
  },
  Header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Footer: {
    backgroundColor: Colors.PutihDefault,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewText: {
    marginTop: 20,
    width: windowWidth * 0.8,
  },
  Text1: {
    fontSize: 25,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansSemiBold',
  },
  Text2: {
    fontSize: 14,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  ViewInput: {
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
});
