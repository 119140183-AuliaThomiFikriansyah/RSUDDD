import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconAbsenMasuk,
  IconAbsenPulang,
  Colors,
  IconCuti,
  IconIzin,
} from '../../Assets';

const IconButton = ({tittle, halaman}) => {
  const Icon = () => {
    if (tittle == 'Absen Masuk') return <IconAbsenMasuk />;

    if (tittle == 'Izin') return <IconIzin />;

    if (tittle == 'Cuti') return <IconCuti />;

    if (tittle == 'Absen Pulang') return <IconAbsenPulang />;

    return <IconAbsenMasuk />;
  };
  return (
    <TouchableOpacity onPress={halaman}>
      <View style={styles.View}>
        <Icon style={styles.Icon} />
        <Text style={styles.Text}>{tittle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  View: {
    alignItems: 'center',
  },
  Icon: {
    width: 24,
    height: 24,
  },
  Text: {
    fontFamily: 'FiraSansRegular',
    fontSize: 14,
    textAlign: 'center',
    color: Colors.HitamDefault,
  },
});
