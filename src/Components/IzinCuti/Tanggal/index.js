import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../../../Assets';

const Tanggal = ({onInputChange}, {onInputChange1}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const startDate = route.params?.startDate;
  const endDate = route.params?.endDate;

  const HandleTanggal = screen => {
    navigation.navigate('Kalender');
    onInputChange(startDate);
    onInputChange1(endDate);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{color: Colors.FontAbuABu}}>Pilih Tanggal</Text>
        <View
          style={{
            flexDirection: 'row',
            width: windowWidth * 0.8,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.ButtonPilihTanggal}
            onPress={HandleTanggal}>
            <Text style={styles.ButtonText}>
              {startDate ? startDate : 'Tanggal Awal'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonPilihTanggal}>
            <Text style={styles.ButtonText}>
              {endDate ? endDate : 'Tanggal Akhir'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ButtonPilihTanggal: {
    marginTop: 2,
    width: windowWidth * 0.35,
    borderWidth: 1,
    borderColor: Colors.BiruDefault,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.HitamDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansRegular',
  },
});

export default Tanggal;
