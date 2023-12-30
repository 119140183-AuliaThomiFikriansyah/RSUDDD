import {StyleSheet, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {Colors, LogoAbsensiBiru} from '../../Assets';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar
        backgroundColor={Colors.PutihDefault}
        barStyle={'dark-content'}
      />
      <View>
        <LogoAbsensiBiru />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.PutihDefault,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
