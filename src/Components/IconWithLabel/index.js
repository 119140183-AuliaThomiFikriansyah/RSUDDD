import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import PropTypes from 'prop-types';

import {Colors} from '../../Assets';

const IconWithLabel = props => {
  const {iconName, IconSize = 25, activeColor, labelText, focused} = props;

  const textStyle = {
    color: focused ? activeColor : '#666666',
    fontFamily: focused ? 'FiraSansSemiBold' : 'FiraSansSemiBold',
  };
  return (
    <View style={styles.TabBar}>
      <FontAwesome6
        name={iconName}
        color={focused ? activeColor : '#666666'}
        size={IconSize}></FontAwesome6>
      <Text style={textStyle}>{labelText}</Text>
    </View>
  );
};

IconWithLabel.propTypes = {
  iconName: PropTypes.string.isRequired,
  IconSize: PropTypes.number,
  activeColor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

export default IconWithLabel;

const styles = StyleSheet.create({
  TabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  TabBarText: {
    fontFamily: 'FiraSansRegular',
    color: Colors.BiruDefault,
  },
});
