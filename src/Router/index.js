import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AbsenMasuk,
  AbsenPulang,
  Cuti,
  History,
  Home,
  Izin,
  Key,
  Login,
  Profil,
  Splash,
  Kalender,
} from '../Pages';
import {Colors} from '../Assets';
import {IconWithLabel} from '../Components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          bottom: 20,
          borderRadius: 20,
          right: 20,
          left: 20,
          height: 70,
        },
        tabBarShowLabel: false, // Ini akan menyembunyikan label tab
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconWithLabel
                focused={focused}
                labelText="Home"
                iconName="house"
                activeColor={Colors.BiruDefault}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconWithLabel
                focused={focused}
                labelText="History"
                iconName="file-circle-check"
                activeColor={Colors.BiruDefault}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <IconWithLabel
                focused={focused}
                labelText="Profil"
                iconName="id-card"
                activeColor={Colors.BiruDefault}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Roter = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenMasuk"
        component={AbsenMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Izin"
        component={Izin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cuti"
        component={Cuti}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AbsenPulang"
        component={AbsenPulang}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Key" component={Key} options={{headerShown: false}} />
      <Stack.Screen
        name="Kalender"
        component={Kalender}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Roter;
