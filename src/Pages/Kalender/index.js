import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../Assets';

const Kalender = () => {
  const navigation = useNavigation();
  const [selectedStarDate, setSelectedStarDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();

  const onDateChange = (date, type) => {
    const newDate = JSON.stringify(date);
    const newData1 = newDate.substring(1, newDate.length - 1);
    const dates = newData1.split('T');
    const date1 = dates[0].split('-');
    const day = date1[2];
    const month = date1[1];
    const year = date1[0];

    if (type === 'END_DATE') {
      if (day === undefined) {
        setSelectedEndDate();
      } else {
        setSelectedEndDate(day + '/' + month + '/' + year);
      }
    } else {
      setSelectedStarDate(day + '/' + month + '/' + year);
      setSelectedEndDate();
    }
  };

  const HandleKirim = () => {
    navigation.navigate('Izin', {
      startDate: selectedStarDate,
      endDate: selectedEndDate,
    });
    console.log(selectedStarDate);
    console.log(selectedEndDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date()} // Today
          maxDate={new Date(2024, 12, 30)}
          todayBackgroundColor="#0F56B3"
          selectedDayColor="#0F56B3"
          selectedDayTextColor="#FFFFFF"
          onDateChange={onDateChange}
        />
      </View>
      <TouchableOpacity style={styles.LoginButton} onPress={HandleKirim}>
        <Text style={styles.ButtonText}>OK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    width: windowWidth,
    height: windowheight * 0.05,
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
  LoginButton: {
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.9,
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

export default Kalender;
