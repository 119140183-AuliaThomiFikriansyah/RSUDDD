import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown'; // Import Dropdown
import DatePicker from 'react-native-datepicker';
import {Colors} from '../../Assets';

const data = [
  {label: 'Hari Ini', value: '1'},
  {label: 'Pilih Tanggal', value: '2'},
];

const DropHari = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#888888'}]}>Hari</Text>
      );
    }
    return null;
  };

  const renderDatePicker = () => {
    if (value === '1') {
      // If "Hari Ini" is selected
      const currentDate = new Date(); // Get current date
      const day = currentDate.getDate(); // Get day (tanggal)
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Juni',
        'Juli',
        'Agu',
        'Sep',
        'Okto',
        'Nov',
        'Des',
      ];
      const monthIndex = currentDate.getMonth(); // Get month (bulan)
      const month = monthNames[monthIndex];
      const year = currentDate.getFullYear(); // Get year (tahun)
      const gabungan = `${day} ${month} ${year}`;

      return (
        <View>
          <Text style={styles.selectedDateText}>Tanggal: {gabungan}</Text>
        </View>
      );
    } else if (value === '2') {
      // If "Pilih Tanggal" is selected
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: Colors.HitamDefault, marginTop: 10}}>
              Tanggal Mulai
            </Text>
            <TouchableOpacity
              style={{
                width: 180,
                height: 50,
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: Colors.abuabu,
              }}>
              <Text
                style={{
                  color: Colors.HitamDefault,
                  textAlign: 'center',
                  fontFamily: 'FiraSansRegular',
                }}>
                Pilih
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{color: Colors.HitamDefault, marginTop: 10}}>
              Tanggal Akhir
            </Text>
            <TouchableOpacity
              style={{
                width: 180,
                height: 50,
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor: Colors.abuabu,
              }}>
              <Text
                style={{
                  color: Colors.HitamDefault,
                  textAlign: 'center',
                  fontFamily: 'FiraSansRegular',
                }}>
                Pilih
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#888888'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Pilih Hari' : ''}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      {renderDatePicker()}
    </View>
  );
};

export default DropHari;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    width: windowWidth * 0.8,
    height: 50,
    borderColor: Colors.BiruDefault,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: Colors.BiruDefault,
    fontFamily: 'FiraSansRegular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  itemTextStyle: {
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
  },
  selectedDateText: {
    fontSize: 16,
    color: Colors.HitamDefault,
    fontFamily: 'FiraSansRegular',
    marginTop: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
