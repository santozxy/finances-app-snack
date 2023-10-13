import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './Profile/index';
import { primary, secundary, terciary,quaternary, quinternary } from '../../../../colors';

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 15
  : 64;

export default function Header() {

  return (
    <LinearGradient
      colors={[secundary, primary, secundary, secundary]}
      style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={30} color={terciary} />
        </TouchableOpacity>
        <View>
          <Profile />
        </View>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={30} color={terciary}/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.username}>Olá, Junior Santos </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    paddingStart: 18,
    paddingEnd: 18,
    paddingBottom: 45,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    borderBottomWidth:6,
    borderColor:quaternary
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderColor: terciary,
  },
  username: {
    marginVertical: 15,
    fontSize: 19,
    fontWeight: 'bold',
    color: quinternary,
    textAlign: 'center',
  },
});
