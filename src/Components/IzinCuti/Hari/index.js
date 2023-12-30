import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../../../Assets';

const data = [
  {label: 'Hari Ini', value: '1'},
  {label: 'Pilih Tanggal', value: '2'},
];

const monthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Okt',
  'Nov',
  'Des',
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const handleDropdownChange = item => {
    setValue(item.value);

    if (item.value === '1') {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();
      const monthAbbreviation = monthAbbreviations[month];
      const formattedDate = `${day} ${monthAbbreviation} ${year}`;
      console.log(`${formattedDate}`);
    }
  };

  const renderDropdownItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Pilih Waktu"
        value={value}
        onChange={handleDropdownChange}
        renderItem={renderDropdownItem}
      />
      {value === '2' && (
        <TouchableOpacity style={styles.ButtonPilihTanggal}>
          <Text style={styles.ButtonText}>Pilih Tanggal</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DropdownComponent;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  dropdown: {
    width: windowWidth * 0.8,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: Colors.BiruDefault,
    borderWidth: 1,
  },
  item: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 16,
    color: Colors.HitamDefault,
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
  ButtonPilihTanggal: {
    marginTop: 5,
    backgroundColor: Colors.BiruDefault,
    width: windowWidth * 0.8,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 14,
    color: Colors.PutihDefault,
    textAlign: 'center',
    fontFamily: 'FiraSansSemiBold',
    textTransform: 'uppercase',
  },
});
