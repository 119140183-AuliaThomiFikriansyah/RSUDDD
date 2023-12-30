import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../../Assets';

const data = [
  {label: 'Izin', value: '1'},
  {label: 'Sakit', value: '2'},
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      data={data}
      labelField="label"
      valueField="value"
      placeholder="Pilih Keperluan"
      value={value}
      onChange={item => {
        setValue(item.value);
        const pilihan = `${item.label}`;
        console.log(`${pilihan}`);
      }}
      renderItem={renderItem}
    />
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
});
